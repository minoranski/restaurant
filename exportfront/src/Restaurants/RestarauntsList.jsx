import { useState } from "react";
import { SettingsService } from "../services/settings/settings-service";
import Restaurant from './Restaurant'

export default function RestarauntsList({ restaraunts }) {

    return <>{
        restaraunts.map((restaraunt, index) => {
            return <>
                <Restaurant restaraunt={restaraunt}/>
            </>
        })
    }
    </>
}