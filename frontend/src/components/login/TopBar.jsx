import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="text-2xl">Crm Workers</div>
      <div className="space-x-4">
        <Link to="/" className=" hover:text-gray-400">
          Home
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
