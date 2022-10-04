import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ProductSection from '../ProductSection/ProductSection'
import AdsSection from '../Ads/AdsSection'
import AdsList from './AdsList'
import { InfoService } from '../services/info/info-service'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

let ads = [
  { id: 1, name: 'СКИДКА ДЛЯ МАМ' },
  { id: 2, name: 'СКИДКА ДЛЯ МАМ' },
  { id: 3, name: 'СКИДКА ДЛЯ МАМ' },
]

// let sectionTitles = [ 'Рамэн', 'Удон', 'Суши/роллы', 'Салаты', 'Напитки/десерты' ]

function FormRow(props) {
  return (
    <React.Fragment>
      <Grid item xs={4} spacing={3}>
        <Paper><AdsSection ad={props.ad}/></Paper>
      </Grid>
      {/* <Grid item xs={4} spacing={3}>
        <Paper><AdsSection ad={props.ad}/></Paper>
      </Grid>
      <Grid item xs={4} spacing={3}>
        <Paper><AdsSection ad={props.ad}/></Paper>
      </Grid> */}
    </React.Fragment>
  );
}

const divStyle = {
  top: '200px',
};

export default function Ads(props) {
  //   const classes = useStyles();

  const [adsList, setAdsList] = useState();

  useEffect(() => {
    InfoService.getAds()
      .then((response) => {
        console.log(response.data);
        setAdsList(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div>
          <Grid container spacing={1} style={ window.location.pathname == '/ads' ? {marginLeft: "245px"} : {marginLeft: "0px"} }>
            {adsList &&
              <AdsList ads={adsList} />
            }
          </Grid>
    </div>
  );
}

const styles = {
  div: {
    marginLeft: '30px'
  }
}