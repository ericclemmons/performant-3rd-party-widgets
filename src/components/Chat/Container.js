import React from "react";
import polychrome from "polychrome";
import css from "glam";

export default (props) => {
  const container = css`
    background: ${props.open ? "linear-gradient(#f0f0f0 0px, #fff 100%)" : props.buttonColor}
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    border: ${props.open ? "1px solid #ddd" : "2px solid transparent"};
    border-radius: ${props.open ? "5px" : "40px"};
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    bottom: 20px;
    display: block;
    height: ${props.open ? "calc(100% - 40px)" : "40px"}
    max-height: 400px;
    position: absolute;
    right: 20px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: ${props.open ? "200px" : "40px"}
    z-index: 9999;

    &:hover {
      border: ${!props.open ? "2px solid ".concat(polychrome(props.buttonColor).luma < 128 ? "#222" : "white") : ""};
    }
  `;

  return (
    <div className={container}>{props.children}</div>
  )
};