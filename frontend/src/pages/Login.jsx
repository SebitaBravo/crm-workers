import { useState } from "react";
import TopBar from "../components/login/TopBar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAutoComplete = (name, password) => {
    setUsername(name);
    setPassword(password);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Inicio de Sesión</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-left font-bold mb-1"
                htmlFor="username"
              >
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border border-gray-300 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-left font-bold mb-1"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">⚠️ Warning ⚠️</h1>
          <p className="mb-2">
            Esta es una demostración de un sistema de inicio de sesión.
          </p>
          <p className="mt-4">
            Haz clic en un nombre para autocompletar el formulario de inicio de
            sesión:
          </p>
          <p className="mt-2">
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => handleAutoComplete("trabajador1", "trabajador")}
            >
              Trabajador
            </span>
            <br />
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => handleAutoComplete("administrador", "admin")}
            >
              Administrador
            </span>
            <br />
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => handleAutoComplete("jefe", "jefe")}
            >
              Jefe
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
