"use client";
import Loader from "react-js-loader";
const Loading = () => {
  const color = "gray";
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <Loader type="bubble-loop" bgColor={color} color={color} size={100} />
    </div>
  );
};

export default Loading;
