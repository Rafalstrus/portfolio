import React from 'react';
import './technologies.css';
export const Technologies = (props: any) => (
    <div id="technologies">
        <p className="header">
            {props.informations["header"]}
        </p>
        <div>{props.informations["technologies-headers"].map(
            (data: any) => (
                <div key={data['header']}>
                    <div className="technolgy-row"><p className="technology-header">{data['header'] + ": "}</p>
                        <div>
                            {data['technologies'].map(
                                (technology: any) => {
                                    return (<div key={technology} className="technolgy-block">
                                        <img className="technology-image" alt=""
                                            src={"assets/" + technology + ".svg"} draggable="false"
                                        />
                                        <p>{" " + technology + "  "}</p>
                                    </div>)
                                }

                            )}</div>
                    </div>
                </div>
            )
        )} </div>
    </div>
)