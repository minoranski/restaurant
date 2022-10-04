import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AdsSection from '../Ads/AdsSection'

let ads = [
    { id: 1, name: 'СКИДКА ДЛЯ МАМ', price: 500},
    { id: 2, name: 'СКИДКА ДЛЯ МАМ', price: 500},
    { id: 3, name: 'СКИДКА ДЛЯ МАМ', price: 500},
]

export default function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Paper><AdsSection ad={ads[0]}/></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper><AdsSection ad={ads[0]}/></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper><AdsSection ad={ads[0]}/></Paper>
            </Grid>
          </React.Fragment>
        );
      }
    