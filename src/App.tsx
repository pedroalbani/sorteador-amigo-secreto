import { Route, BrowserRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio";

import './index.css'

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
          <Routes>
            <Route path="/" element={<Configuracao />} />
            <Route path="/sorteio" element={<Sorteio />} />
          </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
