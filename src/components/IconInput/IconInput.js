import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    icon: 16,
    wrapper: {
      height: "24px",
      borderBottomWidth: "1px",
    },
    element: {
      paddingLeft: "24px",
      fontSize: 14 / 16 + "rem",
    },
  },
  large: {
    icon: 24,
    wrapper: {
      height: "36px",
      borderBottomWidth: "2px",
    },
    element: {
      paddingLeft: "36px",
      fontSize: 18 / 16 + "rem",
    },
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  return (
    <Wrapper style={{ ...style.wrapper, width: width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconElement id={icon} size={style.icon} />
      <InputElement
        style={{ ...style.element }}
        placeholder={placeholder}
      ></InputElement>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  box-sizing: border-box;
  display: block;
  position: relative;
  border-color: black;
  border-style: solid;
  border-width: 0;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;

const IconElement = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const InputElement = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-weight: 700;
  color: inherit;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 2px 2px 3px 2px;
  }
`;

export default IconInput;
