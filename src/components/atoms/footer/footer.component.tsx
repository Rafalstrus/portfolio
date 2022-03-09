import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.styles.css'

export const Footer = () => {
    const { t } = useTranslation('app');
    return (
        <div id="footer">
            <p id="footer-Text">
                {(new Date().getFullYear()) + ' ' + t('footerText')}
            </p>
        </div>
    )
}