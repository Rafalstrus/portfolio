import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import React from 'react';

export default function NavbarNavigation({
    NavItemComponent = Box,
    onClick
}: any) {
    const { t } = useTranslation('app');

    return (
        <React.Fragment>
            <NavItemComponent
                onClick={() => {
                    document.documentElement.scrollTop = 0
                    if (onClick instanceof Function) {
                        onClick()
                    }
                }}
            >
                <p className="navi-buttons">
                    {t("aboutAuthor.header")}
                </p>
            </NavItemComponent>
            <NavItemComponent onClick={onClick}>
                <a href='#projects-container' className="navi-buttons">
                    {t("projects.header")}
                </a>
            </NavItemComponent>
            <NavItemComponent onClick={onClick}>
                <a href='#contacts-container' className="navi-buttons">
                    {t("contact.header")}
                </a>
            </NavItemComponent>
        </React.Fragment>
    )
}