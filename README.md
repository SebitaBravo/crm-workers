# CRM Workers Monorepo

## Estructura del Proyecto

- `backend/`: Código del servidor
- `db/`: Estructura de la base de datos
- `frontend/`: Aplicación frontend

## Scripts Disponibles

- `pnpm run start:backend`: Inicia el servidor backend
- `pnpm run start:frontend`: Inicia la aplicación frontend
- `pnpm run dev`: Inicia backend y frontend en modo de desarrollo
- `pnpm run build`: Compila backend y frontend

## Estructura de Carpetas

### Backend

#### La estructura de carpetas del backend es la siguiente:

```plaintext
backend/
├── src/
│ ├── controllers/    # Controladores de la API
│ ├── middlewares/    # Middlewares de Express
│ ├── routes/         # Rutas de la API
│ ├── tokens/         # Generador de Tokens
│ ├── app.js          # Configuracion de las rutas
│ ├── db.js           # Configuración de la base de datos
├── index.js          # Inicialización del servidor
├── package.json
```

### Frontend

#### La estructura de carpetas del frontend es la siguiente:

```plaintext
frontend/
├── src/
│   ├── auth/         # Componentes de autenticación
│   ├── components/   # Componentes React
│   ├── pages/        # Páginas de la aplicación
│   ├── routes/       # Rutas de la aplicación
│   ├── services/     # Servicios de la aplicación
│   ├── utils/        # Utilidades de la aplicación
│   ├── App.jsx       # Componente principal
│   └── main.jsx      # Punto de entrada de React
├── package.json
```
