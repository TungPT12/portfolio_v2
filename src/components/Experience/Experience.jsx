"use client";
import React, { useContext } from 'react';
import styles from './Experience.module.scss'
import ThemeContext from '@/providers/themes/themeContext';
const Experience = ({ position, companyName, jobPosition, jobDescription, time }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${styles[theme]} ${styles[position]}`}>
            <div className={`${styles['line']} ${styles[position]}`}>
                <div className={`${styles['circle']}`}></div>
            </div>
            <div className={`${styles['experience']} `}>
                <h3 className={`${styles['company_name']}`}>{companyName}</h3>
                <div className={`${styles['more-info']}`}>
                    <div className={`${styles['row_info']}`}>
                        <span>Position: </span>
                        <p>{jobPosition}</p>
                    </div>
                    {
                        jobDescription ? <div className={`${styles['row_info']}`}>
                            <span>Job Description: </span>
                            <p>{jobDescription}</p>
                        </div> : ""
                    }
                    <div className={`${styles['row_info']}`}>
                        <span>Time: </span>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
