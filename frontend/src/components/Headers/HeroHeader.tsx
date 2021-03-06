import { Button } from "components/Button/Button";
import { Container } from "components/Container";
import { Body, H1, Overline } from "components/Typographies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function HeroHeader() {
  const navigate = useNavigate();

  function navigateToProductDetail() {
    navigate("/category/headphones/xx99-mark-two-headphones");
  }

  return (
    <Wrapper>
      <Picture>
        <source
          media="(max-width: 550px)"
          srcSet={`${process.env.PUBLIC_URL}/assets/home/mobile/image-header.jpg`}
        />
        <source
          media="(max-width: 1110px)"
          srcSet={`${process.env.PUBLIC_URL}/assets/home/tablet/image-header.jpg`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg`}
          alt="new product in headphone category"
        />
      </Picture>

      <StyledContainer>
        <HeroContent>
          <HeroTextBox>
            <StyledOverline>New Product</StyledOverline>
            <StyledH1>XX99 Mark II Headphones</StyledH1>
            <StyledBody>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </StyledBody>
          </HeroTextBox>

          <Button onClick={navigateToProductDetail} variant="fill">
            See Product
          </Button>
        </HeroContent>
      </StyledContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

const Picture = styled.picture`
  & img {
    width: 100%;
    max-height: 729px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 550px) {
      max-height: 600px;
    }
  }
`;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const HeroContent = styled.div`
  width: min-content;
  position: absolute;
  top: 30%;

  @media (max-width: 1100px) {
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
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
