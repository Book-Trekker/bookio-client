import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="root-component">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
