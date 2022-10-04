import React, { useEffect, useState } from 'react'
import { AuthService } from '../services/auth/auth-service';
import { InfoService } from '../services/info/info-service';
import { SettingsService } from '../services/settings/settings-service';
import RestarauntsList from './RestarauntsList';

export default function RestaurantSection() {
    const [restarauntsList, setRestarauntsList] = useState();

    useEffect(() => {
        InfoService.getRestaraunts()
            .then((response) => {
                setRestarauntsList(response.data);
            })
            .catch((error) => {
                console.log(error)
            })

            console.log(AuthService.isAuthorized())
            console.log(AuthService.authToken())
            // AuthService.logout().then(v=>{
            //     console.log(AuthService.isAuthorized())               
            // }).catch(error=>{
            //     console.log(error)
            // })
    }, []);


    return (
        <div>
            <div className='restaurant'>
                <div className='emptyBlock'></div>
                <span className='RestaurantSectionTitle'>{(SettingsService.getLanguage() == "ru") ? "Рестораны" : "Restaurants"}</span>
                {
                    restarauntsList && <RestarauntsList restaraunts={restarauntsList}/>
                }
            </div>
        </div>

    )
}