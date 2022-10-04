import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Review from './Review'
import AdsSection from '../Ads/AdsSection'
import $ from 'jquery'
import click from 'jquery'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material'
import FeedbackForm from './FeedbackForm'

export default function ReviewsList({ reviews }) {
    return <>
        {
            reviews.map(review => {
                return <>
                    <Grid className='gridReview' container item xs={12} spacing={3}>
                        <Grid item xs={3} >
                            <Paper><Review review={review} /></Paper>
                        </Grid>
                    </Grid>
                </>
            })
        }
    </>
}