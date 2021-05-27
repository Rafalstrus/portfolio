import React from 'react';
import { ColorChange } from './color-mode.component';
import { Language } from './language.component';
export const SliderContainer = props =>(
    <div>
        <Language 
        lang = {props.lang}
        languageCodeChange = {props.languageCodeChange}
        />
        <ColorChange 
        colorMode = {props.colorMode}
        colorChange = {props.colorChange}
        />
    </div>
)