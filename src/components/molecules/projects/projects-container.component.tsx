import React from 'react';
import { Project } from './project.card.component';
import './project.card.css';
export const ProjectsContainer = (props : any) => (
    <div id="projects-container">
        {props.projects.map(
            (data: any) =>
                <Project key={data.name}
                    aboutProject={data}
                ></Project>
            /* website from I download free icons https://uxwing.com/html-icon/*/
        )}
    </div>
)