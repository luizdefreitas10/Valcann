import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Cart from "./pages/Cart/Cart";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
