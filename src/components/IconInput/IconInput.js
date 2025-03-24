import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    icon: 16,
    height: 24,
    fontSize: 14,
    borderThickness: 1,
  },
  large: {
    icon: 24,
    height: 36,
    fontSize: 18,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size];
  if (style === undefined) {
    throw new Error("Unknown size");
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconElement id={icon} size={style.icon} />
      <InputElement
        style={{
          "--height": style.height / 16 + "rem",
          "--width": width + "px",
          "--font-size": style.fontSize / 16 + "rem",
          "--border-thickness": style.borderThickness + "px",
        }}
        {...delegated}
      ></InputElement>
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
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);
  font-size: var(--font-size);
  border: none;
  font-weight: 700;
  color: inherit;
  border-color: black;
  border-style: solid;
  border-width: 0;
  border-bottom-width: var(--border-thickness);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
