import React from "react";

const UserProfile = () => {
  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form>
        <label>Usuario:</label>
        <input type="text" />
        <label>Contraseña:</label>
        <input type="password" />
        <button>Iniciar Sesión</button>
        <button>Registrarse</button>
      </form>
      <div>
        <h2>Perfil de Usuario</h2>
        <p>Foto</p>
        <p>Nombre</p>
        <div>Lugares Favoritos</div>
        <div>Eventos Guardados</div>
      </div>
      <div>Recomendaciones</div>
    </div>
  );
};

export default UserProfile;
