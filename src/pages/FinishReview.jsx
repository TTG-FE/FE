import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContextProvider";

export const FinishReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);
  const { token } = useContext(LoginContext);

  useEffect(() => {
    const fetchReviewData = async () => {
      // const token =
      //   "kakao_MeB5ybynas8oyEN4kHB3dvvjO3f7PeQhyasKKwynAAABjbpzqNsp9hBbJybEWQ";

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
              (review) => review.status === "SUCCESS"
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
        아직 등록한 리뷰가 없어요.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {reviewData.map((review) => (
        <div
          className="rounded-[0.19538rem]  p-[0.44rem] shadow-[0_0_6.253px_0_rgba(0,0,0,0.25)] cursor-pointer"
          key={review.reviewId}
          onClick={() => {
            window.open(`${review.reviewLink}`, "_blank");
          }}
        >
          <div
            className="rounded-[0.19538rem]  mb-[0.95rem] w-[13.36881rem] p-[0.44rem] h-[11.23306rem] bg-[#FFEDED]"
            style={{
              backgroundImage: `url(${review.storeDto.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{ fontSize: "0.9375rem" }}
            className="text-[#545454] font=['Inter'] leading-[1.17238rem] mb-[0.5rem] w-[12.9375rem] h-[4.8125rem] font-bold"
          >
            {review.storeDto.title}
          </div>
          <div
            style={{ fontSize: "0.62525rem" }}
            className="text-[#FF0069] font=['Inter'] leading-[1.17238rem]"
          >
            {review.storeDto.name}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FinishReview;
