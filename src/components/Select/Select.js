import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <OuterWrapper>
      <StyledIcon id="chevron-down" size="24" strokeWidth="2" />
      <Wrapper value={value} onChange={onChange}>
        {children}
      </Wrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  line-height: 1;
  padding: 0.75rem 3.25rem 0.75rem 1rem;
  /* position: relative; */
  /* remove the native chevron */
  appearance: none;
  /* set the width to the content (does not work with firefox) */
  field-sizing: content;

  &:focus {
    outline-color: ${COLORS.primary};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  top: calc(50% - 12px);
`;

export default Select;
