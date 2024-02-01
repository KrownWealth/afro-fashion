import React from "react";
import "./help.styles.scss";

export const HelpList = () => {
  return (
<section className="helpList">
      <ul className="custom-list">
        <li>
          <a href="#getting-started">Getting Started with Afro Fashion</a>
        </li>
        <li>
          <a href="#selling">Selling on Afro Fashion</a>
        </li>
        <li>
          <a href="#buying">Buying on Afro Fashion</a>
        </li>
        <li>
          <a href="#payments">Payments on Afro Fashion</a>
        </li>
        <li>
          <a href="#shipping">Shipping with Afro Fashion</a>
        </li>
      </ul>
    </section>
  );
};
