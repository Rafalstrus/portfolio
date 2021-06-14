import React from 'react';
export const Project = props =>(
<div className="project-card" 
>
        <img className ="project-image" src={props.aboutProject.img} alt ="" draggable="false"
        onClick = {e =>{
            props.setProjectSlide(props.aboutProject.img)
            document.getElementById("ProjectBigimage").src = props.aboutProject.img;
            (document.getElementById("ProjectSlide").style.display === "block") ?
            document.getElementById("ProjectSlide").style.display = "none":
            document.getElementById("ProjectSlide").style.display = "block";
        }}>
            </img>
            <p>{props.aboutProject.name}</p>
    <p >{props.aboutProject.technologies.map((technologyname) => technologyname+",")}</p>
    {/*<p id={props.aboutProject.name}>{props.aboutProject.description}</p>*/}
</div>
)