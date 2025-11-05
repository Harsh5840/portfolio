"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of Experience",
  },
  {
    num: 43,
    text: "Projects Completed",
  },
  {
    // guessed technologies — adjust if you prefer a different number
    num: 12,
    text: "Technologies mastered",
  },
  {
    num: 600,
    text: "Commits this year",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-8 xl:pt-0 xl:pb-0 mt-12 xl:mt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-8">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start min-w-[160px] px-4"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[100px]"
                  }
                  leading-snug text-white/80
                  `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
