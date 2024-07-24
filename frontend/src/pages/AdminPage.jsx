import Sidebar from "../components/administrator/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/administrator/Dashboard";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}

export default AdminPage;
