import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { NAV_ITEMS } from '../../config';
import { StyledNav, StyledList, StyledListItem, StyledSpan, StyledTooltip } from './styles';

const Navigation = () => {
  function handleOnClick(url) {
    scrollTo(url);
  }

  return (
    <StyledNav>
      <StyledList items={ ['about', 'jobs', 'portfolio', 'contact'] } currentClassName="active">
        {NAV_ITEMS &&
          NAV_ITEMS.map(({ url, name }, i) => (
            <StyledListItem key={i}>
              <StyledSpan
                onClick={() => handleOnClick(url)}
              >
                {`0${ i+1 }`}
              </StyledSpan>
              <StyledTooltip>{name}</StyledTooltip>
            </StyledListItem>
          )
        )}
      </StyledList>
    </StyledNav>
  )
}

export { Navigation };
