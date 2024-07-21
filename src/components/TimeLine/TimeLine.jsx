"use client";
import React, { useContext } from 'react';
import ThemeContext from '@/providers/themes/themeContext';
import styles from './TimeLine.module.scss';
function TimeLine() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles[theme]}`}>
            <div className={`${styles['line']}`}></div>
        </div>
    );
}

export default TimeLine;