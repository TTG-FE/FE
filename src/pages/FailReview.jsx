import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContextProvider";

import axios from "axios";
import { Link } from "react-router-dom";

const FailReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);
  const { token } = useContext(LoginContext);

  useEffect(() => {
    const fetchReviewData = async () => {
      // const token =
      //   "naver_AAAAPH44OZx46Q9m_c1a99N3AMfbiDr1GriLr2nBBc3nwwO29fMGCm4pCP8i35QmYPnz6TepZriTu7-_Sa4ttvuXHlE";

      try {
        const response = await axios.get("members/profile", {
          headers: {
            Authorization: token,
          },
        });

        const result = response.data;
        // console.log(response);
        // console.log(response.data);
        console.log(response.data.result);
        const fetchResult = response.data.result;
        setReviewData(fetchResult);
        //console.log(reviewData);
        if (result.isSuccess) {
          setReviewData(
            result.result.reviewDtos.filter(
              (review) => review.status === "FAIL"
            )
          );
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("API 호출 오류");
      }
    };
    fetchReviewData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!reviewData || reviewData.length === 0) {
    return (
      <div className="text-[#898989] text=[1.125rem] text-center font-['Inter'] font-semibold">
        아직 등록된 탈락 리뷰가 없어요.
      </div>
    );
  }

  return (
    <div>
      {reviewData.map((review) => (
        <div
          key={review.reviewId}
          className="flex justify-between border-b pb-[1rem] border-[#D9D9D9]"
        >
          <div>
            <div className="mb-[1.44rem] font=['Inter'] text=[1.125rem]">
              {review.storeDto.name}
            </div>
            <div className="text=[1rem] font=['Inter']">{review.reason}</div>
          </div>
          <div>
            <div className="text=[1rem] font=['Inter'] mb-[1.19rem]">
              신청일자: {review.applyDate}
            </div>
            <Link to={`/store/${review.storeDto.couponDto.storeId}`}>
              <button className="w-[9.8125rem] font=['Inter'] h-[2.4375rem] border rounded-[0.44rem] border-[#FF0069] text-[#FF0069]">
                다시 신청하기
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FailReview;
