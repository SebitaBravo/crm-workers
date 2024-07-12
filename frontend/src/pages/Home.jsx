import TopBar from "../components/TopBar";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">⚠️ Warning ⚠️</h1>
          <p className="mb-2">
            Esta es solo una demo de la pagina los datos ingresados serán vistos
            por todos los usuarios ¡<strong>NO AGREGAR DATOS SENSIBLES</strong>
            !.
          </p>
          <br />
          <p>
            En una pagina oficial no debe ir accesos directos a los usuarios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
