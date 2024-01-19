import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";
import Main from "./pages/Home/Main/Main";
import LocalRestaurant from "./pages/Home/LocalRestaurant/LocalRestaurant";
import MenuRestaurant from "./pages/Home/MenuRestaurant/MenuRestaurant";
import UserGuide from "./pages/Home/UserGruide/UserGuide";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header를 모든 Route에 적용 */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store />} />
        <Route path="/local-restaurant" element={<LocalRestaurant />} />
        <Route path="/menu-restaurant" element={<MenuRestaurant />} />
        <Route path="/user-guide" element={<UserGuide />} />
      </Routes>
      <Footer /> {/* Header를 모든 Route에 적용 */}
    </BrowserRouter>
  );
}

export default App;
