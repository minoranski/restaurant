import React, { useEffect, useState } from 'react';
import { ClientService } from '../services/service/client-service'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Reviews from './Review'
import AdsSection from '../Ads/AdsSection'
import $ from 'jquery'
import click from 'jquery'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Dialog, DialogActions, DialogContent, IconButton, Slide } from '@mui/material'
import FeedbackForm from './FeedbackForm'
import ReviewsList from './ReviewsList';
import { AuthService } from '../services/auth/auth-service';
import { TransitionProps } from '@mui/material/transitions';
import { SettingsService } from '../services/settings/settings-service';



export default function ReviewsSection() {
    const [reviewsList, setReviewsList] = useState();

    useEffect(() => {
        ClientService.getReviews()
            .then((response) => {
                console.log(response.data);
                setReviewsList(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    const addReview=(review)=>{
        reviewsList.push(review);
        setReviewsList(reviewsList);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Transition = React.forwardRef(function Transition(
        props,
        ref
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <>
            <div className='emptyBlock2'></div>
            {/* <a href='#feedbackSend' className='feedbackSendButton'><div className='feedbackSendButton'></div></a> */}

            <div className='feedbackSection'>

                <div className='feedbackSectionTitleSection'>
                    <div className='feedbackSectionTitle'>{(SettingsService.getLanguage() == "ru") ? "Отзывы" : "Reviews"}</div>
                    {
                        AuthService.isAuthorized() && <>
                            {/* <a href='#openReviewForm'><div className='feedbackSectionIcon'> */}
                            <a onClick={handleClickOpen}><div className='feedbackSectionIcon'>
                                <IconButton>
                                    <AddCircleOutlineIcon className='addRevBtn' />
                                </IconButton>
                            </div></a>
                            {/* <div id="openReviewForm" class="modal"> */}
                            <Dialog
                                open={open}
                                //TransitionComponent={Transition}
                                //keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogContent>
                                    <FeedbackForm addReview={addReview} handleClose={handleClose} id='SignInModal' />
                                </DialogContent>
                            </Dialog>

                            {/* </div> */}
                        </>
                    }

                </div>

                <div onclick='openModal()' className='addReview open-popup'></div>
                <Grid container spacing={1}>
                    {reviewsList &&
                        <ReviewsList reviews={reviewsList} />
                    }
                    {/* {props.reviews.map(review => {
                        return <>
                            <Grid className='gridReview' container item xs={12} spacing={3}>
                                <FormRow review={review} />
                            </Grid>
                        </>
                    })} */}
                </Grid>
                <div className='popup-bg'>
                    <div className='popup'>
                        <div className='close-popup'>X</div>
                        <p>Текст в окне</p>
                    </div>
                </div>
            </div>
        </>
    );
}