import React from 'react';
import './aboutAuthor.css'
export const AuthorHeader = props =>(
    <div id="authorHeader">
            <div>
            <p className="header">
                {props.informations.aboutAuthor.header}
                </p>
            <p>
                {props.informations.aboutAuthor.informations}
                </p>
            </div>
    </div>
)