import React from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledAccentText,
  StyledDescription,
  StyledName,
  StyledTitle,
} from './styles';
import { PageSection } from '../../styles/common';
import downloadIcon from '../../assets/icons/download.svg';
import resumeFile from '../../assets/resume.pdf';

const About = () => {
  function handleOnClick() {
    window.open(resumeFile, '_blank');
  }

  return (
    <PageSection id="about">
      <StyledContainer>
        <StyledAccentText>Hi, my name is</StyledAccentText>

        <StyledName>Enrique Choza</StyledName>

        <StyledTitle>I’m a Full Stack Developer</StyledTitle>

        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledDescription>
        
        <StyledButton
          role="button"
          href={resumeFile}
          download="Enrique Choza Resume"
        >
          <span>Resume</span>
          <img src={downloadIcon} />
        </StyledButton>
      </StyledContainer>
    </PageSection>
  )
}

export { About };
