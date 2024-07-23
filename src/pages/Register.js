import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {}
        <h2 className="text-2xl font-bold mb-6 text-center">Regístrate</h2>
        {}
        <form onSubmit={handleSubmit}>
          {}
          <div className="mb-4">
            {}
            <label className="block text-gray-700">Nombre</label>
            {}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="mb-4">
            {}
            <label className="block text-gray-700">Correo Electrónico</label>
            {}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="mb-6">
            {}
            <label className="block text-gray-700">Contraseña</label>
            {}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
