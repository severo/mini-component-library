import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <FakeSelect>
        <Value>{displayedValue}</Value>
        <StyledIcon id="chevron-down" size="24" strokeWidth="2" />
      </FakeSelect>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
    </Wrapper>
  );
};

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* set the width to the content (does not work with firefox) */
  /* field-sizing: content; */
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: fit-content;
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  &:has(${InvisibleSelect}:focus) {
    outline-style: solid;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const FakeSelect = styled.span`
  line-height: 1;
  padding: 0.75rem 1rem 0.75rem 1rem;
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Value = styled.div``;

const StyledIcon = styled(Icon)``;

export default Select;
