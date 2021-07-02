import React from 'react';
import './technologies.css';
export const Technologies = props => (
    <div id="technologies">
        <p className="header">
            {props.informations["header"]}
        </p>
        <div>{props.informations["technologies-headers"].map(
            (data) => {
                return (<div key={data['header']}>
                    <div className="technolgy-row"><p className="technology-header">{data['header'] + ": "}</p>
                    <div>
                        {data['technologies'].map(
                            (technology) => {
                                return (<div key={technology} className="technolgy-block"><img className="technology-image" alt=""
                                    src={"assets/" + technology + ".svg"} draggable="false"
                                ></img><p>{" " + technology + "  "}</p></div>)
                            }

                        )}</div></div></div>)
            }
        )} </div>
    </div>
)