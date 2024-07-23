import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-black text-xl font-bold">LOGO</div>
        {/* Links */}
        <div className="flex space-x-8">
          <a href="#quihacer" className="text-black hover:text-gray-600">
            Qué hacer
          </a>
          <a href="#agenda" className="text-black hover:text-gray-600">
            Agenda
          </a>
          <a href="#espacios" className="text-black hover:text-gray-600">
            Espacios
          </a>
          <a href="#contacto" className="text-black hover:text-gray-600">
            Contacto
          </a>
        </div>
        {/* Separador */}
        <div className="border-l border-gray-300 h-8 mx-4"></div>
        {/* Registrarse y Botón de Tickets */}
        <div className="flex space-x-4 items-center">
          <a href="#register" className="text-red-600 hover:text-red-800">Registrarse</a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
            Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};
       

export default Navbar;
