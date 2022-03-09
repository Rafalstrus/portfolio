import React from 'react';
import { useTranslation } from 'react-i18next';
import './aboutAuthor.css'
export const AuthorHeader = () => {
    const {t} = useTranslation('app')

    return (
        <div id="authorHeader">
            <div id="author-wrapper">
                <p className="header">
                    {t('aboutAuthor.header')}
                </p>
                <p>
                {t('aboutAuthor.informations')}
                </p>
            </div>
        </div>
    )
}