import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";
import Main from "./pages/Home/Main/Main";
import Menu from "./pages/Home/Menu";
import Region from "./pages/Home/Region";
import UserGuide from "./pages/Home/UserGuide";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { useState } from "react";
import Coupon from "./pages/Coupon";
import Heart from "./pages/Home/Heart";
import MyPage from "./pages/MyPage";
import { Login } from "./pages/Login";

function App() {
  // TODO: Redux로 상태변수를 관리
  // 모달 선택창 상태를 관리하는 상태 변수
  const [selectModal, setSelectModal] = useState(0);
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-inter ">
        <Header />
        <Navbar setSelectModal={setSelectModal} />
        <div className="relative flex-grow">
          {/* 라우트를 정의한 부분 */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/store" element={<Store />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route
              path="/region"
              element={
                <Region
                  selectModal={selectModal}
                  setSelectModal={setSelectModal}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  selectModal={selectModal}
                  setSelectModal={setSelectModal}
                />
              }
            />
            <Route path="/user-guide" element={<UserGuide />} />
            <Route path="/heart" element={<Heart />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            {/* 추가하는 모든 페이지는 여기에 넣어주세요! */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
