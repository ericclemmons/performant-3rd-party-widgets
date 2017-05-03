import color from "color";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.buttonColor}
  border: 1px solid transparent;
  border-radius: 100%;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  color: ${props => color(props.buttonColor).luminosity() > 0.6 ? "#222" : "white"}
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: -15px;
  top: -15px;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    border: 1px solid ${props => (color(props.buttonColor).luminosity() > 0.6 ? "#222" : "white")}
  }
`;

export default (props) => (
  <Button {...props} onClick={props.onClick}>×</Button>
)
