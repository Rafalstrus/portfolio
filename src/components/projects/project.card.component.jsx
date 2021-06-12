import React from 'react';
export const Project = props =>(
<div className="project-card" onClick = {e =>{
    props.setProjectSlide(props.aboutProject.img)
    document.getElementById("ProjectBigimage").src = props.aboutProject.img;
    (document.getElementById("ProjectSlide").style.display === "block") ?
    document.getElementById("ProjectSlide").style.display = "none":
    document.getElementById("ProjectSlide").style.display = "block";
}}

>
    <div className="project-image">
    <p className="textOnImage">{props.aboutProject.name}</p>
    <p className="onHover">{props.aboutProject.technologies}</p>
    <p className="onHover2" id={props.aboutProject.name}>{props.aboutProject.description}</p>
        <img className ="projectImages" src={props.aboutProject.img} draggable="false">
            </img></div>
</div>
)