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
  const location = useLocation()
  const brewery = location.state?.brewery
  // console.log(brewery)
  const infoCountry = paises.find(pais => pais.key === brewery.country.replace(/\s+/g, '_').toLowerCase())
  // console.log('infoCountry ', infoCountry)
  const infoType = tipos.find(tipo => tipo.key === brewery.brewery_type.replace(/\s+/g, '_'))
  // console.log('infoType ', infoType)
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to={ "/paises" }
    >
      Paises
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={ `/paises/${infoCountry.name.replace(/\s+/g, '_')}` }
      state={{
        country: {
          key: infoCountry.key,
          name: infoCountry.name
        }
      }}
    >
      { infoCountry.name }
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      to={ `/cervecerias/${infoCountry.name.replace(/\s+/g, '_')}/${infoType.name.replace(/\s+/g, '_')}` }
      state={{
          country: infoCountry.key,
          type: infoType.key
      }}
    >
      { infoType.name }
    </Link>,
    <Typography
      key="4"
      sx={{ color: 'text.primary' }}
    >
      { brewery.name }
    </Typography>
  ]

  return (
    <Container>
      <Stack
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <Breadcrumbs
          className="Breadcrumbs"
          separator={
            <NavigateNextIcon
            fontSize="small"
          />}
          aria-label="breadcrumb"
        >
          { breadcrumbs }
        </Breadcrumbs>
      </Stack>
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
          target="_blank"
          sx={{ paddingLeft: 1 }}
        >
          { brewery.website_url }
        </Typography>
      </Typography>
    </Container>
  )
}

export default Cerveceria