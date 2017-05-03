import React from "react";
import styled from "styled-components";

const Form = styled.form`
  height: 40px;
  padding: 5px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
  font-size: 13px;
  height: 30px;
  text-align: right;
  padding: 0 5px 0 0;
  width: 100%;
`;

export default (props) => (
  <Form autoComplete="off" onSubmit={props.onSubmit}>
    <Input name="body" placeholder="Press [enter] to send..." type="text" />
  </Form>
);
