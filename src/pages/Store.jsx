import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";

// ASSETS
import storeFoodImage from "../assets/store-food.jpg";
import { ReactComponent as HeartIcon } from "../assets/storeHeartIcon.svg";
import storeMapImage from "../assets/store-map.jpg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// 60px -> 14rem = 56px 로 함 15가 없더라

function Store() {
  const { store_id } = useParams();

  const [login, setLogin] = useState(!false);

  // 모달창의 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 현재 상점의 관심 여부
  const [isLiked, setIsLiked] = useState(false);

  // 리뷰 등록 이메일 유효성 검사
  const [reviewUrl, setReviewUrl] = useState("");

  // 쿠폰 발행 여부
  const [isCouponUsed, setIsCouponUsed] = useState(false);

  const [storeInfo, setStoreInfo] = useState([]);

  useEffect(() => {
    const fetchStoreInfo = async () => {
      try {
        const response = await axios.get(
          `stores/${store_id}`
        );
        const fetchedStoreInfo = response.data.result;
        setStoreInfo(fetchedStoreInfo);
      } catch (error) {
        console.error("Error fetching StoreInfo:", error);
      }
    };
    fetchStoreInfo();
  }, []);


  // const url = 

  // axios
  //   .post(url, data, {
  //     headers: {
  //       Authorization: `Bearer YOUR_TOKEN_HERE`,
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // 모달창 열기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달창 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 하트 이벤트
  const handleToggleHeart = () => {
    setIsLiked((prev) => !prev);
  };

  // 리뷰 페이지 주소 입력 시 상태 업데이트
  const handleReviewUrlChange = (event) => {
    setReviewUrl(event.target.value);
  };

  return (
    /* 전체 페이지 크기 설정 */
    <div className={`w-xl px-36 font-inter relative`}>
      {/* 양쪽을 포함하는 div 설정 */}
      <main className="flex">
        {/* 왼쪽 상점 관련 안내 */}
        <StoreLeftSection storeInfo={storeInfo} />

        {/* 오른쪽 상점 쿠폰 관련 안내 */}
        <StoreRightSection
          login={login}
          storeInfo={storeInfo}
          handleToggleHeart={handleToggleHeart}
          isLiked={isLiked}
          isCouponUsed={isCouponUsed}
          handleOpenModal={handleOpenModal}
        />
      </main>

      {/* 모달 컴포넌트 사용 */}
      <StoreModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleReviewUrlChange={handleReviewUrlChange}
        reviewUrl={reviewUrl}
        setIsCouponUsed={setIsCouponUsed}
      />
    </div>
  );
}

const StoreLeftSection = ({storeInfo}) => {
  return (
    <div className="w-1/2 mt-9 pr-14 border-r-2 border-[#f5f5f5] break-words">
      <div className="w-full overflow-hidden mb-16 v">
        <img
          src={storeInfo.storeImage}
          alt="매장 음식 이미지"
          className="w-full rounded-3xl object-cover"
        />
      </div>
      {/* 안내 문구들 */}
      <div className="">
        {/* 이용 안내 */}
        <section className="mb-20">
          <div className="text-[#FF0069] font-semibold text-xl mb-4">
            이용 안내
          </div>
          <div className="ml-4 text-lg">
            또또가 블로그 리뷰 선정 안내
            <ol className="list-decimal ml-4 ">
              <li>성의 없는 리뷰는 또또가 대상에서 제외됩니다.</li>
              <ul className="list-disc">
                <li>진심이 느껴지지 않는 리뷰,</li>
                <li>몇 가지 단어만을 복사 붙여넣기한 글,</li>
                <li>직접 방문했다고 판단하기 어려운 경우,</li>
                <li>타인의 글을 복사 붙여넣기한 경우</li>
              </ul>
              <br />
              <li>네이버 블로그 내돈내산 인증</li>
              <ul className="list-disc">
                <li>
                  영수증 리뷰로 내돈내산 인증을 하지 않은 경우 또또가 대상에서
                  제한 될 수 있습니다.
                </li>
              </ul>
              <br />
              <li>해시태그 [#강북맛집 #곱창맛집 #강북곱창]을 입력해주세요</li>
              <ul className="list-disc">
                <li>
                  글 작성 시 해시태그를 달지 않은 경우 신청 전 추가해주세요
                </li>
              </ul>
              <br />
              <li>리뷰가 확정 된 이후에 1개월 이상 유지 바랍니다.</li>
              <ul className="list-disc">
                <li>
                  글이 기간동안 유지되지 않은 것이 확인 될 경우 다음 신청에
                  불이익을 받을 수 있습니다.
                </li>
                <li>
                  글의 최대 길이는 이정도! 이 이상부터는 다음 줄로 넘어가게
                  해주세요! 동해물과 백두산이 마르고닳도록 하느님이 보우하사
                  우리나라만세
                </li>
              </ul>
            </ol>
          </div>
        </section>

        {/* 영업 안내 */}
        <section className="mb-20">
          <div className="text-[#FF0069] font-semibold text-xl mb-4">
            영업 안내
          </div>
          <div className="ml-4 text-lg">
            <ul>
              {storeInfo.saleInfo}
              {/* <li>영업시간: </li>
              <li>또또가 쿠폰 이용 가능: 평일</li>
              <li>휴무일:</li>
              <br />
              <li>대기 인원이 많은 식당으로 예약 방문 필수입니다.</li> */}
            </ul>
          </div>
        </section>

        {/* 가게 장소 */}
        <section className="mb-20">
          <div className="text-[#FF0069] font-semibold text-xl mb-4">
            가게 장소
          </div>
          <div className="ml-4 text-lg">
            <ul className="mb-4">
              <li>
                {storeInfo.address}/{storeInfo.placeInfo}
              </li>
            </ul>
            <img src={storeMapImage} alt="가게 지도 위치" />
          </div>
        </section>

        {/* 협찬문구 */}
        <section className="mb-20">
          <div className="text-[#FF0069] font-semibold text-xl mb-4">
            협찬문구
          </div>
          <div className="ml-4 text-lg">
            <ol className="ml-4 list-decimal">
              {storeInfo.sponInfo}
              {/* <li>블로그 포스팅 발행 시 협찬문구 작성법</li>
              <ul className="mb-4 list-disc">
                <li>
                  상세설명 url :
                  <a
                    href="https://blog.naver.com/yonggini84/222163678341"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://blog.naver.com/yonggini84/222163678341 (새로운
                    D.I.A+ 로직에 대응)
                  </a>
                  <br />
                  ★협찬문구는 네이버 공정위 문구 url 연결
                </li>

                <li>
                  <a
                    href="https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5a5ff364e96bc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ogqmarket.naver.com/artworks/sticker/detail?artworkId=5a5ff364e96bc
                    (네이버에서 판매하는 공정위 문구 사용하세요. 1,500원에
                    무제한 사용 가능)
                  </a>
                </li>
              </ul> */}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

const StoreRightSection = ({
  login,
  storeInfo,
  handleToggleHeart,
  isLiked,
  isCouponUsed,
  handleOpenModal,
}) => {

  // 현재 날짜를 나타내는 새 Date 객체 생성
  const now = new Date();

  // 현재 날짜에 5일 추가
  now.setDate(now.getDate() + 5);

  const expirationPeriod = now.toISOString().split("T")[0];

  return (
    <div className="w-1/2 pl-16">
      <div className="mt-14 w-full sticky top-10">
        {/* 데이터를 받아와야하니 props로 변경하기? */}
        <div className="text-3xl font-semibold mb-5">
          {/* [강북] 또먹고싶어 곱창 */}
          {storeInfo.title}
        </div>
        <div className="text-2xl font-normal	">
          {/* 또먹고싶어 곱창을 리뷰하고 주먹밥+캔음료 받으세요! */}
          {storeInfo.name} 리뷰하고 {storeInfo.subTitle}
        </div>
        <ul className="flex h-24 items-center border-b">
          <li className="w-32 h-9 text-base text-center text-[#FF0069] leading-8  bg-[#FFEDED] rounded-lg mr-2.5	">
            {/* 서울 */}
            {storeInfo.regionName}
          </li>
          <li className="w-32 h-9 text-base text-center text-[#FF0069] leading-8  bg-[#FFEDED] rounded-lg mr-2.5	">
            {/* 한식 */}
            {storeInfo.menuName}
          </li>
        </ul>
        <div className="flex py-8 border-b text-lg">
          <div className="text-lg text-[#000000] opacity-30 w-1/4 font-semibold	">
            제공내역
          </div>
          <div className="text-[#404040]">
            {/* 주먹밥1 , 캔음료 1(사이다,콜라 중 택 1) */}
            {storeInfo.serviceInfo}
          </div>
        </div>
        <div className="flex py-8 border-b text-lg">
          <div className="text-lg text-[#000000] opacity-30 w-1/4 font-semibold	">
            또또가 기간
          </div>
          {isCouponUsed ? (
            <div className="text-[#404040]">
              {expirationPeriod} 까지 사용 가능합니다!
            </div>
          ) : (
            <div className="text-[#404040]">
              {/* 리뷰 게시일 기준 60일 이상  */}
              리뷰 게시일 기준 {storeInfo.reviewSpan}일 이상
            </div>
          )}
        </div>

        {login ? (
          <>
            <div className="flex py-8 border-b">
              <div className="text-lg text-[#000000] opacity-30 w-1/4 font-semibold	">
                관심상점
              </div>
              <button onClick={handleToggleHeart} className="flex">
                <HeartIcon
                  stroke={isLiked ? "#FF0069" : "black"}
                  strokeOpacity={isLiked ? "1" : "0.3"}
                  fill={isLiked ? "#FF0069" : "none"}
                />
              </button>
            </div>
            <button
              className={` w-full h-14 mt-8 text-white rounded text-xl ${
                isCouponUsed ? "bg-[#D9D9D9] text-[#545454]" : "bg-[#FF0069]"
              }`}
              onClick={handleOpenModal}
              disabled={isCouponUsed}
            >
              {isCouponUsed
                ? "또또가 신청 완료!"
                : "리뷰 등록하고 또또가 쿠폰 받기"}
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button
                className={
                  "w-full h-14 mt-8 text-white rounded text-xl bg-[#FF0069]"
                }
              >
                로그인 하러가기
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const StoreModal = ({
  isModalOpen,
  handleCloseModal,
  handleReviewUrlChange,
  reviewUrl,
  setIsCouponUsed,
}) => {
  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <div className="px-12 py-7 text-lg">
        <div className="text-2xl mb-9">내 리뷰 등록</div>
        <input
          type="text"
          placeholder="http:// 또는 https://를 포함한 정확한 리뷰 페이지 주소를 입력해주세요."
          className="w-full px-4 py-5 mb-24 border-solid border border-[#545454] rounded-lg"
          onChange={handleReviewUrlChange}
        />
        <div className="h-64">
          <h2 className="text-[#FF0069] text-lg font-bold">등록 시 유의사항</h2>
          <br />
          <ul className="list-disc ml-7 text-[#898989]">
            <li>
              해당 상점에 대한 리뷰를 작성한 페이지의 링크를 정확히
              입력해주세요.
            </li>
            <li>페이지를 전체 공개, 검색 허용으로 적용해주세요.</li>
            <li>
              부적절한 SNS페이지로 판단되는 경우 등록이 어려울 수 있습니다.
            </li>
            <li>
              방문자 수 조작 및 불법 프로그램 사용 등 어뷰징 행위 적발 시,
              패널티가 부여됩니다.
            </li>
            <li>
              페이지 등록에 어려움이 있으시다면 고객센터로 문의에 남겨주세요.
            </li>
          </ul>
        </div>

        <button
          className={`w-full h-16 rounded-lg ${
            reviewUrl.startsWith("http://") || reviewUrl.startsWith("https://")
              ? "bg-[#FF0069] text-white"
              : "bg-[#D9D9D9] cursor-not-allowed"
          }`}
          disabled={
            !(
              reviewUrl.startsWith("http://") ||
              reviewUrl.startsWith("https://")
            )
          }
          onClick={() => {
            setIsCouponUsed(true);
            handleCloseModal();
          }}
        >
          등록하기
        </button>
      </div>
    </Modal>
  );
};

export default Store;
