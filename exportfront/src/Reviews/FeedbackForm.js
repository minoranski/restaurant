import React, {useState} from 'react';
import {Button, createTheme, Dialog, IconButton, Rating, TextField, ThemeProvider} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {ThumbUpAlt} from "@mui/icons-material";
import {Alert} from '@mui/material'
import { ClientService } from '../services/service/client-service';

const theme = createTheme({
    palette: {
        yellow: {
            main: '#FBAA0F',
            contrastText: '#222331',
            secondary: '#FFFFFF'
        },
    },
    typography: {
        button: {
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "bold",
            borderColor: '#FBAA0F'
        },
    }
});


const FeedbackForm = ({handleClose,addReview}) => {
    const [panel, switchPanel] = useState('allowed');
    const [value, setValue] = React.useState(5);

    function handleReview(event) {
        event.preventDefault();
        let text = event.target.text.value;
        let rating = value;
        ClientService.sendReview(text, rating)
            .then(response => {
                console.log(response.data);
                handleClose();
                addReview(response.data);
                // <Alert id='alertMessageSuccess' severity="success">This is a success alert — check it out!</Alert>
            }).catch(error => {
                console.log("Неверно введены данные")
            })
    }

    // if (panel == "allowed") {
        return (
            <div className='background_blur'>
                <ThemeProvider theme={theme}>
                    <div className='feedbackSendPanel'>
                        <form name="feedbackAddForm" className="feedbackSendPanel" onSubmit={e => handleReview(e)}>
                            <div className="feedbackRating">
                                <Rating
                                    background='#222331'
                                    name="simple-controlled"
                                    value={value}
                                    size={"large"}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />

                            </div>
                            <div className="feedbackTextField">

                                <TextField
                                    InputLabelProps={{className: 'textfield'}}
                                    InputProps={{className: 'textfield'}}
                                    maxRows={6}
                                    required
                                    fullWidth
                                    multiline
                                    id="outlined"
                                    label="ОТЗЫВ"
                                    color="yellow"
                                    focused
                                    name="text"
                                    inputProps={{ maxLength: 300 }}
                                />
                            </div>

                            <div className="feedbackBtns">
                                <Button type="submit" variant={"contained"} color="yellow"
                                    >Отправить</Button>
                                <div className='cancelbtn'>
                                    <Button variant={"outlined"} color="yellow"
                                        onClick={() => handleClose()}>Отмена</Button></div>
                            </div>

                        </form>
                    </div>

                </ThemeProvider>
            </div>
        );
};

export default FeedbackForm;