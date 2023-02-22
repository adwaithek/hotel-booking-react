
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Billing from "./components/billing/Billing";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/hotels" element={<List/>} />
        <Route  path="/hotels/:id" element={<Hotel/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        
        <Route  path="/billing" element={<Billing/>} />

      </Routes>
    </Router>
  );
}

export default App;
