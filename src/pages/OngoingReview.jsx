import React, { useEffect, useState } from "react";

const OngoingReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchReviewData = async () => {
      try {
        const response = await fetch("/members/profile");
        const result = await response.json();

        if (result.isSuccess) {
          setReviewData(result.result.reviewDtos);
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
    return <div>신청한 리뷰가 없어요.</div>;
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
            {review.couponDto.content}
          </div>
          <div className="text-[0.8125rem] text-custom-gray-200 ">
            신청일자: {review.apply_date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingReview;
