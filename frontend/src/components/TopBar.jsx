import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="text-2xl">Crm Workers</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/trabajador" className="hover:text-gray-400">
          Trabajador
        </Link>
        <Link to="/jefe" className="hover:text-gray-400">
          Jefe
        </Link>
        <Link to="/admin" className="hover:text-gray-400">
          Admin
        </Link>
      </div>
      <div className="relative">
        <Link
          to="/login"
          className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
        >
          Inicio de sesión
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
