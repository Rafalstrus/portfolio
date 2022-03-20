import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColorChange } from '../../molecules/ColorChange/ColorChange';

import { LanguageChange } from '../../molecules/LanguageChange/LanguageChange';
import './navbar.css';
export const Navbar = () => {
    const { t } = useTranslation('app');

    return (
        <Box id="sticky-container">
            <Box id="sticky-container-wrapper">
                <Box id="settings">
                    <Box className='nav-item1'>
                        <LanguageChange
                        />
                    </Box>
                    <ColorChange
                    />
                </Box>
                <Box id="navigation">
                    <Box className='nav-item3' onClick={() => (document.documentElement.scrollTop = 0)}>
                        <p className="navi-buttons">
                            {t("aboutAuthor.header")}
                        </p>
                    </Box>
                    <Box className='nav-item4'>
                        <a href='#projects-container' className="navi-buttons">
                            {t("projects.header")}
                        </a>
                    </Box>
                    <Box className='nav-item5'>
                        <a href='#contacts-container' className="navi-buttons">
                            {t("contact.header")}
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
