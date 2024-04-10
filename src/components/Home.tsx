import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div id="home" className={styles.wrap}>
      <section className={styles.info}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          신랑이름 & 신부이름
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          | WE ARE GETTING MARRIED |
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          2019. 05. 18. SAT PM 02:30
          <br />
          부산 해운대 센텀시티 센텀사이언스파크 23층
        </p>
      </section>
    </div>
  );
}
