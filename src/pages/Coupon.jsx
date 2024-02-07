import React, { useRef, useState } from "react";

// Asset
import { ReactComponent as SearchIcon } from "./../assets/searchIcon.svg";

// Component
import CouponCard from "../components/CouponCard";
import { Link } from "react-router-dom";
import GoToLogin from "../components/GoToLogin";

const Coupon = () => {
  // 쿠폰 사용 여부
  const [login, setLogin] = useState(false);
  const [coupons, setCoupons] = useState([
    // { id: 1, used: false },
    // { id: 2, used: false },
    // { id: 3, used: false },
    {
      id: 21,
      name: "[성수] 베리베리스트로베리케이크 전문점",
      subtitle: "닐라닐라바닐라 조각케이크 무료증정",
      useYn: false,
      qrCode:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/fe8b6765-7b92-4ea7-87ca-79cb74e7a59fimage.jpeg",
      storeImage:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/d394c8b1-a4e2-4793-8bcf-84210f7256cd%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
      startDate: "2024-02-04",
      endDate: "2024-02-04",
    },
    {
      id: 22,
      name: "name",
      subtitle: "subTitle2",
      useYn: false,
      qrCode:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/3896a88d-09b8-40a9-966c-c715fdfd0ec4image.jpeg",
      storeImage:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/d5c859a4-9614-4e14-a9f1-2b35f143f27a%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
      startDate: "2024-02-04",
      endDate: "2024-02-04",
    },
    {
      id: 23,
      name: "name",
      subtitle: "subTitle3",
      useYn: false,
      qrCode:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/50bfe1ad-4450-4c4d-b695-af3226e4e3a6image.jpeg",
      storeImage:
        "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/04782f11-8f1a-4444-ab0e-7557bb09cb4f%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
      startDate: "2024-02-04",
      endDate: "2024-02-04",
    },
  ]);

  const handleLogin = () => {
    setLogin(!login);
    console.log(login);
  }

  // 사용한 쿠폰 처리
  const handleCouponUsed = (couponId) => {
    // 해당 쿠폰을 사용했다고 true로 변경
    setCoupons((prevCoupons) => {
      const updatedCoupons = prevCoupons.map((coupon) =>
        coupon.id === couponId ? { ...coupon, used: true } : coupon
      );

      // 사용한 쿠폰을 배열의 끝으로 이동
      const usedCouponIndex = updatedCoupons.findIndex(
        (coupon) => coupon.id === couponId && coupon.used
      );

      if (usedCouponIndex !== -1) {
        const usedCoupon = updatedCoupons.splice(usedCouponIndex, 1)[0];
        updatedCoupons.push(usedCoupon);
      }

      return updatedCoupons;
    });
  };

  // 모달창 상태
  const [modalStates, setModalStates] = useState([
    { isCouponModalOpen: false },
    { isCouponModalOpen: false },
    { isCouponModalOpen: false },
  ]);

  // 모달창 열기
  const handleOpenModal = (modalName, couponIndex) => {
    setModalStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[couponIndex][modalName] = true;
      return newStates;
    });
  };

  // 모달창 닫기
  const handleCloseModal = (couponIndex) => {
    setModalStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[couponIndex] = {
        isCouponModalOpen: false,
      };
      return newStates;
    });
  };

  // 쿠폰 카드를 렌더링하는 공통 함수
  const renderCouponCards = () => {
    return coupons.map((coupon, index) => (
      <CouponCard
        key={coupon.id}
        couponData={coupon}
        handleCouponUsed={() => handleCouponUsed(coupon.id)}
        handleOpenModal={(modalName) => handleOpenModal(modalName, index)}
        handleCloseModal={() => handleCloseModal(index)}
        modalStates={modalStates[index]}
      />
    ));
  };

  return (
    <>
      <div className="font-inter">
        {/* ---------------모바일 쿠폰------------------- */}
        <div className="md:hidden">
          <MobileCouponSection
            coupons={coupons}
            login={login}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            modalStates={modalStates}
            handleCouponUsed={handleCouponUsed}
          >
            {login ? renderCouponCards() : <GoToLogin />}
          </MobileCouponSection>
        </div>

        {/* ----------데스크탑 쿠폰-------------- */}
        <div className="hidden md:block">
          <DesktopCouponSection
            coupons={coupons}
            login={login}
            setLogin={setLogin}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            modalStates={modalStates}
            handleCouponUsed={handleCouponUsed}
          >
            {login ? renderCouponCards() : <GoToLogin />}
          </DesktopCouponSection>
        </div>
      </div>
    </>
  );
};

const SearchBar = () => {
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const [isFocused, setIsFocused] = useState(false); // 검색창 포커스 여부
  const inputRef = useRef(); // 검색창

  /** handleInputChange': 검색창의 값이 변경될 때마다 호출되는 함수 */
  const handleInputChange = (e) => setInputText(e.target.value);

  /** 'handleSearch': 검색 버튼 클릭 시 API 요청보내는 함수 */
  const handleSearch = (e) => {
    e.preventDefault();

            {/* 쿠폰 영역 */}

            {coupons.map((coupon, index) => (
              <CouponCard
                key={coupon.id}
                storeImg={BakeryImg}
                storeArea={`성수`}
                storeName={`베리베리스트로베리케이크 전문점 ${coupon.id}`}
                promotionText={`닐라닐라바닐라 조각케이크 무료증정`}
                couponDate={`2023.12.01 ~ 2023.12.31`}
                couponStoreImg={CouponImg}
                isCoupon={coupon}
                handleCouponUsed={() => handleCouponUsed(coupon.id)}
                handleOpenModal={(modalName) =>
                  handleOpenModal(modalName, index)
                }
                handleCloseModal={() => handleCloseModal(index)}
                modalStates={modalStates[index]}
              />
            ))}
          </div>
        ) : (
          <>
            {/* 로그인 전 모바일 화면 */}
            <div className="flex flex-col items-center mt-20 break-words">
              <h1 className="mb-4 text-xl font-semibold text-custom-pink">
                로그인 후 이용하실 수 있습니다
              </h1>
              <p className="mb-8 text-xs text-custom-gray-200">
                오늘도 또또가에서 혜택을 받아보세요!
              </p>
              <button
                className="w-4/6 py-2 text-sm text-white rounded bg-custom-pink max-w-60"
                onClick={handleTest}
              >
                로그인 하기
              </button>
            </div>
          </>
        )}
      </div>

const DesktopCouponSection = ({
  coupons,
  login,
  setLogin,
  children,
}) => {
  // 클릭 이벤트 핸들러 추가
  const toggleLogin = () => setLogin(!login);

  return (
    <>
      {/* 전체 페이지 설정 */}
      <div className="hidden px-24 pt-16 pb-8 font-inter md:block">
        {/* 쿠폰함 및 검색창 */}
        <div className="flex items-end mb-7">
          <div
            className="text-2xl font-semibold mr-9 border-b-4 border-[#FF7A00]"
            onClick={toggleLogin}
          >
            쿠폰함
          </div>
            {login ? <SearchBar /> : null}
        </div>

        {/* 쿠폰 영역 전체 패딩*/}
        <div
          className={`border-t border-[#D9D9D9] text-xl ${
            coupons.length === 0 || !login
              ? "flex flex-col justify-center items-center h-screen"
              : "pt-9"
          }`}
        >
          {/* 각 쿠폰들*/}

          {login ? (
            coupons.length === 0 ? (
              <p className="text-lg font-normal text-custom-gray-200">
                또또가 리뷰를 등록하고 쿠폰을 받아보세요.
              </p>
            ) : (
              children
            )
          ) : (
            <GoToLogin />
          )}
        </div>
      </div>
    </>
  );
};

const MobileCouponSection = ({
  coupons,
  login,
  children,
}) => {
  return (
    <>
      {/* 쿠폰함 타이틀 헤더 영역 */}
      {/* <MobileHeader title={"쿠폰함"} /> */}
      <div className="md:hidden h-full pb-20">
        {login ? (
          <div className="relative pt-8">
            {/* 검색 영역 */}
            <div className="flex justify-center mb-10">
              <SearchBar />
            </div>
            {/* 쿠폰 영역 */}

            {children}
          </div>
        ) : (
          <GoToLogin />
        )}
      </div>
    </>
  );
};

export default Coupon;
