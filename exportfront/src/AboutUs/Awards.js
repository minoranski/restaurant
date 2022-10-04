import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AdsSection from '../Ads/AdsSection'
import AwardSection from './AwardSection'

let awards = [
    { id: 1, name: 'ЛУЧШИЙ РЕСТОРАН 2013', image: '../images/award1.png'},
    { id: 2, name: 'ЗОЛОТАЯ ВИЛКА', image: '../images/award2.png'},
    { id: 3, name: '"ОТКРОЙ СВОЕ СЕРДЦЕ"', image: '../images/award3.png'},
]

export default function Awards() {
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={4} >
              <Paper><AwardSection ad={awards[0]}/></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper><AwardSection ad={awards[1]}/></Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper><AwardSection ad={awards[2]}/></Paper>
            </Grid>
          </React.Fragment>
        );
      }
    
      return (
        <div className='AwardsSection'>
            <span className='AwardsSectionTitle'>Награды</span>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
      );
}