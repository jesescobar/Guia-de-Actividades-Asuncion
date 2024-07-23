import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8">
          <div>
            <h4 className="text-xl font-bold">Sitio</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#experiences"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Experiencias
                </a>
              </li>
              <li>
                <a href="#info" className="text-gray-600 hover:text-gray-800">
                  Informaciones Prácticas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-gray-800">
                  Help/FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Contacto</h4>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#app" className="bg-black text-white px-4 py-2 rounded-full">
            Descargar App
          </a>
        </div>
        <p className="mt-8 text-gray-500">All rights reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
