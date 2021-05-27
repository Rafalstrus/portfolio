import React from 'react';
export const Project = props =>(
<div>
    <p>{props.aboutProject.name}</p>
    <p>{props.aboutProject.technologies}</p>
    {/*<img>{props.aboutProject.img}</img>*/}
    <p>{props.aboutProject.description}</p>
</div>
)