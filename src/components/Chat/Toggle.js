import React from "react";

import Container from "./Container";
import ToggleIcon from "./ToggleIcon";

export default ({ open, toggleOpen, ...colors }) => (
  <Container {...colors}>
    <ToggleIcon {...colors} onClick={toggleOpen} width={32} height={32} />
  </Container>
);
