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
import LoginContextProvider from "./contexts/LoginContextProvider"; // LoginContextProvider
import ModalContextProvider from "./contexts/ModalContextProvider"; // SelectModalProvider

function App() {
  // LoginContext, ModalcontextProvider 추가
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <ModalContextProvider>
          <div className="flex flex-col min-h-screen font-inter ">
            <Header />
            <Navbar />
            <section className="relative flex-grow">
              {/* 라우트를 정의한 부분 */}
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/store" element={<Store />} />
                <Route path="/coupon" element={<Coupon />} />
                <Route path="/region" element={<Region />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/user-guide" element={<UserGuide />} />
                <Route path="/heart" element={<Heart />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu/:menu_id" element={<Menu />} />
                <Route path="/region/:city_id/:town_id" element={<Region />} />
                {/* 추가하는 모든 페이지는 여기에 넣어주세요! */}
              </Routes>
            </section>
            <Footer />
          </div>
        </ModalContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
