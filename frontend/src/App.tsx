import DataTable from "componentes/DataTable";
import Footer from "componentes/Footer";
import NavBar from "componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-primary">OLÁ MUNDO!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
