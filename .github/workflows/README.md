# CI/CD Pipeline - MiApp Segura

Este workflow de GitHub Actions automatiza todo el proceso de desarrollo, testing y despliegue de la aplicación MiApp Segura.

## 🚀 Jobs del Pipeline

### 1. **Frontend Tests**
- ✅ Instala dependencias del frontend
- ✅ Ejecuta tests unitarios con coverage
- ✅ Construye la aplicación React
- ✅ Sube reportes de coverage a Codecov

### 2. **Backend Tests**
- ✅ Instala dependencias del backend
- ✅ Ejecuta tests unitarios
- ✅ Compila TypeScript a JavaScript

### 3. **Security Analysis**
- ✅ Ejecuta `npm audit` en frontend y backend
- ✅ Escaneo de vulnerabilidades con Snyk
- ✅ Detecta dependencias vulnerables
- ✅ Reporta vulnerabilidades de alta severidad

### 4. **Code Quality**
- ✅ Ejecuta ESLint en frontend y backend
- ✅ Verificación de tipos TypeScript
- ✅ Análisis de calidad de código
- ✅ Detección de errores de sintaxis

### 5. **Docker Build**
- ✅ Construye imagen Docker del frontend
- ✅ Construye imagen Docker del backend
- ✅ Sube imágenes al GitHub Container Registry
- ✅ Usa cache para builds más rápidos

### 6. **Integration Tests**
- ✅ Tests de integración con base de datos
- ✅ Verifica que frontend y backend se comunican
- ✅ Tests end-to-end básicos

### 7. **Deploy** (Solo en releases)
- ✅ Despliegue automático a producción
- ✅ Notificaciones de deploy exitoso

## 📋 Triggers

El workflow se ejecuta en:
- **Push** a ramas `main` o `develop`
- **Pull Request** hacia `main`
- **Release** publicado

## 🔧 Configuración Requerida

### Secrets de GitHub

Configura estos secrets en tu repositorio:

```bash
# Para análisis de seguridad con Snyk
SNYK_TOKEN=tu_token_de_snyk

# Para deploy (opcional)
DEPLOY_KEY=tu_clave_de_deploy
```

### Scripts de package.json

Asegúrate de tener estos scripts en tus `package.json`:

**Frontend:**
```json
{
  "scripts": {
    "test": "react-scripts test",
    "build": "react-scripts build",
    "lint": "eslint src --ext .ts,.tsx"
  }
}
```

**Backend:**
```json
{
  "scripts": {
    "test": "jest",
    "build": "tsc",
    "lint": "eslint src --ext .ts",
    "test:integration": "jest --config jest.integration.config.js"
  }
}
```

## 🛡️ Seguridad

### Análisis Automático
- **npm audit**: Detecta vulnerabilidades en dependencias
- **Snyk**: Análisis profundo de seguridad
- **ESLint**: Detección de patrones inseguros
- **TypeScript**: Verificación de tipos para prevenir errores

### Buenas Prácticas
- ✅ Tests automáticos en cada commit
- ✅ Análisis de seguridad antes del merge
- ✅ Builds reproducibles con Docker
- ✅ Deploy solo después de tests exitosos

## 📊 Monitoreo

### Métricas Disponibles
- **Coverage de código**: Reportes automáticos
- **Tiempo de build**: Optimizado con cache
- **Vulnerabilidades**: Reportes de Snyk
- **Calidad de código**: Métricas de ESLint

### Notificaciones
- ✅ Status checks en PRs
- ✅ Reportes de coverage
- ✅ Alertas de seguridad
- ✅ Confirmación de deploy

## 🚨 Troubleshooting

### Problemas Comunes

**1. Tests fallan**
```bash
# Ejecuta localmente para debug
cd TrabajoCiber3/Frontend && npm test
cd TrabajoCiber3/Backend && npm test
```

**2. Build de Docker falla**
```bash
# Verifica Dockerfiles
docker build -t test ./TrabajoCiber3/Frontend
docker build -t test ./TrabajoCiber3/Backend
```

**3. Vulnerabilidades detectadas**
```bash
# Actualiza dependencias
npm audit fix
npm update
```

## 🔄 Flujo de Desarrollo

1. **Desarrollo** → Trabaja en tu rama
2. **Push** → Se ejecutan tests automáticamente
3. **Pull Request** → Análisis completo de seguridad y calidad
4. **Merge** → Build de Docker images
5. **Release** → Deploy automático a producción

## 📈 Mejoras Futuras

- [ ] Tests de penetración automatizados
- [ ] Análisis de dependencias con dependabot
- [ ] Deploy a múltiples ambientes
- [ ] Notificaciones a Slack/Discord
- [ ] Métricas de performance
- [ ] Tests de carga automatizados 