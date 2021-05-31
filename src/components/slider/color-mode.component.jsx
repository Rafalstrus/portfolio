import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const colors = {
    dark:{
        backgroundColor:"rgb(9,12,16)",
        headerText: "rgb(201,209,219)",
        paragrafText:"rgb(139,148,158)",
        clickableText: "rgb(88,156,255)"
    },
    light: {
        backgroundColor:"rgb(246,243,239)",
        headerText: "rgb(54,46,46)",
        paragrafText:"rgb(139,148,158)",
        clickableText: "rgb(52, 163, 85)"
    }
}

const setColors = props =>{
    document.body.style.setProperty(
        "--background",
        props.backgroundColor
    )
    document.body.style.setProperty(
        "--header-text",
        props.headerText
    )
    document.body.style.setProperty(
        "--paragraf-text",
        props.paragrafText
    )
    document.body.style.setProperty(
        "--clickable-text",
        props.clickableText
    )
}

export const ColorChange = props =>(
    <div>
        <button onClick = {e =>{
            props.colorChange((props.colorMode==="dark") ? "light" : "dark")
            cookies.set('colorMode',(props.colorMode==="dark") ? "light" : "dark")
        }
        }>{(props.colorMode==="dark") ? "light" : "dark"}</button>
        {setColors(colors[props.colorMode])}
    </div>
)