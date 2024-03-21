import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite/Favorite";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
