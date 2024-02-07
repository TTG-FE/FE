import StoreCard from "../../components/StoreCard";
import SelectModal from "../../components/SelectModal";

const Menu = ({ selectModal, setSelectModal }) => {
  // 상점 리스트 객체
  const restaurants = [
    {
      id: 1,
      text: "[성신여대입구] 귀여운 용용이",
      menu: "용용이 파스타 + 음료 1용용이 파스타 + 음료 1용용이 파스타 + 음료 1용용이 파스타 + 음료 1용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 2,
      text: "[성신여대입구] 귀여운 용용이 소시지 볼 사람? 이거 진짜 귀엽고 맛있음거 진짜 귀엽고 맛있음거 진짜 귀엽고 맛있음거 진짜 귀엽고 맛있음거 진짜 귀엽고 맛있음",
      menu: "용용이 파스타 + 음료 1",
      reviewCount: 654,
    },
    {
      id: 3,
      text: "[성신여",
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
    <div className={`px-16 relative`}>
      {/* 모달창 */}
      <SelectModal selectModal={selectModal} setSelectModal={setSelectModal} />
      <div>
        {/* 상점 필터명 */}
        <div className="flex items-center justify-between px-6 py-12">
          <div>
            <div className="mb-4 text-2xl font-semibold">
              메뉴 &gt;{" "}
              <span className="border-b-4 border-custom-yellow">전체</span>
            </div>
            <p className="text-sm font-normal text-custom-gray-100">
              전국 각지의 또또가 상점을 만나보세요!
            </p>
          </div>
        </div>

        {/* 상점 카드 리스트 */}
        <ul className="flex flex-wrap ">
          {restaurants.map((item) => (
            <li className="w-1/5 p-4" key={item.id}>
              <StoreCard item={item} />
            </li>
          ))}
        </ul>
        {/* infiniteScroll 감지할 요소 */}
        <div className="p-6"></div>
      </div>
    </div>
  );
};

export default Menu;
