import { BrowserRouter, Routes, Route } from "react-router-dom"
import StockOverView from "./Pages/StockOverView";
import StockDetails from "./Pages/StockDetails";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverView/>}/>  
            <Route path="/:symbol" element={<StockDetails/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 