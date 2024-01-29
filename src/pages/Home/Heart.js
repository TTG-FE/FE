import RestaurantCard from "../../components/StoreCard";
const Heart = () => {
  const restaurants = [
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
    /* 전체 페이지 크기 설정 */
    <div className={`px-16 font-inter`}>
      {/* 제목 */}
      <div className="flex items-center px-6 py-12">
        <span className="mr-2 text-2xl font-semibold border-b-4 border-custom-pink">
          관심상점
        </span>
        <span className="w-6 text-xs text-center border rounded-xl text-custom-gray-400">
          ?
        </span>
      </div>

      {/* 상점 카드 리스트 */}
      <ul className="flex flex-wrap mb-[2.69rem]">
        {restaurants.map((item) => (
          <li className="w-1/5 p-4 " key={item.id}>
            <RestaurantCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Heart;
