import Top from "./Top";
import Hot from "./Hot";
import Modal from "../../../components/Home/Modal";
import Review from "./Review";
import BannerImg from "../../../assets/images/banner.png";
const Main = () => {
  return (
    /* 전체 페이지 크기 설정 */

    <div className={` font-inter relative`}>
      {/* 모달창 */}
      <Modal />
      <div>
        {/* TOP 15 또또가 */}
        <Top />
        {/* Hot */}
        <Hot />
        {/* 또또가 리뷰 */}
        <Review />
        {/* 배너 */}
        <div
          className="w-full h-[11.25rem] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${BannerImg})` }}
        >
          <img src={`${BannerImg}`} alt="banner" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Main;
