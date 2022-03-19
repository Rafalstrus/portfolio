import React from 'react';
import { useTranslation } from 'react-i18next';
import './technologies.css';
export const Technologies = ({technolgies} : any) => {
    const {t} = useTranslation('app')

    return (
        <div id="technologies">
        <p className="header">
            {t('technologies.header')}
        </p>
        <div>{technolgies.map(
            (data: any) => (
                <div key={data.header}>
                    <div className="technolgy-row"><p className="technology-header">{t('technologies.' + data['header']) + ": "}</p>
                        <div>
                            {data.technologies.map(
                                (technology: any) => {
                                    return (<div key={technology} className="technolgy-block">
                                        <img className="technology-image" alt=""
                                            src={"assets/" + technology + ".svg"} draggable="false"
                                        />
                                        <p>{" " + technology + "  "}</p>
                                    </div>)
                                }

                            )}</div>
                    </div>
                </div>
            )
        )} </div>
    </div>
    )
}
