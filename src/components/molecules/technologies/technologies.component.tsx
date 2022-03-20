import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './technologies.css';
export const Technologies = ({technolgies} : any) => {
    const {t} = useTranslation('app')

    return (
        <Box id="technologies">
        <p className="header">
            {t('technologies.header')}
        </p>
        <Box>{technolgies.map(
            (data: any) => (
                <Box key={data.header}>
                    <Box className="technolgy-row"><p className="technology-header">{t('technologies.' + data['header']) + ": "}</p>
                        <Box>
                            {data.technologies.map(
                                (technology: any) => {
                                    return (<Box key={technology} className="technolgy-block">
                                        <img className="technology-image" alt=""
                                            src={"assets/" + technology + ".svg"} draggable="false"
                                        />
                                        <p>{" " + technology + "  "}</p>
                                    </Box>)
                                }

                            )}</Box>
                    </Box>
                </Box>
            )
        )} </Box>
    </Box>
    )
}
