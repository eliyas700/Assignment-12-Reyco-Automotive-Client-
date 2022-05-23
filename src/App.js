import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogIn from "./Pages/Authentication/LogIn";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import SignUp from "./Pages/Authentication/SignUp";
import Footer from "./Pages/Footer/Footer";
import Homepage from "./Pages/Hompage/Homepage";
import Products from "./Pages/Products/Products";
import PurchaseItem from "./Pages/Products/PurchaseItem";
import Header from "./Pages/Shared/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/UsersSection/MyOrders";
import MyReview from "./Pages/Dashboard/UsersSection/MyReview";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <PurchaseItem></PurchaseItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
