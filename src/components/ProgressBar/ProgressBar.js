/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--padding": "4px",
    "--height": "16px",
    "--radius": "4px",
  },
  medium: {
    "--padding": "0",
    "--height": "12px",
    "--radius": "4px",
  },
  small: {
    "--padding": "0",
    "--height": "8px",
    "--radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={SIZES[size] ?? SIZES.medium}
    >
      <Bar role="presentation" style={{ "--width": value + "%" }} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: calc(var(--radius) + var(--padding));
  padding: var(--padding);
`;

const Bar = styled.span`
  display: block;
  width: 100%;
  background: linear-gradient(
    to right,
    ${COLORS.primary} 0% var(--width),
    transparent var(--width)
  );
  height: var(--height);
  border-radius: var(--radius);
`;

export default ProgressBar;
