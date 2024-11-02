import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}
export default App;
