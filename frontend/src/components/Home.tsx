import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Home.css';

interface Note {
  id: number;
  title: string;
  content: string;
}

interface HomeProps {
  onLogout: () => void;
  username: string;
}

const Home: React.FC<HomeProps> = ({ onLogout, username }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Cargar notas al montar el componente
  const loadNotes = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/notas', {
        withCredentials: true
      });
      setNotes(response.data);
    } catch (err: any) {
      if (err.response?.status === 401) {
        // No autorizado, redirigir al login
        onLogout();
      } else {
        setError('Error al cargar las notas');
        console.error('Error cargando notas:', err);
      }
    }
  }, [onLogout]);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/notas', 
        { title: title.trim(), content: content.trim() },
        { withCredentials: true }
      );

      // Agregar la nueva nota a la lista
      setNotes(prevNotes => [...prevNotes, response.data]);
      
      // Limpiar el formulario
      setTitle('');
      setContent('');
    } catch (err: any) {
      if (err.response?.status === 401) {
        onLogout();
      } else {
        setError('Error al guardar la nota');
        console.error('Error guardando nota:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteNote = async (noteId: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/api/notas/${noteId}`, {
        withCredentials: true
      });

      // Eliminar la nota de la lista local
      setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
    } catch (err: any) {
      if (err.response?.status === 401) {
        onLogout();
      } else {
        setError('Error al eliminar la nota');
        console.error('Error eliminando nota:', err);
      }
    }
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Mis Notas</h1>
        <button onClick={onLogout} className="logout-link">
          Cerrar Sesión
        </button>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <h3>Nueva Nota</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="titulo"
            placeholder="Título de la nota"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <textarea
            name="contenido"
            placeholder="Contenido de la nota"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Guardando...' : 'Guardar Nota'}
        </button>
      </form>
      
      <h3>Mis Notas ({notes.length})</h3>
      {notes.length === 0 ? (
        <p className="no-notes">No tienes notas aún. ¡Crea tu primera nota!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="nota">
            <div className="nota-header">
              <h4>{note.title}</h4>
              <button 
                onClick={() => handleDeleteNote(note.id)}
                className="delete-button"
                title="Eliminar nota"
              >
                🗑️
              </button>
            </div>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home; 