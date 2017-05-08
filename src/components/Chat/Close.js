import polychrome from "polychrome";
import React from "react";
import css from "glam";

export default (props) => {
  const button = css`
    background: ${props.buttonColor}
    border: 1px solid transparent;
    border-radius: 100%;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    color: ${polychrome(props.buttonColor).luma < 128 ? "#222" : "white"}
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    right: -15px;
    top: -15px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 99999;

    &:hover {
      border: 1px solid ${(polychrome(props.buttonColor).luma < 128 ? "#222" : "white")}
    }
  `;

  return (
    <button className={button} {...props} onClick={props.onClick}>×</button>
  )
}
