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
    "--padding": "0px",
    "--height": "12px",
    "--radius": "4px",
  },
  small: {
    "--padding": "0px",
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
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar role="presentation" style={{ "--width": value + "%" }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: calc(var(--radius) + var(--padding));
  /* to ensure the inner bar respects the border radius when it reaches 99% */
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: calc(var(--radius));
  overflow: hidden;
`;

const Bar = styled.div`
  width: 100%;
  /* alternative to overflow: hidden in Wrapper */
  /* background: linear-gradient(
    to right,
    ${COLORS.primary} 0% var(--width),
    transparent var(--width)
  ); */
  background: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: var(--radius) 0 0 var(--radius);
`;

export default ProgressBar;
