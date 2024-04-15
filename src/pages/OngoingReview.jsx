import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContextProvider";

import axios from "axios";

const OngoingReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);

  const {token} = useContext(LoginContext)

  useEffect(() => {
    const fetchReviewData = async () => {
      // const token =
      //   "kakao_MeB5ybynas8oyEN4kHB3dvvjO3f7PeQhyasKKwynAAABjbpzqNsp9hBbJybEWQ";

      try {
        const response = await axios.get("members/profile", {
          headers: {
            Authorization:token,
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
              (review) => review.status === "SUBSCRIPTION"
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
  }, [token]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!reviewData || reviewData.length === 0) {
    return (
      <div className="text-[#898989] text=[1.125rem] text-center font-['Inter'] font-semibold">
        아직 신청한 리뷰가 없어요.
      </div>
    );
  }
  return (
    <div className="flex space-x-[1.12rem] font-inter">
      {reviewData.map((review) => (
        <div key={review.reviewId} className="w-56">
          <div
            className="w-56rem h-56 rounded-[0.59481rem]"
            style={{
              backgroundImage: `url(${review.storeDto.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="text-[0.9375rem] text-custom-gray-100 font-bold truncate mt-2 mb-1">
            {review.storeDto.name}
          </div>
          <div className="mb-[0.58rem] text-[#FF0069] truncate text-sm">
            {review.storeDto.couponDto.content}
          </div>
          <div className="text-[0.8125rem] text-custom-gray-200 ">
            신청일자: {review.applyDate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingReview;
