import { Box } from '@mui/system';
import React from 'react';
import { Footer } from '../atoms/footer/footer.component';
import { AuthorHeader } from '../molecules/aboutAuthor/header.component';
import { Contact } from '../molecules/contact/contact-container.component';
import { Navbar } from '../organisms/navbar/navbar';
import { ProjectsContainer } from '../projects/projects-container.component';
import { Technologies } from '../technologies/technologies.component';

export default function MainTemplate() {

    return (
        <Box>
            <Navbar />
            <AuthorHeader />
            <Technologies
                technolgies={[
                    {
                        header: "iKnowWell",
                        technologies: ["react", "html", "mysql", "python", "css",
                            "javascript", "yii", "php", "node.js"]
                    },
                    {
                        header: "iAmLearning",
                        technologies: ["typescript", "redux", "sass", "symfony", "express"]
                    },
                    {
                        header: "iWantToKnows",
                        technologies: ["react-native"]
                    }
                ]}
            />
            <ProjectsContainer
                projects={[
                    {
                        "name": "website about money",
                        "technologies": [
                            "react",
                            "html",
                            "css",
                            "js"
                        ],
                        "img": "projects-photos/website-about-money.png",
                        "description": "strona uzywająca api narodowego banku polskiego, przelicza kursy walut, po aktualnych kursach",
                        "link": "https://serene-liskov-393d47.netlify.app/"
                    },
                    {
                        "name": "pokemon selector",
                        "technologies": [
                            "typescript",
                            "react",
                            "redux",
                            "html",
                            "css"
                        ],
                        "img": "projects-photos/pokemon-selector.png",
                        "description": "aplikacja napisana w react, uzywajaca pokeApi",
                        "link": "https://affectionate-lamport-364dcb.netlify.app/"
                    },
                    {
                        "name": "weather app",
                        "technologies": [
                            "react",
                            "html",
                            "node.js",
                            "css",
                            "js"
                        ],
                        "img": "projects-photos/weather-app.png",
                        "description": "app using openweatherapp api to get data about weather",
                        "link": "https://compassionate-heisenberg-0d49f5.netlify.app/"
                    },
                    {
                        "name": "database generator",
                        "technologies": [
                            "python",
                            "sql",
                            "html"
                        ],
                        "img": "projects-photos/databaseGenerator.png",
                        "description": "mała biblioteka napisana w pythonie, służąca do generowanie baz danych w różnych formatach, z najpopularniejszymi polskimi imionami, nazwiskami, miastami i etc.",
                        "link": "https://github.com/Rafalstrus/databasegenerator"
                    }
                ]}
            />
            <Contact />
            <Footer />
        </Box>
    )
}