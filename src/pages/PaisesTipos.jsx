import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
  Stack,
  Breadcrumbs
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Cerveceria from '../assets/cerveceria.jpg'

const paises = await import('../paises.json').then(module => module.default)
const tipos = await import('../tipos.json').then(module => module.default)

const PaisesTipos = () => {
  const location = useLocation()
  const country = location.state?.country.key
  // console.log(location.state)
  const info = paises.find(pais => pais.key === country)?.name
  const [bTypes, setBTypes] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://api.openbrewerydb.org/v1/breweries/meta?by_country=${country}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const types = Object.keys(data.by_type || {});
        setBTypes(types);
      })
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(bTypes)

  if (loading) {
    return (
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        <img id='cerveceria' src={ Cerveceria } />
      </Grid>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        { bTypes.map((item) => (
          <Grid key={ item }>
            <Card sx={{
              minWidth: 300,
              maxWidth: 345
            }}>
              <CardActionArea
                component={ Link }
                to={ `/cervecerias/${info.replace(/\s+/g, '_')}/${tipos.find(tipo => tipo.key === item)?.name.replace(/\s+/g, '_')}` }
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                state={{
                  country: country,
                  type: item
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                  >
                    { tipos.find(type => type.key === item)?.name || item }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )) }
      </Grid>
    </Container>
  )
}

export default PaisesTipos
