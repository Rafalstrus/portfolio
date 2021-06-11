import React from 'react';
export const Project = props =>(
<div className="project-card" onClick = {e =>{
    {console.log(document.getElementById(props.aboutProject.name).style.display)}
    (document.getElementById(props.aboutProject.name).style.display === "block")?
    document.getElementById(props.aboutProject.name).style.display = "none" :
    document.getElementById(props.aboutProject.name).style.display="block"
        }}

>
    <div className="project-image">
    <p className="textOnImage">{props.aboutProject.name}</p>
    <p className="onHover">{props.aboutProject.technologies}</p>
    <p className="onclick" id={props.aboutProject.name}>{props.aboutProject.description}</p>
        <img src={props.aboutProject.img} draggable="false">
            </img></div>
</div>
)