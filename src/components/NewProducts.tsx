"use client";
import React from "react";
import "../app/i18n.js";

import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

const productsData = [
    {
        img: '/sports1.jpg',
        title: "MARATHON SPORTS",
        desc: "Camiseta Oficial Hinchada De Perú Para Hombre Eliminatoria",
        rating: 5,
        price: "89.00",
    },
    {
        img: '/sports2.jpg',
        title: "ADIDAS",
        desc: "Short de Fútbol Entrenamiento Perú 2023 Adidas Hombre",
        rating: 4,
        price: "149.50",
    },
    {
        img: '/sports3.jpg',
        title: "PSG",
        desc: "Short fútbol FC Barcelona Futbol Club Nike PSG Hombre",
        rating: 4,
        price: "94.50",
    },
    {
        img: '/sports4.jpg',
        title: "ADIDAS",
        desc: "Polera Deportiva Adidas Mujer Essentials",
        rating: 4,
        price: "109.95",
    },
    {
        img: '/sports5.jpg',
        title: "ADIDAS",
        desc: "Polo Deportivo Adidas Mujer Essentials Loose",
        rating: 4,
        price: "39.95",
    },
    {
        img: '/sports6.jpg',
        title: "SWEET COTTON",
        desc: "Top Deportivo de Algodón Sweet Cotton Negro",
        rating: 4,
        price: "14.90",
    },
];

const NewProducts = () => {
    const { t } = useTranslation();

    return (
        <div className="dark:bg-dark">
            <div className="container pt-16 dark:bg-dark">
                <h2 className="font-medium text-2xl pb-4">{t("NewProducts")}</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-3
                lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item, index) => (
                        <ProductCard key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProducts;