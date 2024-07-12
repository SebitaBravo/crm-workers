function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b-2 border-gray-200">
      <div className="relative w-full md:w-1/3">
        <div className="absolute top-0 left-0 mt-2 ml-3"></div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://via.placeholder.com/150"
          alt="profile"
        />
        <div className="text-gray-700">Sebastian</div>
      </div>
    </div>
  );
}

export default Header;
