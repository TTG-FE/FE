import RestaurantCard from "../../../components/Home/RestaurantCard";
import ArrowDownIcon from "../../../components/Home/ArrowDownIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  // 메뉴 별 상점 리스트 객체
  const MenuRestaurants = [
    {
      id: 1,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 2,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 3,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 4,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 5,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 6,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 7,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 8,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 9,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 10,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 11,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 12,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 13,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 14,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 15,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 16,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 17,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 18,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false); // 현재 드롭다운의 클릭 여부를 나타낸다.

  /** 'toggleDropdown' 함수는 드롭다운 버튼을 클릭했을 때 호출되며
   * 'dropdownOpen' 상태를 반전시켜 드롭다운은 펼치고 닫을 수 있다.
   */
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    /* 전체 페이지 크기 설정 */
    <div className={`w-xl px-16 font-inter`}>
      {/* 모달창 */}
      <div>
        {/* 메뉴 > 전체 */}
        {/* 전국 각지의 또또가 상점을 만나보세요! */}
        <div className="flex items-center justify-between px-6 py-12">
          <div>
            <div className="mb-4 text-2xl font-semibold leading-normal">
              메뉴 <em>&gt;</em>{" "}
              <span className="relative">
                전체
                <div className="absolute right-0 w-12 h-1 -bottom-1 bg-custom-yellow"></div>
              </span>
            </div>
            <p className="text-sm font-normal leading-normal text-custom-gray-100">
              전국 각지의 또또가 상점을 만나보세요!
            </p>
          </div>

          {/* 드롭다운 (인기순, 추천순, 최신순) */}
          <div className="w-48 rounded-xl text-custom-gray-100">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full p-2  bg-[#F3F3F3] rounded-xl"
            >
              <span>인기순</span>
              <ArrowDownIcon dropdownOpen={dropdownOpen} />
            </button>

            {/* 드롭다운을 클릭하면 펼쳐진다 */}
            {dropdownOpen && (
              <div className="flex flex-col w-48 mt-2 bg-[#F3F3F3] rounded-xl absolute z-10">
                <button className="p-2 transition-all text-start hover:bg-custom-pink hover:text-white rounded-t-xl">
                  인기순
                </button>
                <button className="p-2 transition-all text-start hover:bg-custom-pink hover:text-white">
                  추천순
                </button>
                <button className="p-2 transition-all text-start hover:bg-custom-pink hover:text-white rounded-b-xl">
                  최신순
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 카드 리스트 */}
        <ul className="flex flex-wrap mb-[2.69rem]">
          {MenuRestaurants.map((item) => (
            <li className="w-1/5 p-4" key={item.id}>
              <RestaurantCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
