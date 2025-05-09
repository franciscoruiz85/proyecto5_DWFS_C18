import React from 'react'
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
import useMetaTypes from '../hooks/useMetaTypes'
import useTipos from '../hooks/useTipos'

const PaisesTipos = () => {
  const location = useLocation()
  const country = location.state?.country['name']
  const countryKey = location.state?.country['key']
  // console.log(location.state)
  // console.log(country)
  // console.log(countryKey)
  const { tipos, loadingTipos } = useTipos();
  // console.log('tipos',tipos)

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to={"/paises"}
    >
      Paises
    </Link>,
    <Typography
      key="2"
      sx={{ color: 'text.primary' }}
    >
      { country }
    </Typography>
  ]

  const { bTypes, loading } = useMetaTypes(countryKey)
  // console.log(bTypes)

  if ( loading || loadingTipos ) {
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
                to={ `/cervecerias/${country.replace(/\s+/g, '_')}/${tipos.find(tipo => tipo.key === item)?.name.replace(/\s+/g, '_')}` }
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                state={{
                  country: country,
                  countryKey: countryKey,
                  type: tipos.find(tipo => tipo.key === item)?.name,
                  typeKey: item
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
