import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css'

export const Contact = () => {
    const { t } = useTranslation('app')

    return (
        <Box id="contacts-container">
            <p className="header">
                {t("contact.header")}
            </p>
            <Box id="contact-info-container">
                <Box id="email-Adress">
                    <span className="contact-type">
                        {t('email-address')}
                    </span>
                    <span className="contact-info">rafal.strus@onet.eu</span>
                </Box>
                <Box id="github-Link">
                    <span className="contact-type">
                        {t('Github: ')}
                    </span>
                    <span className="contact-info">
                        <a href="https://github.com/Rafalstrus" className="contact-info">https://github.com/Rafalstrus</a>
                    </span>
                </Box>
            </Box>
        </Box>
    )
}