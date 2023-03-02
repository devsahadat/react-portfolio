import React from "react";
// Countup
import CountUp from "react-countup";
// Intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">
              I am a web developer with years of experience.
            </h3>
            <p className="mb-6">
              More than 100+ project done on fiverr marketplace. Right now I am
              not available on fiverr and working outside of marketplace. You
              can contact me for your project.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 item-center">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? (
                    <CountUp starts={0} end={6} duration={1.9} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? (
                    <CountUp starts={0} end={120} duration={1.9} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? (
                    <CountUp starts={0} end={116} duration={1.9} />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg text-black">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
