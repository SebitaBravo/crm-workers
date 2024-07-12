import Sidebar from "../components/administrator/Sidebar";
import Header from "../components/Header";

function WorkerPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
      </div>
    </div>
  );
}

export default WorkerPage;
