"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Whatsapp = () => {
  const [buttonStyle, setButtonStyle] = useState<{ [key: string]: string | number }>({
    position: "fixed",
    bottom: "20px",
    right: "20px",
  });

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const newYPosition = Math.max(20, 100 - yOffset);
      setButtonStyle({ ...buttonStyle, bottom: `${newYPosition}px` });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buttonStyle]);

  const phoneNumber = "+51902093715";
  const message = "Hola, ¿cómo estás?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Image
        src="/whatsapp.png"
        alt="WhatsApp Icon"
        width={50}
        height={50}
        style={{ ...buttonStyle, position: "fixed", bottom: "20px", right: "20px" }}
        className="cursor-pointer"
      />
    </a>
  );
};

export default Whatsapp;
