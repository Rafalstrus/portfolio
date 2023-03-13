import { Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('app');

    return (
        <Paper
            id="footer"
            sx={{
                margin: 'auto',
                textAlign: 'center',
                p: 0.5,
                mt: 1.5,
                width: '100%',
            }}
        >
            <p>
                {(new Date().getFullYear()) + ' ' + t('footerText')}
            </p>
        </Paper>
    )
}