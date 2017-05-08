import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import css from "glam";

const list = css`
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  height: calc(100% - 40px);
  list-style-type: none;
  margin: 0;
  overflow: auto;
  padding: 10px 5px 10px 5px;
  width: 100%;
`;

const author = css`
  bottom: -15px;
  display: block;
  font-size: 60%;
  opacity: 0.6;
  position: absolute;
`;

const Message = (props) => {
  const message = css`
    background: ${props.from ? "#ccc" : props.accentColor};
    border-radius: 3px;
    clear: both;
    display: block;
    float: ${props.from ? "left" : "right"};
    font-size: 13px;
    margin-bottom: 10px;
    padding: 5px 10px;
    position: relative;
    text-align: ${props.from ? "left" : "right"}
  `;

  return <li className={message}>{props.children}</li>
}

export default class Messages extends Component {
  componentDidUpdate() {
    if (this.list) {
      const node = findDOMNode(this.list);

      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const { history = [] } = this.props;

    return (
      <ul className={list} ref={list => (this.list = list)}>
        {history.map(message => (
          <Message {...this.props} {...message}>
            {message.body}
            <small className={author}>{message.from || "You"}</small>
          </Message>
        ))}
      </ul>
    );
  }
}
