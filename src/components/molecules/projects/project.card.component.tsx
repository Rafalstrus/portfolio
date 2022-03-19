import { Box } from '@mui/material';
import React from 'react';
export const Project = (props: any) => (
    <Box className="project-card">
        <img className="project-image" src={props.aboutProject.img} alt="" draggable="false"
            onClick={() => {
                window.open(props.aboutProject['link'], "_blank");
            }}
        />
        <p className="project-names">{props.aboutProject.name}</p>
        <p>{props.aboutProject.technologies.map((technologyname: any) => technologyname + " ")}</p>
    </Box>
)