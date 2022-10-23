import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/index.js";
import Page from "./pages/Page.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/page" element={<Page />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
