import React, {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { RouteRounded } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { AuthService } from '../services/auth/auth-service';
import { API_URL } from '../utils/constants';
import CloseIcon from '@mui/icons-material/Close';


export default function Basket( { basket, onRemove } ) {
    const [counter, setCounter] = useState(basket.num);
    const navigate = useNavigate();

    const dish_id = basket.id;
    const dish_name = basket.name_ru;
    const dish_portion = basket.portion*basket.count;
    const dish_description = basket.description_ru;
    const dish_price = Math.round(basket.price*basket.count);
    const dish_photo = `${API_URL}/${basket.photo}`

    let num = basket.num;

    useEffect(() => {
        if(!AuthService.isAuthorized()){
            navigate('../auth');
        }
    }, []);

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
        let textcounter = document.getElementById("counterText");
        if(counter>9){
            textcounter.style.left="7px";
        }
        else if (counter<10) {
            textcounter.style.left="12px"
        }
    }

    
    return (
        <div className='basketPanelsAll'>
            <div className='basketPanel'>
                <img src={dish_photo} className='basketPanelImage'></img>
                <div className='basketPanelBlock'>
                    <div className='basketPanelTitle'>{ dish_name }</div>
                    <div className='authCloseBtn'>
                        <IconButton className='authCloseBtn' onClick={onRemove}>
                            <CloseIcon className="closeBtn">
                            </CloseIcon>
                        </IconButton>
                    </div>
                    <div className='basketPanelDescription'>{ dish_description }</div>
                    {/* <div className='basketCounter'>
                        <span className='counterText' id="counterText">{counter}</span>
                        <div className='counterRectangle'>
                            <div className='counterRectangleUp' onClick={()=>NumIncrease(counter)}><div className='troyangleUp'></div></div>
                            <div className='counterRectangleDown' onClick={()=>NumDecrease(counter)}><div className='troyangleDown'></div></div>
                        </div>
                    </div> */}
                    <div className='basketCount'>{basket.count} шт</div>
                    <div className='basketPortion'>{dish_portion} г</div>
                    <div className='basketPrice'>{dish_price} руб.</div>
                </div>
            </div>
        </div>
    )
}