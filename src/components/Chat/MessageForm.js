import React from "react";
import css from "glam";

export default (props) => {
  const form = css`
    height: 40px;
    padding: 5px;
  `;

  const input = css`
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
    font-size: 13px;
    height: 30px;
    text-align: right;
    padding: 0 5px 0 0;
    width: 100%;
  `;
  
  return (
    <form className={form} autoComplete="off" onSubmit={props.onSubmit}>
      <input className={input} autoFocus name="body" placeholder="Press [enter] to send..." type="text" />
    </form>
  );
};
