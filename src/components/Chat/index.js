import {
  branch,
  compose,
  renderComponent,
  withHandlers,
  withState
} from "recompose";
import React, { Component } from "react";

import Close from "./Close";
import Container from "./Container";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import Toggle from "./Toggle";

const enhance = compose(
  withState("history", "setHistory", [
    { key: `from-${+new Date()}`, from: "Agent", body: "Hi! Type some text & I'll mirror it back to you." }
  ]),
  withState("open", "setOpen", false),
  withHandlers({
    sendMessage: ({ history, setHistory }) => event => {
      event.preventDefault();

      const input = event.target["body"];

      setHistory(
        history.concat({
          key: `to-${+new Date()}`,
          to: "Agent",
          body: input.value
        }, {
          key: `from-${+new Date()}`,
          from: "Agent",
          body: input.value.split("").reverse().join("")
        })
      );

      input.value = "";
    },
    toggleOpen: ({ open, setOpen }) => event => setOpen(!open)
  }),
  branch(({ open }) => !open, renderComponent(Toggle))
);

export default enhance(props => (
  <Container {...props}>
    <Close {...props} onClick={props.toggleOpen} />
    <Messages {...props} history={props.history} />
    <MessageForm {...props} onSubmit={props.sendMessage} />
  </Container>
));
