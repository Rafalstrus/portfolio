import React from 'react';
import { ColorChange } from './color-mode.component';
import { Language } from './language.component';
import './sticky.css';
export const StickyContainer = props => (
    <div id="sticky-container">
        <div id="sticky-container-wrapper">
        <div id="settings">
        <div className ='nav-item1'>
            <Language
                lang={props.lang}
                languageCodeChange={props.languageCodeChange}
                currentLang={props.currentLang}
            />
        </div>
        <ColorChange
            colorMode={props.colorMode}
            colorChange={props.colorChange}
        />
        </div>
        <div id="navigation">
        <div className ='nav-item3' onClick={()=>(document.documentElement.scrollTop = 0)}><p className="navi-buttons">
            About Author
        </p></div>
        <div className ='nav-item4'><a href='#projects-container' className="navi-buttons">
            Projects
        </a></div>
        <div className ='nav-item5'><a href='#contacts-container' className="navi-buttons">
            Contacts
        </a></div>
        </div>
    </div>
    </div>
)