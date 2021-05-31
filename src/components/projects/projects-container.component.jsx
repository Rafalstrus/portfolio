import React from 'react';
import { Project } from './project.component';
export const ProjectsContainer = props =>(
<div>
{props.projects.map(
    (data) =>
    <Project key = {data.name}
        aboutProject={data}
    ></Project>
)}
</div>
)