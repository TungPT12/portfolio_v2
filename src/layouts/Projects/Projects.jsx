"use client";
import React, { useContext } from 'react';
import styles from './Projects.module.scss';
import Project from '@/components/Project/Project'
import ThemeContext from "@/providers/themes/themeContext";

function Projects() {

    const { theme } = useContext(ThemeContext);

    const projects = [
        {
            image: "/assets/images/projects/ecommecre.png",
            name: "Ecommerce Website",
            description: "A good choice for you, your life and your phone.",
            github: "https://github.com/TungPT12/ecommerce_client.git",
            linkDemo: "https://tung-store.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
                {
                    name: "MongoDB",
                    imageTech: "/assets/images/icons/mongo.svg",
                    linkTech: "https://www.mongodb.com/"
                },
            ]
        },
        {
            image: "/assets/images/projects/booking_website.png",
            name: "Booking Website",
            description: "We bring for you a place to enjoy your trip with your family or you friend.",
            github: "https://github.com/TungPT12/booking_client.git",
            linkDemo: "https://booking-clients.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
                {
                    name: "MongoDB",
                    imageTech: "/assets/images/icons/mongo.svg",
                    linkTech: "https://www.mongodb.com/"
                },
            ]
        },
        {
            image: "/assets/images/projects/movie_trailer.png",
            name: "Movie Trailer",
            description: "Website for you search a movie trailer.",
            github: "https://github.com/TungPT12/movie_client.git",
            linkDemo: "https://movie-trailer-client.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
            ]
        },
        {
            image: "/assets/images/projects/manga.png",
            name: "Manga for life",
            description: "Bring for you a new world in manga and a lot new adventures for.",
            github: "https://github.com/TungPT12/manga_webstie.git",
            linkDemo: "https://mangaforlive.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
            ]
        },
        {
            image: "/assets/images/projects/manga_mobile.svg",
            name: "Manga for life mobile",
            description: "A new world in manga and a lot new adventures.",
            github: "https://github.com/TungPT12/manga_webstie.git",
            linkDownload: "https://drive.google.com/file/d/15_6ZgMQcHe3JS2-GQlqMzGRdaFQatHvy/view",
            linkDemo: "https://drive.google.com/file/d/1cKqOgfrOj5H6zxRqHW-aQKUiUrZTAOUn/view?usp=sharing",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
            ]
        },

    ]

    const renderProjects = (projects) => {
        return projects.map((project) => {
            return <Project
                key={project.name}
                image={project.image}
                description={project.description}
                name={project.name}
                github={project.github}
                linkDownload={project.linkDownload}
                linkDemo={project.linkDemo}
                technologies={project.tech}
            />
        })
    }

    return (
        <div id='projects' className={`${styles[theme]}`}>
            <div className={`${styles['projects']}`}>
                <h3 className={`${styles['title']} color_text`}>Projects</h3>
                <div className={`${styles['list_project']}`}>
                    {renderProjects(projects)}
                </div>
            </div>
        </div>
    );
}

export default Projects;
