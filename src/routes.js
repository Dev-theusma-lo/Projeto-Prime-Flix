import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./Components/header";
// import Erro from "./pages/Erro"

function RoutesApp() {
  return (
    <div className="main">
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme/>} />
        {/* <Route path="*" element={<Erro/>} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
