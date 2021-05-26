import React from 'react';
export const AuthorHeader = props =>(
    <div className="authorHeader">
            <div>
            <p>
                {props.informations.aboutAuthor.name}
                </p>
            <p>
                {props.informations.aboutAuthor.informations}
                </p>
            </div>
    </div>
)