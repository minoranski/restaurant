import { Grid, Paper } from "@mui/material"
import { useEffect } from "react";
import PersonalSection from "./PersonalSection"

export default function EmployeesList({ employees }) {
    return <>{
        employees.map((employee, index) => {
            return <>
                <Grid item xs={3} >
                    <Paper><PersonalSection employee={employee} /></Paper>
                </Grid>
            </>
        })
    }
    </>
}