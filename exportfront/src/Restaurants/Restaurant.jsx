import { useState } from "react";
import { SettingsService } from "../services/settings/settings-service";

export default function Restaraunt(props) {
    const lang = SettingsService.getLanguage();

    const [rest_info, setRestInfo] = useState({
        rest_name : props.restaraunt["name_" + lang],
        rest_address : props.restaraunt["address_" + lang],
        rest_description : props.restaraunt["description_" + lang],
    });
    return <>
        <div className='Rest'>
            <div className='RestaurantPanelStandard'></div>
            <div className='addrRest'>
                <span className='addressRest'>{rest_info.rest_name}</span>
                <div className='addressRestText'>{rest_info.rest_address}<br />{rest_info.rest_description}</div>
            </div>
        </div>
    </>
}