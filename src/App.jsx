import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Result } from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
