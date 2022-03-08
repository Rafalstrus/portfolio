import React from 'react';
import './aboutAuthor.css'
export const AuthorHeader = (props: any) => (
    <div id="authorHeader">
        <div id="author-wrapper">
            <p className="header">
                {props.informations.aboutAuthor.header}
            </p>
            <p>
                {props.informations.aboutAuthor.informations}
            </p>
        </div>
    </div>
)