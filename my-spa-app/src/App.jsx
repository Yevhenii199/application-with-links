import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Головна</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/about">Про мене</Link>
        </nav>
        <ThemeToggle /> {}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

