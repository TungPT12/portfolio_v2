"use client";
import React, { useContext } from 'react';
import styles from './Certificate.module.scss';
import Link from 'next/link';
import ThemeContext from '@/providers/themes/themeContext';
import useFadeInFadeOut from '@/hooks/useFadeInFadeOut';
import { setFadeInFadeOut } from '@/utils/FadeInFadeOut';

function Certificate({ name, linkCertificate, image }) {
    const [isInViewCardCertificate, loadingTimeCardCertificate, targetElCardCertificate] = useFadeInFadeOut({ threshold: 0.7, rootMargin: "0px" });
    const { theme } = useContext(ThemeContext)
    return (
        <div ref={targetElCardCertificate} className={`${styles[theme]} animationEffectFadeInFadeOut ${setFadeInFadeOut(isInViewCardCertificate, loadingTimeCardCertificate)}`}>
            <div className={`${styles['certificate']}`}>
                <picture className={`${styles['image_certificate']} block`}>
                    <img src={image} alt={name} className={`w-full`} />
                </picture>
                <div className={`${styles['wrapper_info']}`}>
                    <Link
                        href={linkCertificate}
                        target='_blank'
                        title={name}
                        className={`${styles["certificate_name"]} capitalize color_second_text`}
                    >
                        {name}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Certificate;
