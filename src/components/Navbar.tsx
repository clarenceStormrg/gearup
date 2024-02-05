"use client";
import "../app/i18n.js";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className="hidden lg:block dark:bg-dark">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                    <Link className="navbar__link relative" href="#">
                        {t("Home")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Categories")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Mens")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Womens")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Perfume")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Blog")}
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        {t("Hotoffers")}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;