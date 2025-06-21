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

### 5. **SonarCloud Analysis** 🆕
- ✅ Análisis completo de calidad de código
- ✅ Detección de bugs y vulnerabilidades
- ✅ Métricas de mantenibilidad y confiabilidad
- ✅ Análisis de duplicación de código
- ✅ Reportes de cobertura integrados
- ✅ Dashboard web con métricas históricas

### 6. **Docker Build**
- ✅ Construye imagen Docker del frontend
- ✅ Construye imagen Docker del backend
- ✅ Sube imágenes al GitHub Container Registry
- ✅ Usa cache para builds más rápidos

### 7. **Integration Tests**
- ✅ Tests de integración con base de datos
- ✅ Verifica que frontend y backend se comunican
- ✅ Tests end-to-end básicos

### 8. **Deploy** (Solo en releases)
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

# Para análisis con SonarCloud
SONAR_TOKEN=tu_token_de_sonarcloud

# Para deploy (opcional)
DEPLOY_KEY=tu_clave_de_deploy
```

### Configuración de SonarCloud

1. **Crear cuenta en SonarCloud:**
   - Ve a [sonarcloud.io](https://sonarcloud.io)
   - Crea una cuenta gratuita
   - Crea una nueva organización

2. **Crear proyecto en SonarCloud:**
   - Crea un nuevo proyecto
   - Selecciona GitHub como proveedor
   - Conecta tu repositorio

3. **Obtener token:**
   - Ve a Account → Security
   - Genera un nuevo token
   - Guárdalo como `SONAR_TOKEN` en GitHub Secrets

4. **Actualizar configuración:**
   - Edita `sonar-project.properties`
   - Cambia `tu-usuario` por tu nombre de usuario de SonarCloud
   - Cambia `tu-usuario_miapp-segura` por tu project key

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
- **SonarCloud**: Análisis completo de calidad y seguridad
- **ESLint**: Detección de patrones inseguros
- **TypeScript**: Verificación de tipos para prevenir errores

### Buenas Prácticas
- ✅ Tests automáticos en cada commit
- ✅ Análisis de seguridad antes del merge
- ✅ Quality Gate de SonarCloud
- ✅ Builds reproducibles con Docker
- ✅ Deploy solo después de tests exitosos

## 📊 Monitoreo

### Métricas Disponibles
- **Coverage de código**: Reportes automáticos
- **Tiempo de build**: Optimizado con cache
- **Vulnerabilidades**: Reportes de Snyk y SonarCloud
- **Calidad de código**: Métricas de ESLint y SonarCloud
- **Dashboard SonarCloud**: Métricas históricas y tendencias

### Notificaciones
- ✅ Status checks en PRs
- ✅ Reportes de coverage
- ✅ Alertas de seguridad
- ✅ Quality Gate de SonarCloud
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

**4. SonarCloud falla**
```bash
# Verifica configuración
# 1. Token válido en GitHub Secrets
# 2. Project key correcto en sonar-project.properties
# 3. Proyecto creado en SonarCloud
```

## 🔄 Flujo de Desarrollo

1. **Desarrollo** → Trabaja en tu rama
2. **Push** → Se ejecutan tests automáticamente
3. **Pull Request** → Análisis completo de seguridad y calidad
4. **SonarCloud** → Quality Gate y métricas
5. **Merge** → Build de Docker images
6. **Release** → Deploy automático a producción

## 📈 Mejoras Futuras

- [ ] Tests de penetración automatizados
- [ ] Análisis de dependencias con dependabot
- [ ] Deploy a múltiples ambientes
- [ ] Notificaciones a Slack/Discord
- [ ] Métricas de performance
- [ ] Tests de carga automatizados
- [ ] Integración con OWASP ZAP
- [ ] Análisis de secretos en código 