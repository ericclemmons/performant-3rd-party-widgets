import React from "react";
import { render } from "react-dom";
import Hello from "../components/Hello";

export default function renderHelloWidget(props, target) {
  render(<Hello {...props} />, target);
}
