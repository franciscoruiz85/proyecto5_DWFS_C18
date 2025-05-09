# Proyecto 5 - Aplicación sobre Cervecerías

Este es un proyecto frontend construido con **React 19**, **Vite**, y **Material UI (MUI)** que permite visualizar distintos tipos de cervecerías y países, utilizando gráficas interactivas.
La información mostrada se obtuvo desde las apis generadas por [Open Brewery DB](https://www.openbrewerydb.org/)

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

![image](https://github.com/user-attachments/assets/10c219fc-16e9-46ac-a28c-bc301a3080e1)

## Estructura de los .json
- paises

![image](https://github.com/user-attachments/assets/e80e2af6-a0ba-447a-8535-fedbd4cfa691)
- tipos

![image](https://github.com/user-attachments/assets/fe67a304-ea02-48b1-b16c-e489edc624a3)
- chartCountries

![image](https://github.com/user-attachments/assets/49774211-1c69-4048-be5c-9bde49c735fd)
- chartTypes

![image](https://github.com/user-attachments/assets/237ccf04-188a-43f0-ba82-ba73790689d4)

## Despliegue
El proyecto se encuentra desplegado en Netlify
https://fruiz-proyecto5dwfsc18.netlify.app/

![image](https://github.com/user-attachments/assets/a1f7a35b-20ee-47b7-81bd-34b9f1efa7bd)

## Instalación

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Crear un archivo .env con las variables para las apis usadas
    a. VITE_METAURL=https://api.openbrewerydb.org/v1/breweries/meta
    b. VITE_BREWERYURL=https://api.openbrewerydb.org/v1/breweries
4. Ejecutar `npm run dev` para iniciar el servidor de desarrollo

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo Vite
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run preview` - Previsualiza la versión de producción

## Conclusión
Este proyecto representa una solución frontend moderna y eficiente para visualizar información sobre cervecerías mediante gráficos interactivos y navegación dinámica. Utilizando herramientas actuales se logró construir una interfaz intuitiva, modular y escalable.

La integración de hooks personalizados, manejo de errores con ErrorBoundary, y una arquitectura basada en rutas bien definidas permite que el proyecto sea fácilmente mantenible y extensible.

Este trabajo refleja no solo la aplicación de conocimientos técnicos adquiridos, sino también la capacidad de desarrollar una SPA funcional centrada en la experiencia del usuario y buenas prácticas de desarrollo.
