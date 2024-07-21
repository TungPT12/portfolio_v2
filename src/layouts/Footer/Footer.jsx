"use client";
import ThemeContext from "@/providers/themes/themeContext";
import React, { useContext } from 'react';
import styles from './Footer.module.scss'
import Link from 'next/link';
import Socials from '@/components/Socials/Socials';
// import QuickLink from '@/components/QuickLink/QuickLink';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${styles[theme]}`}>
            <div className={`${styles['footer']}`}>
                <div className={`${styles['footer_col']}`}>
                    <h5>Thanh Tung&#39;s Portfolio</h5>
                    <div className={`color_text ${styles['text_thanks']}`}>
                        Thank you for visiting my personal portfolio website. Connect with me over socials.
                    </div>
                </div>
                <div className={`${styles['footer_col']} items-center`}>
                    <div className={`${styles['middle_col']}`}>
                        <h5>Contact Info</h5>
                        <div className={`${styles['info']} w-fit`}>
                            <div className={`${styles['phone_number']}`}>
                                <div className={`h-full ${styles['wrapper_icon']}`}>
                                    <img src='/assets/images/icons/mobile_them_dark.svg' />
                                </div>
                                <p className={`${styles['text_info']}`}>0988486443</p>
                            </div>
                            <div className={`${styles['email']}`}>
                                <picture className={`h-full ${styles['wrapper_icon']}`}>
                                    <img alt="mail" src='/assets/images/icons/mail_them_dark.svg' />
                                </picture>
                                <a href="mailto:phamthanhtung12.work@gmail.com" className={`${styles['text_info']}`}>phamthanhtung12.work@gmail.com</a>
                            </div>
                            <div className={`${styles['address']}`}>
                                <div className={`h-full ${styles['wrapper_icon']}`}>
                                    <img src='/assets/images/icons/place_them_dark.svg' />
                                </div>
                                <p className={`${styles['text_info']}`}>Ho Chi Minh City</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['footer_col']}`}>
                    <div className={`${styles['logo_and_socials']}`}>
                        <picture>
                            <img src="/assets/images/logo/thantung2_white.svg" />
                        </picture>
                        <Socials />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;