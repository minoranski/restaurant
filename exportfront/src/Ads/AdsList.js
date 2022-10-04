import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AdsSection from '../Ads/AdsSection'
import { SettingsService } from '../services/settings/settings-service'

let ads = [
  { id: 1, name: 'СКИДКА ДЛЯ МАМ' },
  { id: 2, name: 'СКИДКА ДЛЯ МАМ' },
  { id: 3, name: 'СКИДКА ДЛЯ МАМ' },
]

export default function AdsList({ ads }) {
  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4} >
  //         <Paper><AdsSection ad={ads[0]} /></Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper><AdsSection ad={ads[0]} /></Paper>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <Paper><AdsSection ad={ads[0]} /></Paper>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className='AdsSection AdsSectionFull' style={ window.location.pathname == "/ads" ? {marginTop: "185px"} : {marginTop: "0px"} }>
      <span className='AdsSectionTitle'>{ (SettingsService.getLanguage() == "ru") ? "Объявления" : "Ads" }</span>
      <Grid container spacing={1}>
        {/* <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid> */}
        {
          ads.map((ad, index) => {
            return <>
              <Grid item xs={4}>
                <Paper><AdsSection ad={ad}/></Paper>
              </Grid>
            </>
          })
        }
      </Grid>
    </div>
  );
}