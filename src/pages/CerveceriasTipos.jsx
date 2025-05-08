import React from "react"
import {
  Container,
  Typography
} from "@mui/material"

const tipos = await import("../tipos.json").then((module) => module.default)

const CerveceriasTipos = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold"
        }}
      >
        Tipos de Cervecerias
      </Typography>
      {tipos.map((item) => (
        <div 
          key={ item.key }
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px"
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold' }}
          >
            { item.name }:
          </Typography>
          <Typography variant="body1">
            { item.description }
          </Typography>
        </div>
      ))}
    </Container>
  )
}

export default CerveceriasTipos