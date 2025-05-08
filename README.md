# Proyecto 5 - Aplicación sobre Cervecerías

Este es un proyecto frontend construido con **React 19**, **Vite**, y **Material UI (MUI)** que permite visualizar distintos tipos de cervecerías y países, utilizando gráficas interactivas.

## 🛠 Tecnologías usadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- [Material UI (MUI)](https://mui.com/)
- [@mui/x-charts](https://mui.com/x/react-charts/)
- ESLint

## 🧭 Navegación
El proyecto sigue la siguiente estructura de rutas:

- `/` - Página principal con gráficos
- `/paises` - Listado de países
- `/paises/:id` - Tipos cervecerias según país
- `/cerveceriasTipos` - Tipos de cervecerías (descripción)
- `/cervecerias/:id/:id` - Listado de cervecerías según país y tipo
- `/cervecerias/:id/:id/:id` - Detalle de cervecería individual
- `/contacto` - Página de contacto
- `/nosotros` - Página "Sobre nosotros"
- `*` - Página 404 (no encontrada)

## ⚠️ Manejador de errores
El componente <ErrorBoundary> encapsula los componentes principales para capturar errores de forma segura.

## Estructura del proyecto
- El proyecto sigue una arquitectura modular, separando componentes, hooks, vistas (pages) y datos.
- Se hace uso de rutas anidadas con un layout común (Layout.jsx) y navegación (Navbar.jsx).
- Los datos están organizados en archivos .json, lo cual es ideal para desarrollo frontend sin backend.
- Se usa un ErrorBoundary para mejorar la experiencia de usuario en caso de fallos de renderizado.

- src/                  -- Código fuente de la aplicación
    - assets/               -- Imágenes y recursos estáticos
        - cerveceria.jpg
        - HopyHour_logo.png
    - components/           -- Componentes reutilizables de UI
        - Charts.jsx            -- Gráficos visuales con datos
        - ErrorBoundary.jsx     -- Manejador de errores global
        - Layout.jsx            -- Diseño base de la app (usado en el router)
        - Navbar.jsx            -- Barra de navegación superior
    - hooks/                -- Custom hooks de React
        - useFetch.jsx          -- Hook para obtener datos desde APIs
        - useMetaFiltered.jsx   -- Hook para filtrar datos según metainformación
    - pages/                -- Vistas principales asociadas a rutas
        - About.jsx             -- Página "Sobre nosotros"
        - Cerveceria.jsx        -- Vista detallada de una cervecería
        - Cervecerias.jsx       -- Lista de cervecerías por país y tipo
        - CerveceriasTipos.jsx  -- Tipos de cervecerías y descripción
        - Contact.jsx           -- Página de contacto
        - NotFound.jsx          -- Página 404
        - Paises.jsx            -- Lista de países
        - PaisesTipos.jsx       -- Tipos de cervecerías por país
    - App.jsx               -- Componente raíz principal que integra los gráficos
    - chartCountries.json   -- Datos JSON usados para gráficos de países
    - chartTypes.json       -- Datos JSON para gráficos por tipo
    - index.css             -- Estilos globales
    - main.jsx              -- Punto de entrada de la aplicación
    - paises.json           -- Dataset de países
    - Router.jsx            -- Configuración de rutas con React Router
    - tipos.json            -- Dataset de tipos de cervecerías

## Instalación

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo Vite
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run preview` - Previsualiza la versión de producción

## Conclusión
Este proyecto representa una solución frontend moderna y eficiente para visualizar información sobre cervecerías mediante gráficos interactivos y navegación dinámica. Utilizando herramientas actuales se logró construir una interfaz intuitiva, modular y escalable.

La integración de hooks personalizados, manejo de errores con ErrorBoundary, y una arquitectura basada en rutas bien definidas permite que el proyecto sea fácilmente mantenible y extensible.

Este trabajo refleja no solo la aplicación de conocimientos técnicos adquiridos, sino también la capacidad de desarrollar una SPA funcional centrada en la experiencia del usuario y buenas prácticas de desarrollo.
