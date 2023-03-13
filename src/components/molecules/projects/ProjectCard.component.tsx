import { Box } from '@mui/material';
import React from 'react';
import ProjectCardInterface from './interfaces/ProjectCardInterface';

const ProjectCard = ({
    project
}: ProjectCardInterface) => (
    <Box className="project-card">
        <img className="project-image" src={project.img} alt="" draggable="false"
            onClick={() => {
                window.open(project.link, "_blank");
            }}
        />
        <p className="project-names">{project.name}</p>
        <p>
            {project.technologies.map((technologyName: string) => `${technologyName} `)}
        </p>
    </Box>
)

export default ProjectCard