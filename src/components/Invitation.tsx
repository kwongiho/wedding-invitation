import React from "react";
import Image from "next/image";

export default function Invitation() {
  return (
    <div
      id="invitation"
      className="w-full flex flex-col justify-center items-center py-16"
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        초대합니다
      </h2>
      <div className="w-full flex flex-col px-16">
        <div className="flex flex-row">
          <div className="flex flex-1 flex-col">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              웨딩 본식
            </h4>
          </div>
          <div className="flex">
            <Image
              src={"/images/wedding-party.jpg"}
              width={300}
              height={300}
              alt="웨딩 본식"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-1 flex-col">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              식사
            </h4>
          </div>
          <div className="flex">
            <Image
              src={"/images/reception.jpg"}
              width={300}
              height={300}
              alt="식사"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
