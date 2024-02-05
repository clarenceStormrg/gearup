"use client";
import React from "react";
import "../app/i18n.js";

import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-blackish text-gray-500 text-center py-8 md:py-4 dark:bg-dark">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 border-b md:border-b-0 md:border-r border-gray-600">
                    <h2 className="text-lg font-bold mb-2">{t("AboutUs")}</h2>
                    <p className="text-sm">{t("EmpresaTrujillana")}</p>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">{t("ContactUs")}</h2>
                    <p className="text-sm">{t("Phone")}: +51 902093715<br />Email: mgutierrezt@unitru.edu.pe</p>
                    <div className="flex gap-2 mt-2 justify-center">
                        <div className="footer__icon_wrapper dark:bg-dark">
                            <BsFacebook />
                        </div>
                        <div className="footer__icon_wrapper dark:bg-dark">
                            <BsTwitterX />
                        </div>
                        <div className="footer__icon_wrapper dark:bg-dark">
                            <BsInstagram />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0  border-b md:border-b-0 md:border-l border-gray-600">
                    <h2 className="text-lg font-bold mb-2">{t("ReceiveNews")}</h2>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder="Tu correo electrónico" className="bg-gray-800 text-white px-4 py-2 rounded-md" />
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300">Enviar</button>
                    </div>
                </div>
            </div>
            <p className="text-xs mt-4">Copyright © GearUp | {t("RightsReserved")} 2024.</p>
        </div>
    );
};

export default Footer;