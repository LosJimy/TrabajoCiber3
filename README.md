# 🔐 MiApp Segura - Aplicación de Notas con Seguridad Avanzada

Una aplicación web moderna para gestión de notas personales con enfoque en ciberseguridad, implementando las mejores prácticas de seguridad web y análisis de vulnerabilidades. (solo pido pasar nada mas)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Seguridad](#-seguridad)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Documentation](#-api-documentation)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🎯 Descripción

MiApp Segura es una aplicación web full-stack diseñada para demostrar y practicar conceptos de ciberseguridad en aplicaciones web modernas. La aplicación permite a los usuarios crear, gestionar y eliminar notas personales de forma segura, implementando múltiples capas de seguridad.

### 🎓 Propósito Educativo

Este proyecto está diseñado para:
- **Aprender** las mejores prácticas de seguridad web
- **Practicar** técnicas de desarrollo seguro
- **Demostrar** vulnerabilidades comunes y sus soluciones
- **Implementar** herramientas de análisis de seguridad

## ✨ Características

### 🔐 Seguridad
- ✅ **Autenticación de sesiones** con Express Session
- ✅ **Validación de entrada** en frontend y backend
- ✅ **CORS configurado** para orígenes específicos
- ✅ **Headers de seguridad** implementados
- ✅ **Análisis de vulnerabilidades** automático
- ✅ **Tests de seguridad** integrados

### 📝 Funcionalidades
- ✅ **Sistema de login** seguro
- ✅ **Gestión de notas** (crear, leer, eliminar)
- ✅ **Interfaz moderna** y responsiva
- ✅ **Validación en tiempo real**
- ✅ **Manejo de errores** robusto
- ✅ **Estados de carga** informativos

### 🛠️ Desarrollo
- ✅ **TypeScript** en frontend y backend
- ✅ **Docker** para containerización
- ✅ **CI/CD Pipeline** completo
- ✅ **Análisis de código** con SonarCloud
- ✅ **Tests automatizados**
- ✅ **Coverage de código**

## 🏗️ Arquitectura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React)       │◄──►│   (Express)     │◄──►│   (JSON File)   │
│   Port: 8080    │    │   Port: 3000    │    │   (Local)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Componentes Principales

- **Frontend**: Aplicación React con TypeScript
- **Backend**: API REST con Express y TypeScript
- **Base de Datos**: Archivo JSON (para simplicidad)
- **Contenedores**: Docker para ambos servicios
- **CI/CD**: GitHub Actions con análisis de seguridad

## 🛠️ Tecnologías

### Frontend
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Axios** - Cliente HTTP
- **CSS3** - Estilos modernos
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **Express Session** - Gestión de sesiones
- **CORS** - Cross-Origin Resource Sharing

### DevOps & Seguridad
- **Docker** - Containerización
- **GitHub Actions** - CI/CD Pipeline
- **Snyk** - Análisis de vulnerabilidades
- **ESLint** - Linting de código

## 🚀 Instalación

### Prerrequisitos

- **Node.js** 18+ 
- **Docker** y **Docker Compose**
- **Git**

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/miapp-segura.git
cd miapp-segura
```

2. **Instalar dependencias**
```bash
# Frontend
cd TrabajoCiber3/Frontend
npm install

# Backend
cd ../Backend
npm install
```

3. **Ejecutar con Docker (Recomendado)**
```bash
cd TrabajoCiber3
docker-compose up --build
```

4. **Ejecutar localmente (Alternativo)**
```bash
# Terminal 1 - Backend
cd TrabajoCiber3/Backend
npm run dev

# Terminal 2 - Frontend
cd TrabajoCiber3/Frontend
npm start
```

### Variables de Entorno

Crea un archivo `.env` en el directorio raíz:

```env
# Backend
PORT=3000
SESSION_SECRET=tu_clave_super_secreta_aqui

# Frontend
REACT_APP_API_URL=http://localhost:3000
```

## 📖 Uso

### Acceso a la Aplicación

1. **Abrir navegador** en `http://localhost:8080`
2. **Iniciar sesión** con las credenciales:
   - Usuario: `admin`
   - Contraseña: `123456`

### Funcionalidades Disponibles

#### 🔐 Autenticación
- Login seguro con validación
- Sesiones persistentes
- Logout automático

#### 📝 Gestión de Notas
- **Crear notas**: Título y contenido
- **Ver notas**: Lista de todas las notas
- **Eliminar notas**: Con confirmación
- **Validación**: Campos requeridos

#### 🛡️ Características de Seguridad
- **CORS configurado** para `localhost:8080`
- **Sesiones seguras** con secret
- **Validación de entrada** en ambos lados
- **Manejo de errores** sin información sensible

## 🛡️ Seguridad

### Implementaciones de Seguridad

#### 🔒 Autenticación y Autorización
- **Sesiones seguras** con Express Session
- **Middleware de autenticación** para rutas protegidas
- **Validación de credenciales** en el servidor

#### 🛡️ Protección de Datos
- **Validación de entrada** en frontend y backend
- **Sanitización** de datos de entrada
- **Headers de seguridad** configurados

#### 🌐 Seguridad Web
- **CORS** configurado para orígenes específicos
- **Content-Type** validado
- **Manejo de errores** sin información sensible

### Análisis de Seguridad

#### 🔍 Herramientas Integradas
- **npm audit** - Análisis de dependencias
- **Snyk** - Escaneo de vulnerabilidades
- **ESLint** - Detección de patrones inseguros

#### 📊 Métricas Disponibles
- **Coverage de código**: Reportes automáticos
- **Tiempo de build**: Optimizado con cache
- **Vulnerabilidades**: Reportes de Snyk
- **Calidad de código**: Métricas de ESLint

## 🔄 CI/CD Pipeline

### Workflow Automatizado

El proyecto incluye un pipeline completo de CI/CD con GitHub Actions:

#### 🧪 Testing
- **Tests unitarios** para frontend y backend
- **Tests de integración** con base de datos
- **Coverage de código** automático

#### 🔍 Análisis de Seguridad
- **npm audit** en cada commit
- **Snyk** para vulnerabilidades
- **ESLint** para calidad de código

#### 🐳 Containerización
- **Build automático** de imágenes Docker
- **Push** al GitHub Container Registry
- **Cache optimizado** para builds rápidos

#### 🚀 Deploy
- **Deploy automático** en releases
- **Notificaciones** de estado
- **Rollback** automático en caso de fallo

### Configuración del Pipeline

Ver [documentación del workflow](.github/workflows/README.md) para detalles completos.

## 📁 Estructura del Proyecto

```
TrabajoCiber3/
├── Frontend/                 # Aplicación React
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   │   ├── Login.tsx     # Componente de login
│   │   │   ├── Home.tsx      # Componente principal
│   │   │   └── *.css         # Estilos de componentes
│   │   ├── App.tsx           # Componente raíz
│   │   └── index.tsx         # Punto de entrada
│   ├── public/               # Archivos estáticos
│   ├── package.json          # Dependencias frontend
│   └── Dockerfile            # Imagen Docker frontend
├── Backend/                  # API Express
│   ├── src/
│   │   └── app.ts            # Servidor Express
│   ├── notes.json            # Base de datos (JSON)
│   ├── package.json          # Dependencias backend
│   └── Dockerfile            # Imagen Docker backend
├── .github/
│   └── workflows/
│       ├── ci-cd.yml         # Pipeline de CI/CD
│       └── README.md         # Documentación del workflow
├── docker-compose.yml        # Orquestación de contenedores
├── sonar-project.properties  # Configuración SonarCloud
└── README.md                 # Este archivo
```

## 📚 API Documentation

### Endpoints Disponibles

#### 🔐 Autenticación

**POST** `/api/login`
```json
{
  "username": "admin",
  "password": "123456"
}
```
*Respuesta exitosa:*
```json
{
  "message": "Inicio de sesión exitoso",
  "user": { "username": "admin" },
  "sessionId": "session_id_here"
}
```

**POST** `/api/logout`
*Cierra la sesión actual*

#### 📝 Gestión de Notas

**GET** `/api/notas`
*Obtiene todas las notas del usuario autenticado*

**POST** `/api/notas`
```json
{
  "title": "Título de la nota",
  "content": "Contenido de la nota"
}
```

**DELETE** `/api/notas/:id`
*Elimina una nota específica por ID*

### Códigos de Respuesta

- `200` - Operación exitosa
- `201` - Recurso creado exitosamente
- `401` - No autorizado
- `404` - Recurso no encontrado
- `500` - Error interno del servidor

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crea** un Pull Request

### Estándares de Código

- **TypeScript** para todo el código
- **ESLint** para linting
- **Tests** para nuevas funcionalidades
- **Documentación** para APIs nuevas

### Reporte de Bugs

Si encuentras un bug o vulnerabilidad de seguridad:

1. **No lo reportes** en issues públicos
2. **Contacta** directamente al equipo de desarrollo
3. **Proporciona** detalles específicos del problema

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **OWASP** por las mejores prácticas de seguridad
- **React** y **Express** por los frameworks
- **GitHub Actions** por la automatización
- **Snyk** por el análisis de vulnerabilidades

## 📞 Contacto

- **Proyecto**: [GitHub Repository](https://github.com/tu-usuario/miapp-segura)
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/miapp-segura/issues)
- **Documentación**: [Wiki del Proyecto](https://github.com/tu-usuario/miapp-segura/wiki)

---

<div align="center">

**🔐 MiApp Segura - Seguridad Web Moderna**

*Desarrollado con ❤️ para el aprendizaje de ciberseguridad*

[![Security](https://img.shields.io/badge/Security-Audited-green.svg)](https://snyk.io/test/github/tu-usuario/miapp-segura)
[![Tests](https://img.shields.io/badge/Tests-Passing-green.svg)](https://github.com/tu-usuario/miapp-segura/actions)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

### Notificaciones
- ✅ Status checks en PRs
- ✅ Reportes de coverage
- ✅ Alertas de seguridad
- ✅ Confirmación de deploy

## 🔄 Flujo de Desarrollo

1. **Desarrollo** → Trabaja en tu rama
2. **Push** → Se ejecutan tests automáticamente
3. **Pull Request** → Análisis completo de seguridad y calidad
4. **Merge** → Build de Docker images
5. **Release** → Deploy automático a producción