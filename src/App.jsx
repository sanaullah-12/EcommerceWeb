import "./App.css";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Sales from "./Components/FlashSales/sales";

function App() {
  const salesEndTime = "2024-10-20T23:59:59";
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Sales targetDate={salesEndTime} />
    </>
  );
}

export default App;
