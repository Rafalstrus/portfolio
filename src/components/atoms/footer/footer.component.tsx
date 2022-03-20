import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.styles.css'

export const Footer = () => {
    const { t } = useTranslation('app');
    return (
        <Box id="footer">
            <p>
                {(new Date().getFullYear()) + ' ' + t('footerText')}
            </p>
        </Box>
    )
}