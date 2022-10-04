import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AdsSection from '../Ads/AdsSection'
import AwardSection from './AwardSection'
import PersonalSection from './PersonalSection'
import { InfoService } from '../services/info/info-service'
import EmployeesList from './EmployeesList'


let awards = [
  { id: 1, surname: 'Фамилия', name: 'Имя', fathername: 'Отчество', status: 'Должность' },
  { id: 1, surname: 'Фамилия', name: 'Имя', fathername: 'Отчество', status: 'Должность' },
  { id: 1, surname: 'Фамилия', name: 'Имя', fathername: 'Отчество', status: 'Должность' },
]

export default function Personal() {
  const [employeesList, setEmployeesList] = useState();

  useEffect(() => {
    InfoService.getEmployees()
      .then((response) => {
        console.log(response.data);
        setEmployeesList(response.data);
        //employeesList = response.data;
        console.log(employeesList);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  // useEffect(()=>{
  //   setEmployees(employeesList);
  //   console.log(employeesList);
  // },employeesList)

  return (
    <div className='PersonalSection'>
      <span className='AwardsSectionTitle'>Персонал</span>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {/* <FormRow data={employees} /> */}
          {employeesList &&
            <>
              <EmployeesList employees={employeesList} />
            </>
          }
        </Grid>
      </Grid>
    </div>
  );
}