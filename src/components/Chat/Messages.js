import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";

const List = styled.ol`
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3) inset;
  box-sizing: border-box;
  display: block;
  height: calc(100% - 40px);
  list-style-type: none;
  margin: 0;
  overflow: auto;
  padding: 10px 5px 10px 5px;
  width: 100%;
`;

const Message = styled.li`
  background: ${props => props.from ? "#ccc" : props.accentColor};
  border-radius: 10px;
  clear: both;
  display: block;
  float: ${props => props.from ? "left" : "right"};
  font-size: 13px;
  margin-bottom: 10px;
  padding: 5px 10px;
  position: relative;
  text-align: ${props => (props.from ? "left" : "right")}
`;

const Author = styled.small`
  bottom: -15px;
  display: block;
  font-size: 60%;
  opacity: 0.6;
  position: absolute;
`;

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
      <List ref={list => (this.list = list)}>
        {history.map(message => (
          <Message {...this.props} {...message}>
            {message.body}
            <Author>{message.from || "You"}</Author>
          </Message>
        ))}
      </List>
    );
  }
}
