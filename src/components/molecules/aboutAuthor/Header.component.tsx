import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './aboutAuthor.css'
export default function AuthorHeader() {
    const { t } = useTranslation('app');

    return (
        <Box id="author-header">
            <Box id="author-wrapper">
                <p className="header">
                    {t('aboutAuthor.header')}
                </p>
                <p>
                    {t('aboutAuthor.informations')}
                </p>
            </Box>
        </Box>
    )
}