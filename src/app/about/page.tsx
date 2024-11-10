import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div>
        <div className="main">
          <div
            className="contentimg"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "400px",
              height: "400px",
              border: "8px solid #444564",
            }}>
            <Image
              src="/assets/aboutme.png"
              width={500}
              height={500}
              alt="about-image"
            />
          </div>
          <div className="intro">
            <h1>About Me</h1>
            <p>
              Hello! I&apos;m a passionate web developer with a keen eye for
              detail and a drive to create engaging, user-friendly digital
              experiences. With expertise in HTML, CSS, JavaScript,Typescript
              and frameworks like Next.js, I specialize in building responsive,
              accessible websites that blend functionality with aesthetic
              appeal. I enjoy transforming complex problems into intuitive,
              efficient solutions and continuously enhancing my skills to stay
              up-to-date with the latest industry trends. Whether developing
              from scratch or improving an existing project, I am dedicated to
              delivering clean, high-quality code and collaborating closely with
              clients to bring their vision to life. Let&apos;s build something
              amazing together!
            </p>
            <button className="btn">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
