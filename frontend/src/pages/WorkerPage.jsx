import Sidebar from "../components/worker/Sidebar";
import Header from "../components/Header";
import WorkerForm from "../components/worker/WorkerForm";
import FamilyForm from "../components/worker/FamilyForm";

function WorkerPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <WorkerForm />
        <FamilyForm />
      </div>
    </div>
  );
}

export default WorkerPage;
