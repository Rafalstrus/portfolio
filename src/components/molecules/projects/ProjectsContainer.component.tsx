import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './ProjectCard.component';
import './projectCard.styles.css';
import ProjectContainerInterface from './interfaces/ProjectContainerInterface';

const ProjectsContainer = ({
    projects
}: ProjectContainerInterface) => (
    <Box id="projects-container">
        {projects.map((project: ProjectContainerInterface["projects"][number]) => (
            <ProjectCard
                key={project.name}
                project={project}
            />
            /* website from where I download free icons https://uxwing.com/html-icon/*/
        ))}
    </Box>
)

export default ProjectsContainer