import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>© 2024 IRSA ILYAS</p>
      </div>
      <div className="footer-text">
        <p>Connect with me:</p>
        <ul>
          <li>
            <Link href="#">Github</Link>
          </li>
          <li>
            <Link href="#">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
