import Sidebar from "../components/chief/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/chief/Dashboard";

function ChiefPage() {
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

export default ChiefPage;
