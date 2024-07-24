import { FaHospital } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-64 shadow-lg hidden md:block">
      <div className="flex items-center justify-center py-6 text-purple-600">
        <h1 className="text-2xl font-bold">Jefe</h1>
      </div>
      <nav className="mt-10">
        <Link
          to="/chief"
          className="flex items-center mt-4 py-2 px-6 bg-gray-200 text-gray-800"
        >
          <FaHospital className="mr-3" />
          Lista empleados
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
