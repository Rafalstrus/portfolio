import React from 'react';
import { Project } from './project.card.component';
import './project.card.css';
export const ProjectsContainer = props =>(
<div id="projects-container">
{props.projects.map(
    (data) =>
    <Project key = {data.name}
    setProjectSlide = {props.setProjectSlide}
        aboutProject={data}
    ></Project>
    /* website from i download free icons https://uxwing.com/html-icon/*/
)}
</div>
)