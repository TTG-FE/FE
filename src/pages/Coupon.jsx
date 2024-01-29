import React, { useState } from "react";

// Asset
import BakeryImg from "../assets/bakery.png";
import CouponImg from "../assets/bakery-sm.png";
import QrCodeImg from "../assets/qr-code-line.svg";
import arrowRightImg from "../assets/arrow_right_light.svg";

// Component
import CouponCard from "../components/CouponCard";

const Coupon = () => {
  // 쿠폰 사용 여부
  const [login, setLogin] = useState(false);
  const [coupons, setCoupons] = useState([
    { id: 1, used: false },
    { id: 2, used: false },
    { id: 3, used: false },
  ]);

  const handleTest = () => {
    setLogin(true);
    console.log(login);
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
      {/* 전체 페이지 설정 */}
      <div className="px-24 pt-16 font-inter">
        {/* 쿠폰함 및 검색창 */}
        <div className="flex mb-7">
          <div className="text-2xl font-semibold mr-9 border-b-4 border-[#FF7A00]">
            쿠폰함
          </div>
          <input
            type="text"
            placeholder="쿠폰 검색하기"
            className="text-xs border-b border-[#D9D9D9] w-1/4"
          />
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
              <p className="text-custom-gray-200 text-lg font-normal">
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
              <p className="text-custom-gray-200 text-lg font-normal ">
                지금 바로 로그인하고
              </p>
              <p className="text-custom-gray-200 text-lg mb-10 font-bold">
                또또가의 더 많은 기능을 사용해보세요.
              </p>
              <button
                className="bg-custom-pink w-1/3 text-white rounded-2xl h-16 text-2xl px-12 flex flex-row items-center justify-center"
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

export default Coupon;
