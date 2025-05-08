import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Countries from "./pages/Paises"
import CountriesTypes from "./pages/PaisesTipos"
import Breweries from "./pages/Cervecerias"
import BreweriesTypes from "./pages/CerveceriasTipos"
import Brewery from "./pages/Cerveceria"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: "/paises", element: <Countries /> },
      { path: "/paises/:id", element: <CountriesTypes /> },
      { path: "/cerveceriasTipos", element: <BreweriesTypes /> },
      { path: "/cervecerias/:id/:id", element: <Breweries /> },
      { path: "/cervecerias/:id/:id/:id", element: <Brewery /> },
      { path: "/contacto", element: <Contact /> },
      { path: "/nosotros", element: <About /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);