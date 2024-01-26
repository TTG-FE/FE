import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";
import Main from "./pages/Home/Main/Main";
import LocalRestaurant from "./pages/Home/LocalRestaurant/LocalRestaurant";
import MenuRestaurant from "./pages/Home/MenuRestaurant/MenuRestaurant";
import UserGuide from "./pages/Home/UserGruide/UserGuide";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Modal from "./components/Home/Modal";
import { useState } from "react";
import Coupon from "./pages/Coupon";
import MyPage from "./pages/MyPage";
import { Login } from "./pages/Login";

function App() {
  // 모달 선택창 상태를 관리하는 상태 변수
  const [selectModal, setSelectModal] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Navbar setSelectModal={setSelectModal} />
      <div className="relative min-h-screen">
        {/* 모달창 컴포넌트 (모달 선택 상태 전달)*/}
        <Modal selectModal={selectModal} setSelectModal={setSelectModal} />

        {/* 라우트를 정의한 부분 */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/local-restaurant" element={<LocalRestaurant />} />
          <Route path="/menu-restaurant" element={<MenuRestaurant />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* 추가하는 모든 페이지는 여기에 넣어주세요! */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;