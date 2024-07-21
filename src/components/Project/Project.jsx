"use client";
import React, { useContext } from 'react';
import styles from './Project.module.scss'
import Link from 'next/link';
import ThemeContext from '@/providers/themes/themeContext';
function Project({ image, description, name, github, linkDemo, linkDownload, technologies }) {
    const { theme } = useContext(ThemeContext)

    // const renderTechnologies = (technologies) => {
    //     return technologies.map((technology) => {
    //         return <Link key={technology.name} href={technology.linkTech} target='_blank' className={`${styles['technology']}`}>
    //             <picture className={`block`}>
    //                 <img src={technology.imageTech} alt=''/>
    //             </picture>
    //             <p>{technology.name}</p>
    //         </Link>
    //     })
    // }

    return (
        <div className={`${styles[theme]}`}>
            <div className={`${styles['project']}`}>
                <picture className={`block ${styles['background_project']}`}>
                    <img src={image} alt={name} />
                </picture>
                <div className={`absolute ${styles['project_info']} w-full`}>
                    <h4 className={`${styles['title']}`}>{name}</h4>
                    <div className={`${styles['description']}`}>
                        {description}
                    </div>
                    {/* <div className={`${styles['technologies']}`}>
                        {renderTechnologies(technologies)}
                    </div> */}
                    <div className={`${styles['link_project']}`}>
                        <Link href={linkDemo} target='_blank'>
                            <picture className={`block`}>
                                <img src='/assets/images/icons/link_chain.svg' alt="eye" />
                            </picture>
                            <p>Live preview</p>
                        </Link>
                        {/* {linkDownload ? <Link href={github} target='_blank'>
                            <picture className={`block`}>
                                <img src='/assets/images/icons/download-svgrepo-com.svg' alt="download" />
                            </picture>
                            <p title='download for android'>Download</p>
                        </Link> : <></>} */}
                        <Link href={github} target='_blank'>
                            <picture className={`block`}>
                                <img src='/assets/images/icons/github.svg' alt="github" />
                            </picture>
                            <p>View code</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;