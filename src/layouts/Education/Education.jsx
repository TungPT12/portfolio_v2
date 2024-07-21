'use client'
import React, { useContext } from 'react';
import styles from './Education.module.scss';
import EducationCard from '@/components/EducationCard/EducationCard';
import ThemeContext from '@/providers/themes/themeContext';

function Education() {
    const { theme } = useContext(ThemeContext);
    return (
        <div id='educations' className={`${styles[theme]}`}>
            <div className={`${styles['education']}`}>
                <h3 className={`${styles['title']}`}>Education</h3>
                <div className={`${styles['education_list']}`}>
                    <EducationCard />
                </div>
            </div>
        </div>
    );
}

export default Education;
