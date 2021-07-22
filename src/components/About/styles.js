import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-family: var(--font-mono);
  width: 50vw;
`;

const StyledAccentText = styled.span`
  color: var(--accent-orange);
  font-size: 18px;
  margin-bottom: 5px;
`;

const StyledName = styled.h2`
  color: var(--light-slate);
  font-family: var(--font-sans);
  margin: 0;
  font-size: 80px;
  font-weight: bold;
  transition: opacity 300ms var(--easing), transform 300ms var(--easing);
`;

const StyledTitle = styled.span`
  color: var(--light-gray);
  font-family: var(--font-sans);
  font-size: 60px;
  font-weight: bold;
`;

const StyledDescription = styled.p`
  color: var(--light-gray);
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: semi-bold;
`;

const StyledButton = styled.a`
  position: relative;
  color: var(--light-gray);
  font-family: var(--font-mono);
  text-align: center;
  font-size: 18px;
  overflow: hidden;
  text-decoration: none;
  background-color: rgba(242, 100, 25, .7);
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  width: 130px;
  height: 44px;
  margin-top: 20px;
  cursor: pointer;
  transition: all .2s ease-out 0s;
  /* transition: background-color 200ms var(--easing); */

  span,
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all .3s ease-out;
    position: absolute;
  }

  span {
    opacity: 1;
  }

  img {
    opacity: 0;
    width: 25px;
    height: 25px;
  }

  &:hover > span {
    top: -20px;
    opacity: 0;
  }

  &:hover > img {
    opacity: 1;
    font-size: 22px;
    top: 50%;
  }
`;

export {
  StyledButton,
  StyledContainer,
  StyledAccentText,
  StyledName,
  StyledTitle,
  StyledDescription,
};