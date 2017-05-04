import React from "react";

const Form = (props) => (
  <form 
    {...props}
    className="root"
  >
    {props.children}
    <style jsx>{`
      .root {
        height: 40px;
        padding: 5px;
      } 
    `}</style>
  </form>
);

export default (props) => (
  <Form autoComplete="off" onSubmit={props.onSubmit}>
    <input autoFocus name="body" placeholder="Press [enter] to send..." type="text" />
    <style jsx>{`
      input {
        border: 1px solid #ddd;
        box-sizing: border-box;
        display: block;
        font-size: 13px;
        height: 30px;
        text-align: right;
        padding: 0 5px 0 0;
        width: 100%;
      }
    `}</style>
  </Form>
);
