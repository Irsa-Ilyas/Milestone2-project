import React from "react";
import Image from "next/image";

const Techstack = () => {
  return (
    <div>
      <div className="MytechStack">
        <div className="flex ">
          <h1 className="txt">My Tech Stack</h1>
          <p className="txt1">Technologies I work with</p>
        </div>
        <div className="container ">
          <div className="fourone">
            <ul className="inline">
              <li className="img1">
                <Image
                  src="/assets/techimg1.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  HTML
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/techr2.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  CSS
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/t3.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  Bootstrap
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/taik2.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  Tailwind CSS
                </p>
              </li>
            </ul>
          </div>
          <div className="fourtwo">
            <ul>
              <li className="img1">
                <Image
                  src="/assets/java.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  Javascript
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/ts.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  Typescript
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/tnpm.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  npm
                </p>
              </li>
              <li className="img1">
                <Image
                  src="/assets/tech5.png"
                  width={250}
                  height={200}
                  alt="HTML"
                />
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#666666",
                    fontWeight: "700",
                  }}>
                  Git
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
