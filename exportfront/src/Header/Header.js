import React, { useEffect, useState } from 'react'
import SignIn from '../AuthReg/SignIn'
import { AuthService } from '../services/auth/auth-service';
import { useNavigate } from "react-router-dom";
import { SettingsService } from '../services/settings/settings-service';


export default function Header() {
    const [language, setLanguage] = useState(SettingsService.getLanguage);
    const [authorized, setAuthorized] = useState(AuthService.isAuthorized());
    const navigate = useNavigate();

    useEffect(() => {
        const id = setInterval(() => {
            setAuthorized(AuthService.isAuthorized());
        }, 500);
        return () => clearInterval(id);
    }, []);

    function logout() {
        AuthService.logout();
        navigate('/')
    }

    return (
        <div className='header'>
            <div className='topHeader'>
                <div className='ContactInfoInHeader'>
                    <img className='location' src='../images/location.png'></img>
                    <span className='address'>{(SettingsService.getLanguage() == "ru") ? "г. Любой город, ул. Ваша улица, 1" : "Your City, Your Street, 1"}</span>
                    <img className='clock' src='../images/clock.png'></img>
                    <span className='orders'>{(SettingsService.getLanguage() == "ru") ? "Приём заказов: c 9:00 - 21:00 Без выходных" : "Taking orders from 9am to 9pm 7 days a week"}</span>
                </div>
                <div className='phoneAll'>
                    <div className='ellipse'>
                        <img className='phoneImage' src='../images/phone.png'></img>
                    </div>
                    <span className='Phone'>+7 (978) 237-37-54</span>
                </div>
            </div>
            <div className='lineUnderTopHeader'></div>
            <div className='midHeader'>
                <a href='/' className='logo'>
                    <div className='logoCircle'>
                        <div className='logoAll'>
                            <img className='logoImage' src='../images/logo.png'></img>
                            <span className='logoName'>濡 猫</span>
                        </div>
                    </div>
                </a>
                <div id='SiteNavigationBtn'>
                    <a href='/restaurants' className='textBar' style={ SettingsService.getLanguage() == "en" ? { letterSpacing: "2.5px" } : { letterSpacing: "0px" } } id='restaurants'>{(SettingsService.getLanguage() == "ru") ? "РЕСТОРАНЫ" : "RESTAURANTS"}</a>
                    <span className='ellipseBar' id='ellipseBar1'></span>
                    <a href='ads' className='textBar' style={ SettingsService.getLanguage() == "en" ? { letterSpacing: "2.5px" } : { letterSpacing: "0px" } } id='advertisment'>{(SettingsService.getLanguage() == "ru") ? "ОБЪЯВЛЕНИЯ" : "ADVERTISMENT"}</a>
                    <span className='ellipseBar' id='ellipseBar2'></span>
                    <a href='reviews' className='textBar' style={ SettingsService.getLanguage() == "en" ? { letterSpacing: "2.5px" } : { letterSpacing: "0px" } } id='reviews'>{(SettingsService.getLanguage() == "ru") ? "ОТЗЫВЫ" : "REVIEWS"}</a>
                </div>
            </div>
            <div className='CardLogInLang'>
                {authorized
                    && <><a href='/basket'><img src="../images/basket.png" className='headerBasket' id='basket'></img></a>
                        </>
                }
                {authorized
                    ? <img src='../images/logout.png' className='headerLogin' id='login' onClick={logout}/>
                    : <a href='/auth'><img src='../images/login.png' className='headerLogin' id='login'></img></a>
                }
                
                <img onClick={() => {SettingsService.swapLanguage(); setLanguage(SettingsService.getLanguage())}} src='../images/language.png' className='headerLanguage' id='language'></img>
                <div className='label' id='labelLanguage'><span className='labelText' style={{ top: "2.1px", left: "2.5px" }}>{language}</span></div>
                {/* <div id="openModal" className="modal">
                    <SignIn id='SignInModal' />
                </div> */}

            </div>
        </div>
    )
}