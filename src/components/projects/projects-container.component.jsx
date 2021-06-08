import React from 'react';
import { Project } from './project.card.component';
export const ProjectsContainer = props =>(
<div id="projects-container">
{props.projects.map(
    (data) =>
    <Project key = {data.name}
        aboutProject={data}
    ></Project>
)}
</div>
)