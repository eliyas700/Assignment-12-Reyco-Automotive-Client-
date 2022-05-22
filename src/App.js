import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Hompage/Homepage";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
