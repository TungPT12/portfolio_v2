"use client";
import React, { useContext } from 'react';
import styles from './EducationCard.module.scss'
import ThemeContext from '@/providers/themes/themeContext';
import useFadeInFadeOut from '@/hooks/useFadeInFadeOut';
import { setFadeInFadeOut } from '@/utils/FadeInFadeOut';

const EducationCard = () => {
    const [isInViewCardEdu, loadingTimeCardEdu, targetElCardEdu] = useFadeInFadeOut({ threshold: 0.7, rootMargin: "0px" });
    const { theme } = useContext(ThemeContext)
    return (
        <div ref={targetElCardEdu} className={`${styles[theme]} animationEffectFadeInFadeOut ${setFadeInFadeOut(isInViewCardEdu, loadingTimeCardEdu)}`}>
            <div className={`${styles['education_card']}`}>
                <picture className={`block ${styles['image_school']}`}>
                    <img src='/assets/images/educations/fpt-university.jpg' alt={"fpt"} />
                </picture>
                <div className={`${styles['education_info']}`}>
                    <h3 className={`${styles['degree_name']}`}>Bachelor Of Software Engineering</h3>
                    <div className={`${styles['degree_info']}`}>
                        <div className={`${styles['row_info']} flex`}>
                            <span className={`${styles['title']}`}>School&#39;s name &#58; </span>
                            <p className={`${styles['description']}`}>FPT University Ho Chi Minh</p>
                        </div>
                        <div className={`${styles['row_info']} flex`}>
                            <span className={`${styles['title']}`}>GPA &#58; </span>
                            <p className={`${styles['description']}`}>6.7 / 10</p>
                        </div>
                        <div className={`${styles['row_info']} flex`}>
                            <span className={`${styles['title']}`}>Time &#58;</span>
                            <p className={`${styles['description']}`}>2018/09 - 2023/04</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;
