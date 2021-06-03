import React from 'react';
import { ColorChange } from './color-mode.component';
import { Language } from './language.component';
import './sticky.css';
export const StickyContainer = props => (
    <div id="sticky-container">
        <span class ='nav.item1'>
            <Language
                lang={props.lang}
                languageCodeChange={props.languageCodeChange}
                currentLang={props.currentLang}
            />
        </span>
        <ColorChange
            colorMode={props.colorMode}
            colorChange={props.colorChange}
        />
        <span class ='nav.item3'>
            About Author
        </span>
        <span class ='nav.item4'>
            Projects
        </span>
        <span class ='nav.item5'>
            Contacts
        </span>
    </div>
)