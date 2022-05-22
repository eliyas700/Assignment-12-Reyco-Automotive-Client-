import { Route, Routes } from "react-router-dom";
import LogIn from "./Pages/Authentication/LogIn";
import SignUp from "./Pages/Authentication/SignUp";
import Footer from "./Pages/Footer/Footer";
import Homepage from "./Pages/Hompage/Homepage";
import Products from "./Pages/Products/Products";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
