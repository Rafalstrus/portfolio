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
        <div className ='nav-item3'><a  href='#aboutAuthor-container' >
            About Author
        </a></div>
        <div className ='nav-item4'><a href='#projects-container' >
            Projects
        </a></div>
        <div className ='nav-item5'><a href='#contacts-container' >
            Contacts
        </a></div>
        </div>
    </div>
    </div>
)