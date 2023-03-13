import { Box, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.styles.css'

export default function Contact() {
    const { t } = useTranslation('app')

    return (
        <Grid
            item
            xs={12}
            id="contacts-container"
            sx={{
                margin: 'auto'
            }}
        >
            <p className="header">
                {t("contact.header")}
            </p>
            <Box id="contact-info-container">
                <Box>
                    <span className="contact-type">
                        {t('emailAddress')}:
                    </span>
                    <span className="contact-info">rafal.strus@onet.eu</span>
                </Box>
                <Box>
                    <span className="contact-type">
                        Github:
                    </span>
                    <span className="contact-info">
                        <a href="https://github.com/Rafalstrus" className="contact-info">https://github.com/Rafalstrus</a>
                    </span>
                </Box>
            </Box>
        </Grid>
    )
}