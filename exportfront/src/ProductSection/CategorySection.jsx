import { useEffect, useState } from "react";
import { MenuService } from "../services/menu/menu-service";
import DishesList from "./DishesList";
import Grid from '@mui/material/Grid'
import { SettingsService } from "../services/settings/settings-service";

export default function CategorySection({ category }) {
    
    const lang = SettingsService.getLanguage();

    const [cat, setCat] = useState({
        category_name : category["name_" + lang],
    });

    // const category_name = cat;

    const [dishesList, setDishesList] = useState([]);

    useEffect(() => {
        MenuService.getCategoryDishes(category.id)
            .then((response) => {
                console.log(response.data);
                setDishesList(response.data.dishes);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return <>
        {
            dishesList && <>
                <div className='ProductSection'>
                    <span className='ProductSectionTitle'>{cat.category_name}</span>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={1}>
                            <DishesList dishes={dishesList} />
                        </Grid>
                    </Grid>
                </div>   
            </>
        }
    </>
}