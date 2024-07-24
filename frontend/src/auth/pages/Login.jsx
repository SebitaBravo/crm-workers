import * as React from "react";
import { loginService } from "../services/LoginService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [inputFields, setInputFields] = React.useState({
    usuario: "",
    password: "",
  });

  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const { token, rol, expiration } = await loginService(
        inputFields.usuario,
        inputFields.password
      );
      login(token, rol, expiration);
      switch (rol) {
        case "hr":
          navigate("/hr");
          break;
        case "admin":
          navigate("/hrboss");
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="py-14 w-[420px] px-8 flex flex-col gap-4 rounded-lg shadow-md">
        <div>
          <label htmlFor="usuario" className="block text-sm font-medium">
            Usuario
          </label>
          <input
            autoFocus
            id="usuario"
            name="usuario"
            type="text"
            placeholder="Ingresa tu usuario"
            value={inputFields.usuario}
            onChange={handleInput}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium ">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={inputFields.password}
            onChange={handleInput}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex py-2 px-1 justify-between items-center">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <span className="ml-2 text-sm ">Remember me</span>
          </label>
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
