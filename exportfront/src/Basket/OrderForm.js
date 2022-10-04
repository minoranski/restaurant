import React, {useState} from 'react';
import {Button, createTheme, TextField, Alert} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import SignIn from '../AuthReg/SignIn'

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
function IsNumber(value) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let flag = false;
    for (var i = 0; i < 10; i++) {
        if (value == numbers[i]) { flag = true; }
    }
    if (flag == true) { return true; } else { return false; }
}
const OrderForm = () => {
    const [panel, switchPanel] = useState('allowed');
    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid]=useState(false);
    const handleChange = e => {
        setPhone(e.target.value);
        if(e.target.value.toString().length>0){
            if(!PhoneValidate(e.target.value)){
                setPhoneValid(true);
            }
            else {
                setPhoneValid(false);
            }
        }
    }

    function PhoneValidate(text) {
        let flag = true;
        if(text[0].toString()!='+'){
            flag = false;
        }
        for (let i = 2; i < text.length; i++) {
            if(!IsNumber(text[i])){
                flag=false;
            }
        }
        if(text.toString().length!=12){flag=false}
        return flag;
    }

    function alertSuccessMessage() {
        <Alert id='alertMessageSuccess' severity="success">This is a success alert — check it out!</Alert>
    }

    if (panel == "allowed") {
        return (
            <div className="background_blur">
                <ThemeProvider theme={theme}>
                    <div className='OrderPanel'>
                        <form onSubmit={alertSuccessMessage} name="OrderForm" className="OrderPanel">
                            <div className="AdressTextField">
                                <TextField
                                    InputLabelProps={{className: 'textfield'}}
                                    InputProps={{className: 'textfield'}}
                                    required
                                    fullWidth
                                    id="outlined"
                                    label="ВАШ АДРЕС"
                                    color="yellow"
                                    focused
                                    name = "client_address"
                                />
                            </div>
                            <div className="PhoneTextField">
                                <TextField
                                    InputLabelProps={{className: 'textfield'}}
                                    InputProps={{className: 'textfield'}}
                                    required
                                    fullWidth
                                    id="outlined"
                                    label="ТЕЛЕФОН"
                                    color="yellow"
                                    focused
                                    value={phone}
                                    onChange={handleChange}
                                    error={phoneValid}
                                    name = "client_phone"
                                />
                            </div>
                            <div className="orderBtns">
                                <Button type='submit' variant={"contained"} color="yellow">Заказать</Button>
                                <a href='' className='cancelbtn'><Button variant={"outlined"} color="yellow"
                                        onClick={() => switchPanel('none')}>Отмена</Button></a>
                            </div>
                        </form>
                    </div>
                </ThemeProvider>
            </div>
        );
    } else if (panel == "none") {
        return;
    }
};

export default OrderForm;