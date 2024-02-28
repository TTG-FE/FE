import userGuideImg from "./../../assets/images/userGuide.png";
const UserGuide = () => {
  return (
    <div className={`px-16`}>
      {/* 텍스트*/}
      <div className="py-16 text-4xl ">
        <p>
          <span className="opacity-50">HOW TO</span>
          <span className="font-bold text-custom-pink"> 또또가!</span>
        </p>
        <p className="opacity-50">이용방법을 알려드릴게요.</p>
      </div>

      {/* 이미지 */}
      <div className="w-full aspect-w-16 aspect-h-9">
        {/* 16:9 비율을 유지 */}
        <img
          className="object-cover w-full h-full"
          src={userGuideImg}
          alt="User Guide"
        />
      </div>
    </div>
  );
};

export default UserGuide;
