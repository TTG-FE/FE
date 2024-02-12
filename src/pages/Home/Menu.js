import { useParams } from "react-router";
import StoreCard from "../../components/StoreCard";
import SelectModal from "../../components/SelectModal";

const Menu = () => {
  const { menu_id, menu_label } = useParams(); // 파라미터로 넘어오는 메뉴 아이디

  // 상점 리스트 객체
  const stores = [
    {
      storeId: 1,
      storeTitle: "[성진이",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 2,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 3,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 4,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 5,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: true,
    },
    {
      storeId: 6,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: true,
    },
    {
      storeId: 7,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 8,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 9,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 10,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 11,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 12,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: true,
    },
    {
      storeId: 13,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: false,
    },
    {
      storeId: 14,
      storeTitle: "[성",
      serviceInfo: "용용이 파스타 + 음료 1",
      reviewCount: 654,
      heartStore: true,
    },
  ];

  return (
    /* 전체 페이지 크기 설정 */
    <div className={`px-16 relative`}>
      {/* 모달창 */}
      <SelectModal />
      <div>
        {/* 상점 필터명 */}
        <div className="flex items-center justify-between px-8 py-16">
          <div>
            <div className="mb-4 text-2xl font-semibold">
              메뉴&gt;{" "}
              <span className="border-b-4 border-custom-yellow">
                {menu_label}
              </span>
            </div>
            <p className="text-sm font-normal text-custom-gray-100">
              전국 각지의 또또가 상점을 만나보세요!
            </p>
          </div>
        </div>

        {/* 상점 카드 리스트 */}
        <ul className="flex flex-wrap ">
          {stores.map((item) => (
            <li className="w-1/5 p-4" key={item.storeId}>
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
