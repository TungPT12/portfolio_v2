"use client";
import React, { useContext } from 'react';
import styles from './Certificates.module.scss';
import Certificate from '@/components/Certificate/Certificate';
import ThemeContext from '@/providers/themes/themeContext';

function Certificates() {

    const { theme } = useContext(ThemeContext);

    const certificates = [
        {
            name: "Web fullstack developer",
            linkCertificate: "https://drive.google.com/file/d/1wzPUQTpFypc8KTZvn2jWYgsVlweDvmU1/view?usp=sharing",
            image: "/assets/images/certificates/FUN230316_CCDN-v2.2_PhamThanhTung.png"
        },
        {
            name: "Web Design for Everybody: Basics of Web Development & Coding",
            linkCertificate: "https://drive.google.com/file/d/1aGHKiOS7FCcjbYoGOwZCSwCGi65H6n5S/view?usp=sharing",
            image: "/assets/images/certificates/Web_Design_for_Everybody_Basics_of _Web_Development_&_Coding.png"
        },
        {
            name: "On the job training fpt software",
            linkCertificate: "https://drive.google.com/file/d/1cBZHRMcWlINc-6aR5Sji3oFwoA3kxXL4/view?usp=sharing",
            image: "/assets/images/certificates/SE140843_21122022160934-1.png"
        },
    ]

    const renderCertificates = (certificates) => {
        return certificates.map((certificate) => {
            return <Certificate
                key={certificate.name}
                name={certificate.name}
                linkCertificate={certificate.linkCertificate}
                image={certificate.image}
            />
        })
    }

    return (
        <div id='certificates' className={`${styles[theme]}`}>
            <div className={`${styles['certificates']}`}>
                <h3 className={`${styles['title']} color_text`}>Certificates</h3>
                <div className={`${styles['certificates_list']}`}>
                    {renderCertificates(certificates)}
                </div>
            </div>
        </div>
    );
}

export default Certificates;
