import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";
import Main from "./pages/Home/Main/Main";
import LocalRestaurant from "./pages/Home/LocalRestaurant/LocalRestaurant";
import MenuRestaurant from "./pages/Home/MenuRestaurant/MenuRestaurant";
import UserGuide from "./pages/Home/UserGruide/UserGuide";
import Coupon from "./pages/Coupon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/local-restaurant" element={<LocalRestaurant />} />
        <Route path="/menu-restaurant" element={<MenuRestaurant />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
