import React from "react";
import "./help.styles.scss";

export const HelpList = () => {
  return (
<section className="helpList">
      <ul className="custom-list">
        <li>
          <a href="#getting-started">Getting Started with AfroShop</a>
        </li>
        <li>
          <a href="#selling">Selling on AfroShop</a>
        </li>
        <li>
          <a href="#buying">Buying on AfroShop</a>
        </li>
        <li>
          <a href="#payments">Payments on AfroShop</a>
        </li>
        <li>
          <a href="#shipping">Shipping with AfroShop</a>
        </li>
      </ul>
    </section>
  );
};
