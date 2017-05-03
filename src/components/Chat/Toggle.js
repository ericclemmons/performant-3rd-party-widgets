import React from "react";

import Container from "./Container";
import ToggleIcon from "./ToggleIcon";

export default (props) => (
  <Container {...props}>
    <ToggleIcon {...props} onClick={props.toggleOpen} width={32} height={32} />
  </Container>
);
