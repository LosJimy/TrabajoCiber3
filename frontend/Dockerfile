FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del frontend
COPY . .

# Construir la app para producción
RUN npm run build

# Instalar servidor estático
RUN npm install -g serve

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la app
CMD ["serve", "-s", "build"]