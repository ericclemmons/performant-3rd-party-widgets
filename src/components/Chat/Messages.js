import React, { Component } from "react";
import { findDOMNode } from "react-dom";

const List = (props) => (
  <ol 
    className="root"
  >
    {props.children}
    <style jsx>{`
      .root {
        border-radius: 5px;
        box-sizing: border-box;
        display: block;
        height: calc(100% - 40px);
        list-style-type: none;
        margin: 0;
        overflow: auto;
        padding: 10px 5px 10px 5px;
        width: 100%;
      }
    `}</style>
  </ol>
);

const Message = (props) => (
  <li 
    className="root"
    style={{
      background: props.from ? "#ccc" : props.accentColor,
      float: props.from ? "left" : "right",
      textAlign: props.from ? "left" : "right"
    }}
  >
    {props.children}
    <style jsx>{`
      .root {
        border-radius: 3px;
        clear: both;
        display: block;
        font-size: 13px;
        margin-bottom: 10px;
        padding: 5px 10px;
        position: relative;
      }
    `}</style>
  </li>
);

const Author = (props) => (
  <small className="root">
    {props.children}
    <style jsx>{`
      .root {
        bottom: -15px;
        display: block;
        font-size: 60%;
        opacity: 0.6;
        position: absolute;
      }
    `}</style>
  </small>
);

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
