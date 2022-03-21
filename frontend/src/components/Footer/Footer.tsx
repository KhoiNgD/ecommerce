import { Container } from "components/Container";
import { Logo } from "components/Logo";
import { Navigation } from "components/Navigation";
import { Body } from "components/Typographies";
import styled from "styled-components";
import { ReactComponent as FacebookLogo } from "assets/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "assets/icon-instagram.svg";

function Footer() {
  return (
    <Wrapper>
      <StyledContainer>
        <div>
          <Logo />
        </div>

        <Navigation />

        <Content>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Content>

        <Socials>
          <FacebookLogo />
          <TwitterLogo />
          <InstagramLogo />
        </Socials>

        <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      </StyledContainer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: hsl(var(--primary-dark));
`;

const StyledContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 32px;

  & > *:nth-child(even) {
    justify-self: end;
  }

  @media (max-width: 1100px) {
    & > *:nth-child(-n + 3) {
      grid-column: 1 / -1;
      justify-self: revert;
    }
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    row-gap: 48px;
    place-items: center;

    & > *:nth-child(even) {
      justify-self: revert;
    }
  }
`;

const Content = styled(Body)`
  color: hsl(var(--primary-white) / 0.5);
  margin-top: 4px;

  @media (max-width: 1100px) {
    margin: 0;
  }

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const Socials = styled.div`
  align-self: end;
  display: flex;
  gap: 16px;

  & > * {
    cursor: pointer;
  }

  & svg:hover path {
    fill: hsl(var(--primary-color));
  }

  @media (max-width: 1100px) {
    position: absolute;
  }

  @media (max-width: 550px) {
    position: revert;
  }
`;

const Copyright = styled(Content)`
  font-weight: 700;
  margin-top: calc(56px - 32px);

  @media (max-width: 1100px) {
    margin-top: calc(80px - 32px);
  }

  @media (max-width: 550px) {
    margin: 0;
  }
`;

export { Footer };
