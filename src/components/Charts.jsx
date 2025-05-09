import React from 'react'
import {
  Container,
  Grid,
  CircularProgress,
  Typography
} from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart'
import useChartCountries from '../hooks/useChartCountries'
import useChartTypes from '../hooks/useChartTypes'

const chartCountriesSetting = {
  xAxis: [{
    label: 'Cantidad Cervecerías',
    valueFormatter: (value) => value.toLocaleString('de-DE', 0)
  }],
  height: 400
}
const chartTypesSetting = {
  xAxis: [{
    label: 'Cantidad Cerveceria',
    valueFormatter: (value) => value.toLocaleString('de-DE', 0)
  }],
  height: 400
}

const Charts = () => {
  const { chartCountries, loading } = useChartCountries();
  const { chartTypes, loadingb } = useChartTypes();

  if (loading || loadingb) {
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
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Cervecerias por país
        </Typography>
        <BarChart
          dataset={ chartCountries }
          yAxis={[{
            scaleType: 'band',
            dataKey: 'country',
            width: 150,
            colorMap: {
              type: 'ordinal',
              colors: [
                '#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F',
                '#EDC948', '#B07AA1', '#FF9DA7', '#9C755F', '#BAB0AC'
              ]
            }
          }]}
          series={[{ dataKey: 'breweries' }]}
          layout="horizontal"
          { ...chartCountriesSetting }
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Cervecerias por tipo
        </Typography>
        <BarChart
          dataset={ chartTypes }
          yAxis={[{
            scaleType: 'band',
            dataKey: 'type',
            width: 150,
            colorMap: {
              type: 'ordinal',
              colors: [
                '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC',
                '#3A86FF', '#FF006E', '#A5DD9B', '#F9C74F', '#A05195', '#00C0AF'
              ]
            }
          }]}
          series={[{ dataKey: 'breweries' }]}
          layout="horizontal"
          { ...chartTypesSetting }
        />
      </Container>
  )
}

export default Charts
