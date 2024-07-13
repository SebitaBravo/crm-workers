import Sidebar from "../components/worker/Sidebar";
import Header from "../components/Header";
import WorkerForm from "../components/worker/WorkerForm";

function WorkerPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <WorkerForm />
      </div>
    </div>
  );
}

export default WorkerPage;
