import React from 'react'
import { SettingsService } from '../services/settings/settings-service'

export default function Footer() {
    return (
        // <div className='footer'>
        //     <div className='footerLinks'>
        //         <a href='/aboutus' className='linksText' id='link1'>О нас</a>
        //         <span className='linksText' id='link2'>Карта сайта</span>
        //         <span className='linksText' id='link3'>Отзывы</span>
        //     </div>
        //     <div>
        //         <div className='contactBtns'>
        //             <a href='https://vk.com'><img src='../images/VK Btn.png' id='btn1'></img></a>
        //             <img src='../images/FB Btn.png' id='btn2'></img>
        //             <img src='../images/VK Btn.png' id='btn3'></img>
        //         </div>
        //     </div>
        //     <div className='lineFooter'></div>
        //     <div className='nureta'><span className='nuretaNeko'>© 2022 Nureta Neko</span></div>
        // </div>
        <div id='footer1'>
            <div className='linksFooter'>
                <a href='/aboutus' id='linkAbout'>{ (SettingsService.getLanguage() == "ru") ? "О нас" : "About" }</a>
                <a href='' id='linkMap' style={ SettingsService.getLanguage() == "en" ? { left: "111px" } : { left: "91px" } }>{ (SettingsService.getLanguage() == "ru") ? "Карта сайта" : "Site map" }</a>
                <a href='/reviews' id='linkReviews'>{ (SettingsService.getLanguage() == "ru") ? "Отзывы" : "Reviews" }</a>
            </div>
            <div className='contactButtons'>
                <a href='https://vk.com'><img src='../images/VK btn.png' id='btnVK'></img></a>
                <a href='https://vk.com'><img src='../images/FB Btn.png' id='btnFB'></img></a>
                <a href='https://vk.com'><img src='../images/IG Btn.png' id='btnIG'></img></a>
            </div>
            <div className='lineFooter1'></div>
            <div className='nuretaNekoFooter'>© 2022 Nureta Neko</div>
        </div>
    )
}