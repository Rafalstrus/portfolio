import React from 'react';
export const Language = props =>(
    <select name = "langs" id="search-Langs" onChange={e =>{
        props.languageCodeChange(e.target.value) 
    }} defaultValue = {props.currentLang}>
    <option key ={'currentLang'}>
            {props.currentLang}
    </option>
     {props.lang.map(
        (data) =>
        (props.currentLang!==data.languageSymbol) ?
        <option key ={data.languageSymbol} >
            {data.languageSymbol}
            </option> 
        : ""

     )}
        </select>
)