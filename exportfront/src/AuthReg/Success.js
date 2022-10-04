import React, {useState} from 'react';
import {Button, createTheme, TextField, Alert} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import SignIn from './SignIn'

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

const Success = () => {
    return <>
        <div className='successMessage'>Удача сегодня на вашей стороне!</div>
    </>
    }

export default Success;