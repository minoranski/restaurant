import React, { useEffect, useState } from 'react'
// import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ProductSection from '../ProductSection/ProductSection'
import Ads from '../Ads/Ads'
import ScrollUpBtn from './ScrollUpBtn'
import { MenuService } from '../services/menu/menu-service'
import CategoriesList from './CategoriesList'
import { Box } from '@mui/material'


let adsFormMainPage = [
    { id: 1, name: 'СКИДКА ДЛЯ МАМ' }
]

let sections = [
    { id: 1, name: 'Рамэн с курицей', weight: 540, price: 500, num: 1, text: "Энергетическая ценность 199,6 ккал" + "\n" + "Пищевая ценность продукта на 100 г:\nУглеводы 24,4 г\nБелки 8,8 г\nЖиры 7,4 г" },
    { id: 2, name: 'Рамэн с курицей', weight: 540, price: 500, num: 1, text: 'Энергетическая ценность 199,6 ккал\nПищевая ценность продукта на 100 г:\nУглеводы 24,4 г\nБелки 8,8 г\nЖиры 7,4 г' },
    { id: 3, name: 'Рамэн с курицей', weight: 540, price: 500, num: 1, text: 'Энергетическая ценность 199,6 ккал\nПищевая ценность продукта на 100 г:\nУглеводы 24,4 г\nБелки 8,8 г\nЖиры 7,4 г' },
    { id: 4, name: 'Рамэн с курицей', weight: 540, price: 500, num: 1, text: 'Энергетическая ценность 199,6 ккал\nПищевая ценность продукта на 100 г:\nУглеводы 24,4 г\nБелки 8,8 г\nЖиры 7,4 г' }
]

// let sectionTitles = [ 'Рамэн', 'Удон', 'Суши/роллы', 'Салаты', 'Напитки/десерты' ]

export default function ProductList() {
    //   const classes = useStyles();
    const [categoriesList, setCategoriesList] = useState();

    useEffect(() => {
        MenuService.getCategories()
            .then((response) => {
                console.log(response.data);
                setCategoriesList(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    // function FormRow() {
    //     return (
    //         <React.Fragment>
    //             <Grid item xs={3}>
    //                 <Paper><ProductSection section={sections[0]} /></Paper>
    //             </Grid>
    //             <Grid item xs={3}>
    //                 <Paper><ProductSection section={sections[1]} /></Paper>
    //             </Grid>
    //             <Grid item xs={3}>
    //                 <Paper><ProductSection section={sections[2]} /></Paper>
    //             </Grid>
    //             <Grid item xs={3}>
    //                 <Paper><ProductSection section={sections[3]} /></Paper>
    //             </Grid>
    //         </React.Fragment>
    //     );
    // }

    return (
        <Box sx={{marginTop:20}}>
            <div className='products'>
                {
                    categoriesList && <>
                        <CategoriesList categories={categoriesList}/>
                    </>
                }
            </div>
            <Grid container paddingTop={15} paddingLeft={25}>
                 <Ads ads={adsFormMainPage} />
            </Grid>
        </Box>
    );
}

// const styles = {
//     div: {
//         marginLeft: '30px'
//     }
// }

// let nme = 'Рамэн'


{/* <div className='ProductSection'>
                    <span className='ProductSectionTitle'>Рамэн</span>
                    <Grid container spacing={1}>
                        <Grid className='gridProductSection' container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div>
                <div className='ProductSection'>
                    <span className='ProductSectionTitle'>Удон</span>
                    <Grid className='gridProductSection' container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div>
                <div className='ProductSection'>
                    <span className='ProductSectionTitle'>Суши/роллы</span>
                    <Grid className='gridProductSection' container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div>
                <div className='ProductSection'>
                    <span className='ProductSectionTitle'>Салаты</span>
                    <Grid className='gridProductSection' container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div>
                <div className='ProductSection'>
                    <span className='ProductSectionTitle'>Напитки/Десерты</span>
                    <Grid className='gridProductSection' container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div> */}