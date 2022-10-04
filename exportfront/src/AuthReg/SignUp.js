import React, { useState } from 'react';
import { Box, Button, createTheme, Dialog, DialogContent, Grid, IconButton, Modal, TextField, ThemeProvider, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { AuthService } from '../services/auth/auth-service';
import { useNavigate } from "react-router-dom";
import { SettingsService } from '../services/settings/settings-service';
import FeedbackForm from '../Reviews/FeedbackForm';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OrderForm from '../Basket/OrderForm';
import Errors from './Errors'
import Success from './Success'

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
            borderColor: '#FBAA0F',
        },
    }
});

export default function SignUp(props) {
    const [panel, switchPanel] = useState('signUP');
    const navigate = useNavigate();
    
    const showErrors=(error)=>{

    }

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);
  
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
  
    const handleClose2 = () => {
        setOpen2(false);
    };

    function handleRegistration(event) {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let email = event.target.email.value;
        AuthService.register(username, password, email)
            .then(response => {
                console.log(response.data);
                handleClickOpen2();
                navigate('../auth');
            }).catch(error => {
                console.log(error.request.response);
                handleClickOpen();
            })
    }

    return (
        <Grid container sx={{ marginTop: 25 }} alignItems="center" justifyContent="center">
            <Grid item>
                <form name="signUP" className="signINform" onSubmit={e => handleRegistration(e)}>
                <Typography 
                        variant="subtitle1" 
                        fontSize={30} 
                        color='#FBAA0F'
                        marginBottom={5}
                        fontFamily='Montserrat, sans-serif'
                        >{(SettingsService.getLanguage() == "ru") ? "Создайте аккаунт" : "Sign up"}</Typography>
                    <ThemeProvider theme={theme}>
                        <div className="loginTextField">
                            <TextField
                                InputLabelProps={{ className: 'textfield' }}
                                InputProps={{ className: 'textfield' }}
                                required
                                id="outlined"
                                label={(SettingsService.getLanguage() == "ru") ? "ЭЛЕКТРОННАЯ ПОЧТА" : "EMAIL"}
                                color="yellow"
                                focused
                                name="email"
                            />
                        </div>
                        <div className="loginTextField">
                            <TextField
                                InputLabelProps={{ className: 'textfield' }}
                                InputProps={{ className: 'textfield' }}
                                required
                                id="outlined"
                                label={(SettingsService.getLanguage() == "ru") ? "ЛОГИН" : "LOGIN"}
                                color="yellow"
                                focused
                                name="username"
                            />
                        </div>
                        <div className="passwordTextField">
                            <TextField
                                className={"textfield"}
                                InputLabelProps={{ className: 'textfield' }}
                                InputProps={{ className: 'textfield' }}
                                required
                                focused
                                id="outlined-password-input"
                                label={(SettingsService.getLanguage() == "ru") ? "ПАРОЛЬ" : "PASSWORD"}
                                type="password"
                                autoComplete="current-password"
                                color="yellow"
                                name="password"
                            />
                        </div>
                        <div className="loginsBtn">
                            <Button variant="contained" color="yellow" type="submit">
                                {(SettingsService.getLanguage() == "ru") ? "Зарегистрироваться" : "Sign up"}
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogContent>
                                    <Errors showErrors={showErrors} handleClose={handleClose} id='SignInModal' />
                                </DialogContent>

                            </Dialog>

                            <Dialog
                                open={open2}
                                onClose={handleClose2}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogContent>
                                    <Success handleClose2={handleClose2} id='SignInModal' />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </ThemeProvider>
                </form>
            </Grid>
        </Grid>

        //             </div>
        //         </div>
        //     )
        // } else return;
    )
};