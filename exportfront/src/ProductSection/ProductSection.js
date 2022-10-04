import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import { AppBar, Container, Toolbar, IconButton, Typography,
     Box, Paper, Grid, Card, Cardmedia, CardContent, CardActions } from '@mui/material/Button'
import { API_URL } from '../utils/constants';
import { SettingsService } from '../services/settings/settings-service';

export default function ProductSection({ dish }) {

    //const [counter, setCounter] = useState(section.num);
    const [counter, setCounter] = useState(1);
    // const [name, setName] = useState(dish["name_" + SettingsService.getLanguage()]);
    //let num = section.num;
    let num = 1;
    function NumIncrease(number){
        number++;
        if(number>20){
            return;
        }
        num = number;
        setCounter(num);
        let textcounter = document.getElementById("counterText");
        if(counter>9){
            textcounter.style.left="7px";
        }
        else if (counter<10) {
            textcounter.style.left="12px"
        }
    }
    function NumDecrease(number){
        number--;
        if(number<1){
            return;
        }
        num = number;
        setCounter(num);
        let textcounter = document.getElementById("CounterText");
        if(counter>9){
            textcounter.style.left="7px";
        }
        else if (counter<10) {
            textcounter.style.left="12px"
        }
    }

    // const dish_id = dish.id;
    // let dish_name = dish.name_ru;
    // const dish_portion = dish.portion;
    // const dish_description = dish.description_ru;
    // const dish_price = Math.round(dish.price);
    // const dish_photo = `${API_URL}/${dish.photo}`

    const lang = SettingsService.getLanguage();

    const [dish_info, setDishInfo] = useState({
        dish_id : dish.id,
        dish_name : dish["name_" + lang],
        dish_portion : dish.portion,
        dish_description : dish["description_" + lang],
        dish_price : Math.round(dish.price),
        dish_photo : `${API_URL}/${dish.photo}`,
    });


    // useEffect(() => {
    //     let lang = SettingsService.getLanguage();
    //     console.log(dish["name_" + lang]);
    //     dish_info.dish_name = dish["name_" + lang];
    //     dish_info.dish_description = dish["description_" + lang];
    //     setDishInfo(dish_info);
    // }, []);

    function addToCart(){
        let basketJSON = localStorage.getItem("dish-basket")
        let basket = [];
        if(basketJSON){
            basket = JSON.parse(basketJSON)
        }
        //console.log(dish.id);
        
        let added_dish = basket.find(obj => {
            return obj.id === dish_info.dish_id
        });
        
        if(added_dish){
            added_dish.count += counter; 
            console.log(added_dish.id);
        }else{
            dish.count=counter;
            added_dish = dish;
            basket.push(added_dish);
        }
        localStorage.setItem("dish-basket", JSON.stringify(basket));
        //console.log(localStorage.getItem("dish-basket"));
        console.log(basket);
    }


    return <>
        {dish_info && <>
            <div className='ProductPanelStandard' id={dish_info.dish_id}>
            <div className='ProductPanel'></div>
            <div className='photo'>
                <div className='photoRectangle'>
                    <img src={dish_info.dish_photo} className='photoImage'></img>
                </div>
            </div>
            <div className='weight'><span className='weightText'>{ dish_info.dish_portion } {(lang == "ru") ? "г." : "g"}</span></div>
            <div className='productName'>{ dish_info.dish_name }</div>
            
            <div class="dropdown">
                <div className='info'>
                    <span className='infoLetter'>i</span>
                </div>
                <div className="dropdown-child">
                    <div className='dropdown-content dropdown-child'>
                        <span className='dropdown-text'>{ dish_info.dish_description }</span>
                    </div>
                    
                </div>
            </div>
            <div className='dropdown-content'></div>
            <div className='price'><span className='priceText'>{ dish_info.dish_price } {(lang == "ru") ? "руб." : "RUR"}</span></div>
            <div className='counter'>
                <span className='counterText' id='CounterText'>{counter}</span>
                <div className='counterRectangle'>
                    <div className='counterRectangleUp' onClick={()=>NumIncrease(counter)}><div className='troyangleUp'></div></div>
                    <div className='counterRectangleDown' onClick={()=>NumDecrease(counter)}><div className='troyangleDown'></div></div>
                </div>
            </div>
            {/* <div className='addToBasketBtn'> */}
            <div className='addToBasketBtn' onClick={addToCart}></div>
                {/* <span className='basketPlus'>+</span>
            </div> */}
        </div>
        </>}
        
    </>
}