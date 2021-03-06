import color from "color";
import styled from "styled-components";

export default styled.div`
  background: ${props => props.open ? "linear-gradient(#f0f0f0 0px, #fff 100%)" : props.buttonColor}
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  border: ${props => props.open ? "1px solid #ddd" : "2px solid transparent"};
  border-radius: ${props => (props.open ? "5px" : "40px")};
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  bottom: 20px;
  display: block;
  height: ${props => props.open ? "calc(100% - 40px)" : "40px"}
  max-height: 400px;
  position: absolute;
  right: 20px;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: ${props => props.open ? "200px" : "40px"}
  z-index: 9999;

  &:hover {
    border: ${props => {
      if (!props.open) {
        return "2px solid ".concat(color(props.buttonColor).luminosity() > 0.6 ? "#222" : "white");
      }
    }
  }
  }
`;
