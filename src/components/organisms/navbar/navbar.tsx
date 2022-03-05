import { Box } from '@mui/material';
import React from 'react';
import { ColorChange } from '../../molecules/ColorChange';

import { LanguageChange } from '../../molecules/LanguageChange';
import './navbar.css';
export const Navbar = (props: any) => (
    <Box id="sticky-container">
        <Box id="sticky-container-wrapper">
        <Box id="settings">
        <Box className ='nav-item1'>
            <LanguageChange
                // lang={props.lang}
                // languageCodeChange={props.languageCodeChange}
                // currentLang={props.currentLang}
            />
        </Box>
        <ColorChange
            colorMode={props.colorMode}
            colorChange={props.colorChange}
        />
        </Box>
        <Box id="navigation">
        <Box className ='nav-item3' onClick={()=>(document.documentElement.scrollTop = 0)}><p className="navi-buttons">
            About Author
        </p></Box>
        <Box className ='nav-item4'><a href='#projects-container' className="navi-buttons">
            Projects
        </a></Box>
        <Box className ='nav-item5'><a href='#contacts-container' className="navi-buttons">
            Contacts
        </a></Box>
        </Box>
    </Box>
    </Box>
)