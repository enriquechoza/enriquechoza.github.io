import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/globalStyle';
import { Navigation } from '../Navigation/';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  return (
    <>
      <div id="root">
        <GlobalStyle />

        <StyledContent id="content">
          <Navigation />
          { children }
        </StyledContent>
      </div>
    </>
  )
}

export { Layout };
