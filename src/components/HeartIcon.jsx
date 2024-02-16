import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as HeartIcon } from "./../assets/images/heartIcon.svg";
import { LoginContext } from "../contexts/LoginContextProvider";

const HeartButton = ({ like, id }) => {
  const { isLogin, token } = useContext(LoginContext);
  const [isLiked, setIsLiked] = useState(like); // 관심 상점 여부
  const [isCliked, setCliked] = useState(false); // 맨 처음에 useEffect 내에서 api 호출을 하지 않기 위해 사용

  /** 하트 버튼을 누를 때마다 실행되는 함수 */
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setCliked(true);
  };

  /** isLiked가 변할 때마다 실행되는 useEffect */
  // TODO: 정확한 api 주소 연결
  useEffect(() => {
    const fetchData = async () => {
      if (!isCliked) return;
      // 하트 등록하는 경우
      if (isLiked) {
        axios
          .post(`/stores/${id}/heart`, null, {
            headers: {
              Authorization: token,
            },
          })
          .catch((error) => console.log("하트 등록 실패!"));
      } else {
        // 하트 해제하는 경우
        axios
          .delete(`/stores/${id}/heart`, {
            headers: {
              Authorization: token,
            },
          })
          .catch((error) => console.log("하트 해제 실패!"));
      }
    };
    fetchData();
  }, [isLiked]);

  return (
    <>
      {isLogin && (
        <button className="absolute top-2 right-2" onClick={handleLikeClick}>
          <HeartIcon
            stroke={isLiked ? "#FF0069" : "white"}
            fill={isLiked ? "#FF0069" : "none"}
          />
        </button>
      )}
    </>
  );
};

export default HeartButton;
