import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div
      id="couple"
      className={cn(
        "flex flex-col justify-center items-center py-16",
        styles.wrap
      )}
    >
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          styles.title
        )}
      >
        신랑 & 신부
      </h2>
      <div className={"flex flex-row py-8"}>
        <div className="flex flex-1 flex-col px-5">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center h-10">
            신랑이름
          </h4>
          <Image
            src={"/images/intro1.jpeg"}
            width={300}
            height={300}
            alt="신랑이름"
          />
        </div>
        <div className="flex flex-1 flex-col px-5">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center h-10">
            신부이름
          </h4>
          <Image
            src={"/images/intro2.jpeg"}
            width={300}
            height={300}
            alt="신부이름"
          />
        </div>
      </div>
    </div>
  );
}
