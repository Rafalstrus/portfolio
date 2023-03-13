import { Box, Grid } from '@mui/material';
import React from 'react';
import Footer from '../atoms/footer/Footer.component';
import AuthorHeader from '../molecules/aboutAuthor/Header.component';
import Contact from '../molecules/contact/Contact.component';
import Navbar from '../organisms/navbar/Navbar.component';
import ProjectsContainer from '../molecules/projects/ProjectsContainer.component';
import Technologies from '../molecules/technologies/Technologies.component';

export default function MainTemplate() {

    return (
        <Box>
            <Navbar />
            <Grid container>
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
                            header: "iWantToKnow",
                            technologies: ["react-native"]
                        }
                    ]}
                />
                <ProjectsContainer
                    projects={[
                        {
                            name: "website about money",
                            technologies: [
                                "react",
                                "html",
                                "css",
                                "js"
                            ],
                            img: "projects-photos/website-about-money.png",
                            description: "Aplikacja uzywająca API Narodowego Banku Polskiego, do przeliczania kursów walut",
                            link: "https://serene-liskov-393d47.netlify.app/"
                        },
                        {
                            name: "pokemon selector",
                            technologies: [
                                "typescript",
                                "react",
                                "redux",
                                "html",
                                "css"
                            ],
                            img: "projects-photos/pokemon-selector.png",
                            description: "Aplikacja wykorzystująca pokeApi",
                            link: "https://affectionate-lamport-364dcb.netlify.app/"
                        },
                        {
                            name: "weather app",
                            technologies: [
                                "react",
                                "html",
                                "node.js",
                                "css",
                                "js"
                            ],
                            img: "projects-photos/weather-app.png",
                            description: "app using openweatherapp api to get data about weather",
                            link: "https://github.com/Rafalstrus/weather-app"
                        },
                        {
                            name: "database generator",
                            technologies: [
                                "python",
                                "sql",
                                "html"
                            ],
                            img: "projects-photos/databaseGenerator.png",
                            description: "Mała biblioteka napisana w pythonie, służąca do generowanie danych w różnych formatach, z najpopularniejszymi polskimi imionami, nazwiskami, miastami, etc.",
                            link: "https://github.com/Rafalstrus/databasegenerator"
                        }
                    ]}
                />
                <Contact />
                <Footer />
            </Grid>
        </Box>
    )
}