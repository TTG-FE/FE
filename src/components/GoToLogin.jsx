import React from 'react'
import { Link } from 'react-router-dom';
import arrowRightImg from "../assets/arrow_right_light.svg";

const GoToLogin = () => {
  return (
    <>
      {/* 데스크탑 768px */}
      <div className="hidden md:block w-[512px] text-center font-inter">
        <p className="text-custom-gray-200 text-lg font-normal ">
          지금 바로 로그인하고
        </p>
        <p className="text-custom-gray-200 text-lg mb-10 font-bold">
          또또가의 더 많은 기능을 사용해보세요.
        </p>
        <Link to="/login" className="  ">
          <button
            className="w-full h-16 text-2xl px-12 flex flex-row items-center justify-center bg-custom-pink text-white rounded-2xl "
          >
            <img src={arrowRightImg} className="mr-2" alt="" />
            로그인 하러가기
          </button>
        </Link>
      </div>

      {/* 모바일 */}
      <div className="md:hidden font-inter">
        {/* 로그인 전 모바일 화면 */}
        <div className="flex flex-col items-center mt-20 break-words">
          <h1 className="text-xl font-semibold text-custom-pink mb-4">
            로그인 후 이용하실 수 있습니다
          </h1>
          <p className="text-xs text-custom-gray-200 mb-8">
            오늘도 또또가에서 혜택을 받아보세요!
          </p>
          <Link>
            <button
              className="bg-custom-pink rounded text-white text-sm py-2 max-w-60 w-52"
            >
              로그인 하기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GoToLogin