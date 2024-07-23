import React from "react";
import backgroundImage from "../resource/image/asun1.jpg";

const HomePage = () => {
  console.log('este es el home');
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Asunción</h1>
        <p className="mt-4 text-2xl">Conocé los eventos más próximos</p>
      </div>
    </div>
  );
    
};

export default HomePage;
