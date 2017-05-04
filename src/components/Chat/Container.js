import color from "color";
import React from "react";

export default (props) => (
  <div
    className={`root ${props.open ? "" : "closed"}`}
    style={{
      background: props.open ? "linear-gradient(#f0f0f0 0px, #fff 100%)" : props.buttonColor,
      border: props.open ? "1px solid #ddd" : "2px solid transparent",
      borderRadius: props.open ? "5px" : "40px",
      height: props.open ? "calc(100% - 40px)" : "40px",
      width: props.open ? "200px" : "40px",
    }}
  >
    {props.children}
    <style jsx>{`
      .root {      
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
        bottom: 20px;
        display: block;
        max-height: 400px;
        position: absolute;
        right: 20px;
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);        
        z-index: 9999;

        &.closed {
          &:hover {
            border: 2px solid white;
          }
        } 
      }
    `}</style>
  </div>
);
