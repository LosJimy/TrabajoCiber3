import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';

declare module 'express-session' {
  interface SessionData {
    user?: string;
  }
}

const app = express();
const PORT = 3000;

const DATA_FILE = path.join(__dirname, '../notes.json');

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(bodyParser.json());
//console.log("👀 Entrando al bloque que debería iniciar el servidor...");

app.use(session({
  secret: 'clave-super-secreta',
  resave: false,
  saveUninitialized: false
}));

interface Note {
  id: number;
  title: string;
  content: string;
}

// Función para cargar notas
function loadNotes(): Note[] {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data) || [];
  }
  return [];
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (!req.session.user) {
    res.status(401).json({ error: 'No autorizado' });
    return;
  }
  next();
}
// Función para guardar notas
function saveNotes(notes: Note[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
}

// Ruta para obtener todas las notas
app.get('/api/notas', requireAuth, (req: Request, res: Response) => {
  res.json(loadNotes());
});

// Ruta para crear una nueva nota
app.post('/api/notas', requireAuth, (req: Request, res: Response) => {
  const { title, content } = req.body;
  const notes = loadNotes();
  const newNote: Note = { id: Date.now(), title, content };
  notes.push(newNote);
  saveNotes(notes);
  res.status(201).json(newNote);
});

app.delete('/api/notas/:id', requireAuth, (req: Request, res: Response) => {
  const noteId = parseInt(req.params.id);
  const notes = loadNotes();
  const noteIndex = notes.findIndex(note => note.id === noteId);
  
  if (noteIndex === -1) {
    return res.status(404).json({ error: 'Nota no encontrada' });
  }
  
  const deletedNote = notes.splice(noteIndex, 1)[0];
  saveNotes(notes);
  res.json({ message: 'Nota eliminada exitosamente', deletedNote });
});

// Ruta para login simple
app.post('/api/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '123456') {
    req.session.user = username;

    res.json({
      message: 'Inicio de sesión exitoso',
      user: { username },
      sessionId: req.sessionID // 🔍 útil para debugging o auditoría
    });
  } else {
    res.status(401).json({
      error: 'Credenciales incorrectas',
      message: 'El nombre de usuario o la contraseña no coinciden'
    });
  }
});

// Ruta para logout
app.post('/api/logout', (req: Request, res: Response) => {
  req.session.destroy(() => res.json({ success: true }));
});

// ¡Aquí se queda vivo el servidor!
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
