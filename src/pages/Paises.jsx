import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'
import Cerveceria from '../assets/cerveceria.jpg'

const paises = await import('../paises.json').then(module => module.default)

const Paises = () => {
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
        rowSpacing={ 2 }
        columnSpacing={ 2 }
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        { paises.map((item) => (
          <Grid key={ item.key }>
            <Card sx={{ minWidth: 250, maxWidth: 345 }}>
              <CardActionArea
                component={ Link }
                to={ `/paises/${item.name.replace(/\s+/g, '_')}` }
                style={{ textDecoration: 'none', color: 'inherit' }}
                state={{ country: item }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                  >
                    { item.name }
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

export default Paises
