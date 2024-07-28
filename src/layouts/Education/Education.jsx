'use client'
import React, { useContext } from 'react';
import useFadeInFadeOut from '@/hooks/useFadeInFadeOut';
import styles from './Education.module.scss';
import EducationCard from '@/components/EducationCard/EducationCard';
import ThemeContext from '@/providers/themes/themeContext';
import { setFadeInFadeOut } from '@/utils/FadeInFadeOut';

function Education() {
    const [isInViewTitle, loadingTimeTitle, targetElTitle] = useFadeInFadeOut({ threshold: 0.7, rootMargin: "0px" });
    const { theme } = useContext(ThemeContext);
    return (
        <div id='educations' className={`${styles[theme]}`}>
            <div className={`${styles['education']}`}>
                <h3 ref={targetElTitle} className={`${styles['title']} animationEffectFadeInFadeOut ${setFadeInFadeOut(isInViewTitle, loadingTimeTitle)}`}>Education</h3>
                <div className={`${styles['education_list']}`}>
                    <EducationCard />
                </div>
            </div>
        </div>
    );
}

export default Education;
