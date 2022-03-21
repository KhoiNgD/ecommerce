import { Button } from "@components/Button/Button";
import { Container } from "@components/Container";
import { Body, H1, Overline } from "@components/Typographies";
import styled from "styled-components";
import { Border } from "./Border";
import { Header } from "./Header";

function HeroHeader() {
  return (
    <Wrapper>
      <picture>
        <source
          media="(max-width: 1110px)"
          srcSet="./assets/home/tablet/image-header.jpg"
        />
        <source
          media="(max-width: 550px)"
          srcSet="./assets/home/mobile/image-header.jpg"
        />
        <img
          src="./assets/home/desktop/image-hero.jpg"
          alt="new product in headphone category"
        />
      </picture>

      <StyledContainer>
        <Header />
        <Border />
        <HeroContent>
          <HeroTextBox>
            <StyledOverline>New Product</StyledOverline>
            <StyledH1>XX99 Mark II Headerphones</StyledH1>
            <StyledBody>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </StyledBody>
          </HeroTextBox>

          <Button variant="fill">See Product</Button>
        </HeroContent>
      </StyledContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledContainer = styled(Container)`
  position: absolute;
`;

const HeroContent = styled.div`
  width: min-content;
`;

const HeroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

const StyledOverline = styled(Overline)`
  color: hsl(var(--primary-white) / 0.5);
`;

const StyledH1 = styled(H1)`
  color: hsl(var(--primary-white));
`;

const StyledBody = styled(Body)`
  color: hsl(var(--primary-white) / 0.75);
`;

export { HeroHeader };