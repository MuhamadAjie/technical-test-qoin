import { Routes, Route } from "react-router-dom";
import DetailMovie from "../Pages/DetailMovie";
import Dashboard from "../Pages/Dashboard";
import "antd/dist/antd.min.css";
import "../Styles/Global.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detailMovie/:id" element={<DetailMovie />} />
      </Routes>
    </div>
  );
}

export default App;
