import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";
import Main from "./pages/Home/Main/Main";
import SelectStore from "./pages/Home/SelectStore";
import UserGuide from "./pages/Home/UserGuide";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Modal from "./components/Home/Modal";
import { useState } from "react";
import Coupon from "./pages/Coupon";
import Heart from "./pages/Home/Heart";

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
          <Route path="/region" element={<SelectStore title={"지역"} />} />
          <Route path="/menu" element={<SelectStore title={"메뉴"} />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/heart" element={<Heart />} />

          {/* 추가하는 모든 페이지는 여기에 넣어주세요! */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
