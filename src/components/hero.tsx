import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="main">
        <div className="intro">
          <h1>
            Hello there I&apos;m <span className="head"style={{fontWeight:"bold"}}>IRSA ILYAS</span>
          </h1>
          <p>
          Welcome to my portfolio! Explore below to discover my skills, projects, and
          how I can help transform your ideas into reality.
          </p>
          <button className="btn">Contact Me</button>
        </div>
        <div className="contentimg">
          <Image
            src="/assets/contentimg.jpg"
            width={450}
            height={500}
            alt="content-image"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;
















// I&apos;m a fullstack developer skilled in building beautiful and
// functional user interfaces. I enjoy working on projects that utilize
// front-end technologies to create seamless user experiences.