import React from "react";
import { render } from "react-dom";
import Chat from "../components/Chat";

export default function renderChatWidget(props, target) {
  render(<Chat {...props} />, target);
}
