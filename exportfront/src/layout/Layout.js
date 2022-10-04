import { Grid } from '@mui/material';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export default function Layout(props) {
    return (
        <>
            <Header />
            <Grid className='mainContent' container direction={"row"} spacing={2} wrap="nowrap">
                <Grid item flexGrow={"1"}>
                    <main>
                        {props.children}
                    </main>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}
