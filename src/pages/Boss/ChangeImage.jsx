import React, { useState } from "react";

export const ChangeImage = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onClose(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // 파일 저장 로직 추가하기
    if (selectedFile) {
    }
  };

  return (
    <div>
      <div className="flex w-[74.625rem] mt-[7.21rem] border-[#000000] border-b pb-[1rem]">
        <div className="mr-[1.37rem] text=[1.25rem] font-semibold">
          상점 이미지 변경
        </div>
      </div>

      <div className="flex">
        <div
          className="w-[53.4375rem] flex flex-col items-center justify-center mt-[2.37rem] h-[35.5rem] bg-[#d9d9d9] relative overflow-hidden"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {imagePreview && (
            <img
              src={imagePreview}
              alt="이미지 미리보기"
              className="w-full h-full object-cover"
            />
          )}
          {!imagePreview && (
            <div className="text-[1rem] text-[#404040]">
              {selectedFile ? (
                <div>이미지 불러오는 중...</div>
              ) : (
                <div>사진 파일을 드래그&드롭 하거나 선택하세요.</div>
              )}
            </div>
          )}
        </div>

        <div className="mt-[2.37rem] ml-[1.38rem]">
          <div className="mb-[1.87rem] flex justify-center items-center w-[8.8125rem] h-[2.375rem] border border-1 border-[#FF0069] text-[#FF0069] rounded">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label htmlFor="fileInput" className=" cursor-pointer">
              파일 선택하기
            </label>
          </div>
          <div>
            <button
              className="w-[8.8125rem] h-[2.375rem] bg-[#FF0069] text-[#ffffff] rounded"
              onClick={handleSave}
              disabled={!selectedFile}
            >
              저장하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
