import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./modules/Home";
import DeliveredItems from "./modules/DeliveredItems";
import Orders from "./modules/orders";
import Cart from "./modules/Cart";
import Analytics from "./modules/Analytics";

function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/delivered" element={<DeliveredItems />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;
