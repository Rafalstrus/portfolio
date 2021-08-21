import React from 'react';
import './contact.css'
export const Contact = props => (
    <div id="contacts-container">
        <p className="header">{props.contactInfo.contact}</p>
        <div id="contact-info-container">
            <div id="email-Adress">
                <span className="contact-type">{props.contactInfo["email-address"]}</span>
                <span className="contact-info">rafal.strus@onet.eu</span>
            </div>
            <div id="github-Link">
                <span className="contact-type">{props.contactInfo["github-Link"]}</span>
                <span className="contact-info">
                    <a href="https://github.com/Rafalstrus" className="contact-info">https://github.com/Rafalstrus</a>
                </span>
            </div>
        </div>
    </div>
)
