import React from 'react'
import { Container, Alert } from '@mui/material'

const NotFound = () => {
  return (
    <Container>
      <Alert
        severity="warning"
      >
        <p>404 página no encontrada.</p>
        <p>Vuelva al home para navegar hacia una ruta valida dentro del sitio.</p>
      </Alert>
    </Container>
  )
}

export default NotFound
