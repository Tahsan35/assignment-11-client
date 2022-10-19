
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ManegeInventory from "./Pages/ManageInventory/ManegeInventory";
import Navbar from "./Pages/Navbar/Navbar";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Inventory from "./Pages/ManageInventory/Inventory";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./Pages/Shared/NotFoundPage";
import MyItems from "./Pages/ProductsDetails/MyItems"
import AddItems from "./Pages/ProductsDetails/AddItems";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Signup/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<ManegeInventory></ManegeInventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>

        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
