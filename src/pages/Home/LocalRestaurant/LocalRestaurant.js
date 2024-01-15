import RestaurantCard from "../../../components/Home/RestaurantCard";
const LocalRestaurant = () => {
  // 지역 별 상점 리스트 객체
  const localRestaurants = [
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
  return (
    <div className="mb-[9.37rem]">
      {/* 지역 > 전체 */}
      {/* 전국 각지의 또또가 상점을 만나보세요! */}
      <div className="px-6 py-12">
        <div className="mb-4 text-2xl font-semibold leading-normal">
          지역 <em>&gt;</em>{" "}
          <span className="relative">
            전체
            <div className="absolute right-0 w-12 h-1 -bottom-1 bg-custom-yellow"></div>
          </span>
        </div>
        <p className="text-sm font-normal leading-normal text-custom-gray-100">
          전국 각지의 또또가 상점을 만나보세요!
        </p>
      </div>

      {/* 카드 리스트 */}
      <ul className="flex flex-wrap w-full mb-[2.69rem]">
        {localRestaurants.map((item) => (
          <li className="w-1/5 p-4" key={item.id}>
            <RestaurantCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalRestaurant;
