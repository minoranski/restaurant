import React from 'react'
import Button from '@mui/material/Button'
import { AppBar, Container, Toolbar, IconButton, Typography,
     Box, Paper, Grid, Card, Cardmedia, CardContent, CardActions } from '@mui/material/Button'

export default function AwardsSection({ ad }) {
    return (
        <div className='AwardPanelStandard' id={ad.id}>
            <div className='AwardPanel'></div>
            <div className='photoAd'>
                <img src={ ad.image} className='adImage'></img>
            </div>
            <div className='adName'>{ ad.name }</div>
            <span className='adText'>Если вы мама, то скажите об этом и получите скидку 15%. Заводите детей и приходите к нам, чтобы...</span>
        </div>
    )
}