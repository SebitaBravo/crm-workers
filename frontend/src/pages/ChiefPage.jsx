import Sidebar from "../components/chief/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/chief/Dashboard";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}

export default AdminPage;
