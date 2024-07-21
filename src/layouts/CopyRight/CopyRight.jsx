"use client";
import React, { useContext } from 'react';
import styles from './CopyRight.module.scss';
import ThemeContext from '@/providers/themes/themeContext';

function CopyRight() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${styles[theme]}`}>
            <div className={`${styles['copy_right']}`}>
                <div className={`${styles['content']}`}>
                    <p>&copy; Make with by</p>
                    <picture>
                        <img alt='copyright' src='/assets/images/icons/heart_red.svg' />
                    </picture>
                    <span className={`${styles['author']}`}>Pham Thanh Tung</span>
                </div>
                {/* <div className={`${styles['content']}`}>
                <img src='/assets/copyright_white.svg' />
                <p className={`color_text`}>Copy right by</p>
                <span className={`color_text`}>Pham Thanh Tung</span>
            </div> */}
            </div>
        </div>
    );
}

export default CopyRight;