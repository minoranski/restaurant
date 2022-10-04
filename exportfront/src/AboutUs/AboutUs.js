import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Reviews from '../Reviews/Review'
import AdsSection from '../Ads/AdsSection'
import Service from './Service'
import Awards from './Awards'
import Personal from './Personal'

export default function AboutUs() {
  function FormRowService() {
    return (
      <React.Fragment>
        <Grid item xs={3} >
          <Paper><Service /></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowAwards() {
    return (
      <React.Fragment>
        <Grid item xs={3} >
          <Paper><Awards /></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRowPersonal() {
    return (
      <React.Fragment>
        <Grid item xs={3} >
          <Paper><Personal /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRowService />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRowAwards />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRowPersonal />
        </Grid>
      </Grid>
      <div className='emptyBlock4'></div>
    </>
  );
}