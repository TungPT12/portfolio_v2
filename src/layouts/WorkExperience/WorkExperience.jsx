"use client";
import React, { useContext } from 'react';
import ThemeContext from '@/providers/themes/themeContext';
import TimeLine from '@/components/TimeLine/TimeLine';
import Experience from '@/components/Experience/Experience';
import styles from './WorkExperience.module.scss';

const WorkExperience = () => {
    const workExperiences = [
        {
            companyName: "FPT Software",
            jobPosition: "Java developer | Intern.",
            jobDescription: "",
            time: "June 2021 - September 2021.",
        },
        {
            companyName: "FUNiX",
            jobPosition: "Tutor.",
            jobDescription: "Support students in FUNiX resolve problems about knowledged or practices for Javascript, Html, Css, ReactJS and ExpressJS.",
            time: "July 2023 - Now.",
        },
        {
            companyName: "INNORIX Company",
            jobPosition: "Front-end developer | Junior.",
            jobDescription: "Build UI for website from figma by Html, Css and Jquery.",
            time: "April 2024 - Now.",
        },
    ]

    const renderWorkExperiences = (workExperiences) => {
        return workExperiences.map((workExperience, index) => {
            if (index % 2 == 0) {
                return <Experience
                    key={workExperience.companyName}
                    position="left"
                    companyName={workExperience.companyName}
                    jobPosition={workExperience.jobPosition}
                    jobDescription={workExperience.jobDescription}
                    time={workExperience.time}
                />
            } else {
                return <Experience
                    key={workExperience.companyName}
                    position="right"
                    companyName={workExperience.companyName}
                    jobPosition={workExperience.jobPosition}
                    jobDescription={workExperience.jobDescription}
                    time={workExperience.time}
                />
            }
        })
    }

    const { theme } = useContext(ThemeContext);
    return (
        <div id='work_experiences' className={`${styles[theme]}`}>
            <div className={`${styles['work_experience']}`}>
                <div className={`${styles["title"]}`}>
                    <h3>Work Experience</h3>
                </div>
                <div className={`${styles['experience_wrapper']}`}>
                    {renderWorkExperiences(workExperiences)}
                    <div className={`${styles['time_line']}`}>
                        <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
