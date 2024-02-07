import React, { useRef, useState } from "react";

// Asset
import BakeryImg from "../assets/bakery.png";
import CouponImg from "../assets/bakery-sm.png";
import arrowRightImg from "../assets/arrow_right_light.svg";
import phoneArrowLeftIcon from "../assets/phone_Arrow_right.svg";
import { ReactComponent as SearchIcon } from "./../assets/searchIcon.svg";

// Component
import CouponCard from "../components/CouponCard";
import { Link } from "react-router-dom";

const Coupon = () => {
  // 쿠폰 사용 여부
  const [login, setLogin] = useState(false);
  const [coupons, setCoupons] = useState([
    { id: 1, used: false },
    { id: 2, used: false },
    { id: 3, used: false },
  ]);

  // 임시 로그인
  const handleTest = () => {
    setLogin(true);
  };

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

  return (
    <>
      {/* ---------------모바일 쿠폰------------------- */}
      <div className="h-full pb-20 md:hidden">
        {login ? (
          <div className="relative pt-8">
            {/* 검색 영역 */}
            <div className="flex justify-center mb-10">
              <SearchBar />
            </div>

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

      {/* ----------데스크탑 쿠폰-------------- */}
      {/* 전체 페이지 설정 */}
      <div className="hidden px-24 pt-16 pb-8 font-inter md:block">
        {/* 쿠폰함 및 검색창 */}
        <div className="flex items-end mb-7">
          <div className="text-2xl font-semibold mr-9 border-b-4 border-[#FF7A00]">
            쿠폰함
          </div>
          <div className="h-full">
            <SearchBar />
          </div>
        </div>

        {/* 쿠폰 영역 전체 패딩*/}
        <div
          className={`border-t border-[#D9D9D9] text-xl ${
            coupons.length === 0 || !login
              ? "flex flex-col justify-center items-center absolute inset-0"
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
              coupons.map((coupon, index) => (
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
              ))
            )
          ) : (
            <>
              <p className="text-lg font-normal text-custom-gray-200 ">
                지금 바로 로그인하고
              </p>
              <p className="mb-10 text-lg font-bold text-custom-gray-200">
                또또가의 더 많은 기능을 사용해보세요.
              </p>
              <button
                className="flex flex-row items-center justify-center w-1/3 h-16 px-12 text-2xl text-white bg-custom-pink rounded-2xl"
                onClick={handleTest}
              >
                <img src={arrowRightImg} className="mr-2" alt="" />
                로그인 하러가기
              </button>
            </>
          )}
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

    // 입력 텍스트가 비어있다면 검색 입력창에 다시 포커스를 맞춤
    if (inputText === "") {
      inputRef.current.focus();
    }
    // TODO: 아래에 'inputText'를 기반으로 하는 검색을 위한 API 요청을 로직을 구현하세요.
  };

  return (
    // 검색 폼 컴포넌트
    <form className="flex w-[300px]" onSubmit={handleSearch}>
      {/* 입력창 */}
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        placeholder={"찾고싶은 쿠폰을 검색해보세요!"}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 h-6 text-xs border-b outline-none ps-2 focus:border-custom-pink"
      />
      {/* 검색버튼 */}
      <button
        type="submit"
        className="relative outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <SearchIcon
          stroke={isFocused ? "#FF0069" : "#D9D9D9"}
          className="absolute top-0 right-0 w-5 h-5"
        />
      </button>
    </form>
  );
};

export default Coupon;
