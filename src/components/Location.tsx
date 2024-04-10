import React from "react";

export default function Location() {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        오시는 길
      </h2>
      <div className="flex flex-col justify-center items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
          센텀사이언스파크웨딩홀 23층 스카이홀
        </h4>
        <p className="leading-7">
          (부산 해운대구 센텀중앙로 79)
        </p>
      </div>
    </div>
  );
}
