"use client";

import React from "react";
import "../app/i18n.js";

import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: '/banner1.jpg',
            title: "Articulos en Tendencia",
            mainTitle: "OFERTAS DE ÚLTIMA MODA PARA MUJER",
            price: "S/.20",
        },
        {
            id: 1,
            img: '/banner2.jpg',
            title: "Accesorios en Tendencia",
            mainTitle: "PESAS MANCUERNAS",
            price: "S/.50",
        },
        {
            id: 2,
            img: '/banner3.jpg',
            title: "OFERTAS ESPECIALES",
            mainTitle: "OFERTAS POR INICIO DE TEMPORADA",
            price: "S/.60",
        },
    ];

    return (
        <div className="dark:bg-dark">
            <div className="container pt-6 lg:pt-0 dark:bg-dark">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                          key={item.id}
                          img={item.img}
                          title={item.title}
                          mainTitle={item.mainTitle}
                          price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;