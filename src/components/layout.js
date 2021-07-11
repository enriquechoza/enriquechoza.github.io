import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { Navigation } from './navigation/index';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  return (
    <div id="layout">
      <GlobalStyle />
      <StyledContent>
        <Navigation location={location} />
        { children }
      </StyledContent>
    </div>
  )
}

export { Layout };
