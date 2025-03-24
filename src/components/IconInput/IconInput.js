import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    icon: 16,
    element: {
      height: 24 / 16 + "rem",
      paddingLeft: "24px",
      fontSize: 14 / 16 + "rem",
      borderBottomWidth: "1px",
    },
  },
  large: {
    icon: 24,
    element: {
      height: 36 / 16 + "rem",
      paddingLeft: "36px",
      fontSize: 18 / 16 + "rem",
      borderBottomWidth: "2px",
    },
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size];
  return (
    <Wrapper style={{ width: width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconElement id={icon} size={style.icon} />
      <InputElement style={{ ...style.element }} {...delegated}></InputElement>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  box-sizing: border-box;
  display: block;
  position: relative;
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
  border-color: black;
  border-style: solid;
  border-width: 0;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
