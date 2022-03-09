import React from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css'

export const Contact = () => {
    const {t} = useTranslation('app')

    return (
        <div id="contacts-container">
        <p className="header">{t("contact.header")}</p>
        <div id="contact-info-container">
            <div id="email-Adress">
                <span className="contact-type">{t('email-address')}</span>
                <span className="contact-info">rafal.strus@onet.eu</span>
            </div>
            <div id="github-Link">
                <span className="contact-type">{t('Github: ')}</span>
                <span className="contact-info">
                    <a href="https://github.com/Rafalstrus" className="contact-info">https://github.com/Rafalstrus</a>
                </span>
            </div>
        </div>
    </div>
    )
}