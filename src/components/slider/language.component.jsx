import React from 'react';
export const Language = props =>(
    <select name = "langs" id="search-Langs" onChange={e =>{
        console.log(e.target.value)
        props.languageCodeChange(e.target.value) 
    }}>
        {console.log(props)}
     {props.lang.map(
        (data) =>
            <option key ={data.languageSymbol}>
                {data.languageSymbol}
            </option>
     )}
        </select>
)