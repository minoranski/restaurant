import React from 'react';
import {IconButton} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//npm install @mui/icons-material
//npm install @mui/material @emotion/react @emotion/styled
const ScrollUpBtn = () => {
    const BTN_APPEARANCE_BORDER = 250; //расстояние на котором начнёт появляться кнопка в пикселях
    const BTN_APPEARANCE_LENGTH = 100; //растояние за которое кнопка полностью появится в пикселях
    /*   --------------------------------------------------------------*/
    /*  Функция для прокрутки с контролем скорости
    /*  --------------------------------------------------------------*/
    const scrollTo = (to, duration = 700) => {
        const
            element = document.scrollingElement || document.documentElement,
            start = element.scrollTop,
            change = to - start,
            startDate = +new Date(),
            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            },
            animateScroll = function () {
                const currentDate = +new Date();
                const currentTime = currentDate - startDate;
                element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                } else {
                    element.scrollTop = to;
                }
            };
        animateScroll();

    }
    window.onscroll=function (){
        if(window.scrollY>=BTN_APPEARANCE_BORDER&&window.scrollY<=BTN_APPEARANCE_BORDER+BTN_APPEARANCE_LENGTH){
            let scrollBtn = document.getElementById('ScrollBTN');
            scrollBtn.style.opacity = ((window.scrollY - BTN_APPEARANCE_BORDER)/100).toString() ;
        }
        else if(window.scrollY>BTN_APPEARANCE_BORDER+BTN_APPEARANCE_LENGTH){
            let scrollBtn = document.getElementById('ScrollBTN');
            scrollBtn.style.opacity = "1" ;
        }
        else if(window.scrollY<BTN_APPEARANCE_BORDER){
            let scrollBtn = document.getElementById('ScrollBTN');
            scrollBtn.style.opacity = "0" ;
        }
    };
    return (
            <div className='scrollUp' id='ScrollBTN'>
                <IconButton className='scrollUpBtn' onClick={()=>scrollTo(0,150)}>
                    <KeyboardArrowUpIcon className='scrollUpIcon'/>
                </IconButton>
            </div>
    );
};

export default ScrollUpBtn;