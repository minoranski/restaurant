import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { AppBar, Container, Toolbar, IconButton, Typography,
     Box, Paper, Grid, Card, Cardmedia, CardContent, CardActions } from '@mui/material/Button'
import { SettingsService } from '../services/settings/settings-service';

export default function AdsSection({ ad }) {

    const lang = SettingsService.getLanguage();

    const [ad_info, setAdInfo] = useState({
        ad_title : ad["title_" + lang],
        ad_text : ad["text_" + lang],
    });

    return (
        <div className='AdsPanelStandard' id={ad.id}>
            <div className='AdsPanel'></div>
            <div className='photoAd'>
                <img src={ad.photo} className='adImage'></img>
            </div>
            <div className='adName'>{ ad_info.ad_title }</div>
            <span className='adText'>{ ad_info.ad_text }</span>
        </div>
    )
}