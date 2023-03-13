import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TechnologiesInterface from './interfaces/TechnologiesInterface';
import './technologies.styles.css';

export default function Technologies({
    technolgies
}: TechnologiesInterface) {
    const { t } = useTranslation('app')

    return (
        <Grid
            item
            xs={12}
            md={10}
            id="technologies-container"
        >
            <Paper
                sx={{
                    p: 2
                }}
            >
                <p className="header">
                    {t('technologies.header')}
                </p>
                <Box>
                    {technolgies.map((technology: TechnologiesInterface["technolgies"][number]) => (
                        <Box key={technology.header}>
                            <Box className="technolgy-row">
                                <p className="technology-header">
                                    {t(`technologies.${technology.header}`)}:
                                </p>
                                <Box>
                                    {technology.technologies.map((technology: string) => (
                                        <Box key={technology} className="technolgy-block">
                                            <img
                                                className="technology-image"
                                                alt=""
                                                src={`assets/${technology}.svg`}
                                                draggable="false"
                                            />
                                            <p>{` ${technology} `}</p>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Grid>
    )
}
