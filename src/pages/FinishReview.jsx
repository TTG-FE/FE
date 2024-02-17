import React, { useEffect, useState } from "react";
import axios from "axios";

export const FinishReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      const token =
        "naver_AAAAO6jH0LVSEjsLLPyr5_cXHRCtIS7iRplINNn4iO-dOUnQrJ3kc7mmU3NW8z80UE7zJVkYRMAZAsfo2HIC99ssweA";

      try {
        const response = await axios.get("members/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = response.data;
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.result);
        const fetchResult = response.data.result;
        setReviewData(fetchResult);
        console.log(reviewData);
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
    <div className="w-[14.4125rem] h-[20.1875rem] mb-[8.65rem] p-[0.44rem] rounded-[0.19538rem] shadow-[0_0_6.253px_0_rgba(0,0,0,0.25)]">
      {reviewData.map((review) => (
        <div key={review.reviewId}>
          <div
            className="rounded-[0.19538rem] mb-[0.95rem] w-[13.36881rem] h-[11.23306rem] bg-[#FFEDED]"
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
