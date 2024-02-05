"use client";
import React from "react";
import "../app/i18n.js";
import { useTranslation } from "react-i18next";

import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const languages = [
    { code: "en", lang: "English" },
    { code: "es", lang: "Spanish" },
    { code: "fr", lang: "French" },
];

const HeaderTop = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const { t } = useTranslation();

    const { i18n } = useTranslation();

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="border-b border-gray-200 block sm:block dark:bg-dark">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsTwitterX />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsInstagram />
                        </div>
                    </div>
                    <div className="text-gray-500 text-[12px]">
                        <b>{t("FreeShip")}</b> {t("ThisWeek")}
                    </div>
                    <div className="flex gap-4">
                        <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
                            <FaMoon className="text-white" size={18} />
                            <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? { left: "2px" } : { right: "2px" }}></div>
                            <BsSunFill className="ml-auto text-yellow-400" size={18} />
                        </div>

                        <div className="btn-container dark:bg-dark">
                            <select
                                className="text-gray-500 text-[12px] dark:bg-dark"
                                value={i18n.language}
                                onChange={(e) => changeLanguage(e.target.value)}
                            >
                                {languages.map((lng) => (
                                    <option key={lng.code} value={lng.code}>
                                        {lng.lang}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;