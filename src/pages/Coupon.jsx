import React, { useContext, useEffect, useRef, useState } from "react";

// Asset
import { ReactComponent as SearchIcon } from "./../assets/searchIcon.svg";

// Component
import CouponCard from "../components/CouponCard";
import { Link } from "react-router-dom";
import GoToLogin from "../components/GoToLogin";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContextProvider";
import test from "../assets/images/Test.png";

const Coupon = () => {
  // 쿠폰 사용 여부
  const { isLogin, token } = useContext(LoginContext);

  // 검색 처리

  const [isLoading, setLoading] = useState(true); // 로딩 여부

  const [searchTerm, setSearchTerm] = useState(""); // 검색 단어 저장

  const [coupons, setCoupons] = useState([]); // 쿠폰 데이터 저장

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLogin) {
          const response = await axios.get(`coupons`, {
            headers: {
              Authorization: token,
            },
          });
          setCoupons(response.data.result);
          // console.log("쿠폰 GET 요청 성공");
        }
      } catch (error) {
        console.error("Error fetching StoreInfo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isLogin]);

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 사용한 쿠폰 처리
  const handleCouponUsed = (couponId) => {
    // 서버에 쿠폰 사용 정보 업데이트
    putCouponUsed(couponId)
      .then(() => {
        // 서버 업데이트 성공 후 클라이언트 상태 업데이트
        // 해당 쿠폰을 사용했다고 true로 변경
        setCoupons((prevCoupons) => {
          const updatedCoupons = prevCoupons.map((coupon) =>
            coupon.id === couponId ? { ...coupon, useYn: "N" } : coupon
          );

          // 사용한 쿠폰을 배열의 끝으로 이동
          const usedCouponIndex = updatedCoupons.findIndex(
            (coupon) => coupon.id === couponId && coupon.useYn === "N"
          );

          if (usedCouponIndex !== -1) {
            const usedCoupon = updatedCoupons.splice(usedCouponIndex, 1)[0];
            updatedCoupons.push(usedCoupon);
          }

          return updatedCoupons;
        });
      })
      .catch((error) => {
        console.error("Error updating coupon status:", error);
      });
  };

  // put 호출
  const putCouponUsed = async (couponId) => {
    try {
      if (isLogin) {
        const response = await axios.put(`coupons/${couponId}/check`, null, {
          headers: {
            Authorization: token,
          },
        });
        // console.log("쿠폰 PUT 요청 성공");
      }
    } catch (error) {
      console.error("Error fetching StoreInfo:", error);
    }
  };

  // 모달창 열기
  const handleOpenModal = (couponId) => {
    setActiveModalCouponId(couponId);
  };

  // 모달창 닫기
  const handleCloseModal = () => {
    setActiveModalCouponId(null);
  };

  // 현재 열린 모달의 쿠폰 ID 상태
  const [activeModalCouponId, setActiveModalCouponId] = useState(null);

  const renderCouponCards = (coupons) => {
    return coupons.map((coupon) => (
      <CouponCard
        key={coupon.id}
        couponData={coupon}
        isModalOpen={activeModalCouponId === coupon.id}
        handleCouponUsed={() => handleCouponUsed(coupon.id)}
        handleOpenModal={() => handleOpenModal(coupon.id)}
        handleCloseModal={handleCloseModal}
      />
    ));
  };

  return isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <img className="animate-spin w-14 h-14" src={test} alt="로딩중" />
    </div>
  ) : (
    <>
      <div className="font-inter">
        {/* ---------------모바일 쿠폰------------------- */}
        <div className="md:hidden">
          <MobileCouponSection
            coupons={filteredCoupons}
            isLogin={isLogin}
            setSearchTerm={setSearchTerm}
          >
            {isLogin ? renderCouponCards(filteredCoupons) : <GoToLogin />}
          </MobileCouponSection>
        </div>

        {/* ----------데스크탑 쿠폰-------------- */}
        <div className="hidden md:block">
          <DesktopCouponSection
            coupons={filteredCoupons}
            isLogin={isLogin}
            setSearchTerm={setSearchTerm}
          >
            {isLogin ? renderCouponCards(filteredCoupons) : <GoToLogin />}
          </DesktopCouponSection>
        </div>
      </div>
    </>
  );
};

const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState(""); // 검색 텍스트
  const [isFocused, setIsFocused] = useState(false); // 검색창 포커스 여부
  const inputRef = useRef(); // 검색창

  /** handleInputChange': 검색창의 값이 변경될 때마다 호출되는 함수 */
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    // 입력 값이 변경될 때마다 검색 실행
    if (e.target.value === "") {
      onSearch(e.target.value);
    }
  };

  // 엔터 키를 눌렀을 경우에만 onSearch 함수 호출
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };

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
        onKeyDown={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 text-xs border-b outline-none ps-2 h-6 focus:border-custom-pink"
      />
      {/* 검색버튼 */}
      <button
        type="submit"
        className="outline-none relative"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={(e) => handleKeyPress(e)}
      >
        <SearchIcon
          stroke={isFocused ? "#FF0069" : "#D9D9D9"}
          className="absolute top-0 right-0 w-5 h-5"
        />
      </button>
    </form>
  );
};

const DesktopCouponSection = ({
  coupons,
  isLogin,
  onToggleLogin,
  setSearchTerm,
  children,
}) => {
  return (
    <>
      {/* 전체 페이지 설정 */}
      <div className="px-24 pt-16 pb-8 font-inter hidden md:block flow-grow">
        {/* 쿠폰함 및 검색창 */}
        <div className="flex items-end mb-7">
          <div
            className="text-2xl font-semibold mr-9 border-b-4 border-[#FF7A00]"
            onClick={onToggleLogin}
          >
            쿠폰함
          </div>
          {isLogin ? <SearchBar onSearch={setSearchTerm} /> : null}
        </div>

        {/* 쿠폰 영역 전체 패딩*/}
        <div
          className={`text-xl ${
            coupons.length === 0 || !isLogin
              ? "flex flex-col justify-center items-center h-[600px]"
              : "pt-9"
          }`}
        >
          {/* 각 쿠폰들*/}

          {isLogin ? (
            coupons.length === 0 ? (
              <p className="text-custom-gray-200 text-lg font-normal">
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

const MobileCouponSection = ({ coupons, isLogin, setSearchTerm, children }) => {
  return (
    <>
      {/* 쿠폰함 타이틀 헤더 영역 */}
      {/* <MobileHeader title={"쿠폰함"} /> */}
      <div className="md:hidden h-full pb-20">
        {isLogin ? (
          <div className="pt-8">
            {/* 검색 영역 */}
            <div className="flex justify-center mb-10">
              <SearchBar onSearch={setSearchTerm} />
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
