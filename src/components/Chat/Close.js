import color from "color";
import React from "react";

export default (props) => (
  <button 
    className="root"
    style={{
      background: props.buttonColor,
      color: color(props.buttonColor).luminosity() > 0.6 ? "#222" : "white",
    }}
    onClick={props.onClick} 
  >
    ×
    <style jsx>{`
      .root {
        border: 1px solid transparent;
        border-radius: 100%;
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        right: -15px;
        top: -15px;
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 99999;

        &:hover {
          border: 1px solid white;
        }
      }
    `}</style>
  </button>
);
