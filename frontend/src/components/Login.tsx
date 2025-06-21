import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

interface LoginProps {
  onLogin?: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/login', 
        { username, password },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log('Login exitoso:', response.data);
      if (onLogin) {
        onLogin(username);
      }
    } catch (err: any) {
      if (err.response) {
        // El servidor respondió con un código de error
        setError(err.response.data.error || 'Error en el inicio de sesión');
      } else if (err.request) {
        // La petición fue hecha pero no se recibió respuesta
        setError('Error de conexión. Verifica que el backend esté ejecutándose.');
      } else {
        // Algo más causó el error
        setError('Error inesperado. Intenta de nuevo.');
      }
      console.error('Error de login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
      
      <p className="credentials-info">
        <small>Usuario: admin, Contraseña: 123456</small>
      </p>
    </div>
  );
};

export default Login; 