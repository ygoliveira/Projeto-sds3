import DataTable from "components/DataTable";
import Navbar from "components/Navbar";
import Footer from "components/Navbar/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
