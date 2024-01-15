import { useState } from "react";

/** 모달창
 * 'isModalVisible' 상태 변수는 모달이 켜져있는지 꺼져있는지를 의미
 * 'isRegionSelected' 상태 변수는 모달 종류를 의미(지역 선택, 메뉴 선택)
 */
const Modal = () => {
  const [isRegionSelected, setIsRegionSelected] = useState(true); // 모달 종류 선택(지역, 메뉴)
  const [isModalVisible, setIsModalVisible] = useState(true); // 모달 가시성 상태 관리

  /** 모달 닫기 함수 */
  const closeModal = () => setIsModalVisible(false);

  /** 모달 클릭 시 이벤트 핸들링 함수 */
  const handleModalClick = (e) => {
    e.stopPropagation(); // 모달 영역 내에서의 클릭 이벤트 전파 차단
  };
  return (
    <>
      {/* 모달이 가시적인 상태일 때만 렌더링 */}
      {isModalVisible && (
        <div
          className={
            "flex justify-center absolute top-0 bottom-0 left-0 right-0 bg-[rgba(216, 216, 216, 0.50)] z-50"
          }
          style={{
            backdropFilter: "blur(50px)",
          }}
          onClick={closeModal}
        >
          {/* 모달 내용 영역 */}
          <div
            className="absolute top-28 w-[47rem] h-[52rem] bg-white shadow-custom-box-shadow rounded-xl"
            onClick={handleModalClick}
          >
            {/* 모달 종류를 어떤 것을 선택되었는지에 따라 다른 컴포넌트 렌더링 */}
            {isRegionSelected ? (
              // 지역 선택
              <RegionSelector closeModal={closeModal} />
            ) : (
              // 메뉴 선택
              <MenuSelector closeModal={closeModal} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

/** 메뉴 선택 모달창 */
const MenuSelector = ({ closeModal }) => {
  // 메뉴 이름 리스트
  const menus = [
    { id: 1, label: "치킨" },
    { id: 2, label: "버거" },
    { id: 3, label: "한식" },
    { id: 4, label: "일식/돈까스" },
    { id: 5, label: "족발/보쌈" },
    { id: 6, label: "중국집" },
    { id: 7, label: "분식" },
    { id: 8, label: "아시안" },
    { id: 9, label: "피자/양식" },
    { id: 10, label: "카페/디저트" },
    { id: 11, label: "샐러드" },
    { id: 12, label: "도시락/죽" },
    { id: 13, label: "찜/탕" },
    { id: 14, label: "고기/구이" },
    { id: 15, label: "회/초밥" },
    { id: 16, label: "샌드위치" },
  ];
  return (
    <div className="p-12">
      <div className="flex justify-between">
        <p className="text-[1.37rem] text-[#000000B2] my-4 cursor-pointer">
          메뉴
        </p>
        <button onClick={closeModal} className="text-custom-pink">
          확인
        </button>
      </div>
      <div className="w-full h-0.5 bg-[#0000001A]"></div>

      {/* 메뉴 선택 리스트 */}
      <ul className="flex flex-wrap">
        {menus.map((menu) => (
          <li className="w-1/4 cursor-pointer" key={menu.id}>
            <div className="px-8 py-5">
              <figure className="pb-[100%] h-0 bg-gray-200 bg-center bg-no-repeat bg-cover ">
                {/* 높이를 0, 바닥 패딩을 100프로로 주어서 정사각형을 만듬 */}
                <img src="" alt={`${menu.label}`} className="hidden"></img>
              </figure>
              <p className="text-[#000000B2] text-center text-lg">
                {menu.label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

/** 지역 선택 모달창 */
const RegionSelector = ({ closeModal }) => {
  // 지역 이름 리스트
  const cities = [
    {
      id: 1,
      label: "서울",
      towns: [
        "전체",
        "강남/논현",
        "강동/천호",
        "강서/목동",
        "건대/왕십리",
        "관악/신림",
        "교대/사당",
        "노원/강북",
        "명동/이태원",
        "삼성/선릉",
        "송파/잠실",
        "수유/동대문",
        "신촌/이대",
        "압구정/신사",
        "여의도/영등포",
        "종로/대학로",
        "홍대/마포",
      ],
    },
    {
      id: 2,
      label: "경기-인천",
      towns: [
        "전체",
        "일산/파주",
        "용인/분당/수원",
        "인천/부천",
        "남양주/구리/하남",
        "안양/안산/광명",
      ],
    },
    {
      id: 3,
      label: "대전-충청",
      towns: ["전체", "대전", "춘천"],
    },
    {
      id: 4,
      label: "대구-경북",
      towns: ["전체", "대구", "경북"],
    },
    {
      id: 5,
      label: "부산-경남",
      towns: ["전체", "부산", "경남"],
    },
    {
      id: 6,
      label: "광주-전라",
      towns: ["전체", "광주", "전라"],
    },
    {
      id: 7,
      label: "다른지역",
      towns: ["전체", "강원", "제주"],
    },
  ];
  return (
    <div className="p-12">
      <div className="flex justify-between px-4">
        <p className="text-[1.37rem] text-[#000000B2] my-4 cursor-pointer">
          전체 지역
        </p>
        <button onClick={closeModal} className="text-custom-pink">
          확인
        </button>
      </div>

      {/* 지역 선택 리스트 */}
      <ul className="flex flex-col">
        {cities.map((city) => (
          <>
            <div className="w-full h-0.5 bg-[#0000001A]"></div>
            <li key={city.id} className="flex cursor-pointer">
              <div className="w-1/5 p-4 text-lg text-[#000000B2]">
                {city.label}
              </div>
              <ul className="flex flex-wrap w-4/5">
                {city.towns.map((town, i) => (
                  <li
                    className="w-1/4 p-4 text-sm text-[#00000080] cursor-pointer"
                    key={i}
                  >
                    {town}
                  </li>
                ))}
              </ul>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
