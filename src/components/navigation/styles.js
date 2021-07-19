import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  color: var(--white);
  font-family: var(--font-mono);
  top: 50%;
  margin-left: 20px;
  transform: translate(0%, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSpan = styled.span`
  margin-right: 15px;
  color: var(--light-gray);

  &:hover {
    color: var(--white);
    text-shadow: 2px 2px 4px rgba(255,255,255,0.4);
  }

  &.active {
    color: var(--accent-orange);
  }
`;

const StyledOrderedList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li `
  margin: 25px 0px;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover span:not(:hover) {
    display: inline-block;
  }
`;

const StyledTooltip = styled.span`
  margin: 0;
  padding: 0;
  display: none;
`;

export { StyledNav, StyledOrderedList, StyledListItem, StyledSpan, StyledTooltip }