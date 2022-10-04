import ProductSection from "./ProductSection"
import Grid from '@mui/material/Grid'

export default function DishesList({ dishes }) {

    return <>
        <Grid container direction='row' spacing={3}>
            {
                dishes.map(dish => {
                    return <>
                        <Grid item>
                            <ProductSection dish={dish} />
                        </Grid>
                    </>
                })
            }
        </Grid>
    </>
}