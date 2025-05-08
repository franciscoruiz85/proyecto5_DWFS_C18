import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Container,
  Grid,
  Typography,
  Stack,
  Breadcrumbs
} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const paises = await import('../paises.json').then(module => module.default)
const tipos = await import('../tipos.json').then(module => module.default)

const Cerveceria = () => {
  const location = useLocation();
  const brewery = location.state?.brewery;
  // console.log(brewery);

  return (
    <Container>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px'
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          Cervecería { brewery.name }
        </Typography>
      </Grid>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Pais: { paises.find(pais => pais.key === brewery.country.replace(/\s+/g, '_').toLowerCase())?.name || brewery.country }
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Provincia: { brewery.state }
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Ciudad: { brewery.city }
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Tipo: { tipos.find(type => type.key === brewery.brewery_type.replace(/\s+/g, '_').toLowerCase())?.name || brewery.brewery_type }
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Ubicación: { brewery.street === null ? 'Sin ubicación' :brewery.street }
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Sitio web:
        <Typography
          variant="h6"
          gutterBottom
          component={Link}
          to={ brewery.website_url }
        >
          { brewery.website_url }
        </Typography>
      </Typography>
    </Container>
  )
}

export default Cerveceria