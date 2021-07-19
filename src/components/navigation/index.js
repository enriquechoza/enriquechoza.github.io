import React, { useEffect, useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { NAV_ITEMS } from '../../config';
import { StyledNav, StyledOrderedList, StyledListItem, StyledSpan, StyledTooltip } from './styles';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('#about');

  function handleOnClick(url) {
    setActiveSection(url);
    scrollTo(url);
  }

  return (
    <StyledNav>
      <StyledOrderedList>
        {NAV_ITEMS &&
          NAV_ITEMS.map(({ url, name }, i) => (
            <StyledListItem key={i}>
              <StyledSpan
                className={`${url === activeSection ? "active" : ""}`}
                onClick={() => handleOnClick(url)}
              >
                {`0${ i+1 }`}
              </StyledSpan>
              <StyledTooltip>{name}</StyledTooltip>
            </StyledListItem>
          ))}
      </StyledOrderedList>
    </StyledNav>
  )
}

export { Navigation };
