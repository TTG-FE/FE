import React, { useEffect, useRef, useState } from "react";

// Asset
import { ReactComponent as SearchIcon } from "./../assets/searchIcon.svg";

// Component
import CouponCard from "../components/CouponCard";
import { Link } from "react-router-dom";
import GoToLogin from "../components/GoToLogin";
import axios from "axios";

const Coupon = () => {
  // 쿠폰 사용 여부
  const [login, setLogin] = useState(false);
  // const [coupons, setCoupons] = useState([
  //   {
  //     id: 21,
  //     name: "[성수] 베리베리스트로베리케이크 전문점",
  //     subtitle: "닐라닐라바닐라 조각케이크 무료증정",
  //     useYn: "N",
  //     qrCode:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/fe8b6765-7b92-4ea7-87ca-79cb74e7a59fimage.jpeg",
  //     storeImage:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/d394c8b1-a4e2-4793-8bcf-84210f7256cd%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
  //     startDate: "2024-02-04",
  //     endDate: "2024-02-04",
  //   },
  //   {
  //     id: 22,
  //     name: "name",
  //     subtitle: "subTitle2",
  //     useYn: "N",
  //     qrCode:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/3896a88d-09b8-40a9-966c-c715fdfd0ec4image.jpeg",
  //     storeImage:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/d5c859a4-9614-4e14-a9f1-2b35f143f27a%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
  //     startDate: "2024-02-04",
  //     endDate: "2024-02-04",
  //   },
  //   {
  //     id: 23,
  //     name: "name",
  //     subtitle: "subTitle3",
  //     useYn: "N",
  //     qrCode:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/50bfe1ad-4450-4c4d-b695-af3226e4e3a6image.jpeg",
  //     storeImage:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/04782f11-8f1a-4444-ab0e-7557bb09cb4f%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
  //     startDate: "2024-02-04",
  //     endDate: "2024-02-04",
  //   },
  //   {
  //     id: 24,
  //     name: "name",
  //     subtitle: "subTitle3",
  //     useYn: "N",
  //     qrCode:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/50bfe1ad-4450-4c4d-b695-af3226e4e3a6image.jpeg",
  //     storeImage:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/04782f11-8f1a-4444-ab0e-7557bb09cb4f%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
  //     startDate: "2024-02-04",
  //     endDate: "2024-02-04",
  //   },
  //   {
  //     id: 25,
  //     name: "name",
  //     subtitle: "subTitle3",
  //     useYn: "N",
  //     qrCode:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/qrImage/50bfe1ad-4450-4c4d-b695-af3226e4e3a6image.jpeg",
  //     storeImage:
  //       "https://ttottoga.s3.ap-northeast-2.amazonaws.com/storeImage/04782f11-8f1a-4444-ab0e-7557bb09cb4f%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-04-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.57.png",
  //     startDate: "2024-02-04",
  //     endDate: "2024-02-04",
  //   },
  // ]);

  // 검색 처리
  
  const [coupons, setCoupons] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoupons = coupons.filter((coupon) =>
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const token =
        "naver_AAAAOJJBFFgk1BwHCxhj3pZbwGSHmqQ4cvc_PVbBpTGxJUDsU2TKWZzdKOs4O3lx7m-yJC70jKgZ_kNVne-Xg4LDyAY";
      try {
        const response = await axios.get(`coupons`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCoupons(response.data.result);
      } catch (error) {
        console.error("Error fetching StoreInfo:", error);
      }
    }
    fetchData();
  }, [])
  
  // 사용한 쿠폰 처리
  const handleCouponUsed = (couponId) => {
    // 해당 쿠폰을 사용했다고 true로 변경
    setCoupons((prevCoupons) => {
      const updatedCoupons = prevCoupons.map((coupon) =>
        coupon.id === couponId ? { ...coupon, useYn: "Y" } : coupon
      );

      // 사용한 쿠폰을 배열의 끝으로 이동
      const usedCouponIndex = updatedCoupons.findIndex(
        (coupon) => coupon.id === couponId && coupon.useYn
      );

      if (usedCouponIndex !== -1) {
        const usedCoupon = updatedCoupons.splice(usedCouponIndex, 1)[0];
        updatedCoupons.push(usedCoupon);
      }

      return updatedCoupons;
    });
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

  return (
    <>
      <div className="font-inter">
        {/* ---------------모바일 쿠폰------------------- */}
        <div className="md:hidden">
          <MobileCouponSection
            coupons={filteredCoupons}
            login={login}
            setSearchTerm={setSearchTerm}
          >
            {login ? renderCouponCards(filteredCoupons) : <GoToLogin />}
          </MobileCouponSection>
        </div>

        {/* ----------데스크탑 쿠폰-------------- */}
        <div className="hidden md:block">
          <DesktopCouponSection
            coupons={filteredCoupons}
            login={login}
            onToggleLogin={() => {
              setLogin(!login);
              handleCloseModal();
            }}
            setSearchTerm={setSearchTerm}
          >
            {login ? renderCouponCards(filteredCoupons) : <GoToLogin />}
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
  login,
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
          {/* {login ? <SearchBar /> : null} */}
          {login ? <SearchBar onSearch={setSearchTerm} /> : null}
        </div>

        {/* 쿠폰 영역 전체 패딩*/}
        <div
          className={`text-xl ${
            coupons.length === 0 || !login
              ? "flex flex-col justify-center items-center h-[600px]"
              : "pt-9"
          }`}
        >
          {/* 각 쿠폰들*/}

          {login ? (
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

const MobileCouponSection = ({ coupons, login, setSearchTerm, children }) => {
  return (
    <>
      {/* 쿠폰함 타이틀 헤더 영역 */}
      {/* <MobileHeader title={"쿠폰함"} /> */}
      <div className="md:hidden h-full pb-20">
        {login ? (
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
