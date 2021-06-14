import React from 'react';
export const ProjectSlide = props =>(
<div id="ProjectSlide"><img id="ProjectBigimage" alt=""></img><div id="exit-Button" onClick = {e =>{
    document.getElementById("ProjectSlide").style.display = "none";

      }}>X</div></div>
)