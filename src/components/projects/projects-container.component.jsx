import React from 'react';
import { Project } from './project.component';
export const ProjectsContainer = props =>(
<div>
    {console.log(props)}
{props.projects.map(
    (data) =>
    <Project
        aboutProject={data}
    ></Project>
)}
</div>
)