import React from 'react'
import '../Footer/Footer.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <ul>
                    <p>{t("footer1")}</p>
                    <NavLink to="">
                        CADELTA
                    </NavLink>
                    <NavLink to="">
                        BIO MARAL FOR MEN
                    </NavLink>
                    <NavLink to="">
                        BIO MARAL FOR LADIES
                    </NavLink>
                    <NavLink to="">
                        CADELTA TOTAL
                    </NavLink>
                </ul>
                <ul>
                    <p>{t("footer2")}</p>
                    <NavLink to="/about">
                        {t("footer3")}
                    </NavLink>
                    <NavLink to="/about/contact">
                        {t("footer4")}
                    </NavLink>
                </ul>
                <ul>
                    <p>{t("footer5")}</p>
                    <NavLink to="/about/delivery">
                        {t("footer6")}
                    </NavLink>
                    <NavLink to="/about/delivery">
                        {t("footer7")}
                    </NavLink>
                    <NavLink to="/about/delivery">
                        {t("footer8")}
                    </NavLink>
                </ul>
                <ul>
                    <p>{t("footer9")}</p>
                    <NavLink to="tel:998971011033">
                    <i className="fa-solid fa-phone"></i>
                        +998 97 101 10 33
                    </NavLink>
                    <NavLink to="tel:998901278998">
                    <i className="fa-solid fa-phone"></i>
                        +998 90 127 89 98
                    </NavLink>
                    <NavLink to="tel:998998000772">
                        <i className="fa-solid fa-phone"></i>
                        +998 99 800 07 72
                    </NavLink>
                    <NavLink to='https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.340331%2C41.298124&mode=usermaps&source=mapframe&um=constructor%3Acd59cad33786d9c807a01d682efd7dd34947b37f6f3b6a191fa122476ebd557a&utm_source=mapframe&z=18'>
                        <i className="fa-solid fa-location-dot"></i>
                        {t("footer10")}
                    </NavLink>
                </ul>
            </div >
        </footer >
    )
}

export default Footer