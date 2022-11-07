import { useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        {" "}
        <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
          ABOUT ME
        </h1>
        <h2
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem]"
        >
          <span className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
            I&apos;m Full Stack Developer 🚀 having an experience of building
            Web applications with JavaScript / Reactjs / Expressjs and some
            other cool libraries and frameworks.
          </span>
          <span className="about-2 leading-tight"></span>
        </h2>
      </div>
    </section>
  );
};

export default About1;
