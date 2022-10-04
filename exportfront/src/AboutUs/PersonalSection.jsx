import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { AppBar, Container, Toolbar, IconButton, Typography,
     Box, Paper, Grid, Card, Cardmedia, CardContent, CardActions } from '@mui/material/Button'

export default function PersonalSection({ employee }) {
    
    useEffect(() => {
        console.log("PersonalSection")
        console.log(employee)
    }, []);

    return (
        <div className='PersonalPanelStandard' id={employee.id}>
            <div className='PersonalPanel'>
            <div className='photoPersonal'>
                <img src={employee.photo} className='personalImage'></img>
            </div>
            <div className='personalInfo'>{employee.name_ru}<br/></div>
            <div className='personalInfoStatus'>{ employee.position_ru }<br/><br/>{ employee.description_ru }</div></div>
            {/* <div className='personalInfoStatus'>{ employee.description_ru }</div> */}
        </div>
    )
}