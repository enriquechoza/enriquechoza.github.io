import styled from "styled-components";
import Scrollspy from 'react-scrollspy'

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

  &:hover :not(.active) {
    color: var(--white);
    text-shadow: 2px 2px 4px rgba(255,255,255,0.4);
  }
`;

const StyledList = styled(Scrollspy)`
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

  &.active {
    color: var(--accent-orange);
  }

  &:hover span:not(:hover) {
    display: inline-block;
    opacity: 1;
    margin-left: 0;
  }
`;

const StyledTooltip = styled.span`
  color: var(--white);
  margin: 0;
  padding: 0;
  opacity: 0;
  pointer-events: none;
  margin-left: -30px;
  transition: all 0.3s ease;
`;

export { StyledNav, StyledList, StyledListItem, StyledSpan, StyledTooltip }