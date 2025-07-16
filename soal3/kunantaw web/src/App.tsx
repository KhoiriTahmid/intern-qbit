import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Pemberitahuan from "./pages/Pemberitahuan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<Pemberitahuan />} />
          <Route path="/products" element={<Pemberitahuan />} />
          <Route path="/products/:id" element={<Pemberitahuan />} />
          <Route path="/articles" element={<Pemberitahuan />} />
          <Route path="/articles/:slug" element={<Pemberitahuan />} />
          <Route path="/career" element={<Pemberitahuan />} />
          <Route path="/career/:id" element={<Pemberitahuan />} />
          <Route path="/contact-us" element={<Pemberitahuan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
