import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2 } from "components/Typographies";
import styled from "styled-components";

function Bio() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-best-gear.jpg`}
          tabletSrc={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`}
          desktopSrc={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`}
          alt="A man is experiencing one of our top gear"
        />
      </PictureWrapper>
      <ContentWrapper>
        <H2>
          Bringing you the <ProminentText>best</ProminentText> audio gear
        </H2>
        <StyledBody>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </StyledBody>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  text-align: right;

  @media (max-width: 1100px) {
    text-align: revert;
  }
`;

const PictureWrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  display: inline-block;

  @media (max-width: 1100px) {
    display: block;
  }
`;

const ContentWrapper = styled.div`
  max-width: 445px;
  text-align: left;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  @media (max-width: 1100px) {
    max-width: 573px;
    position: revert;
    transform: none;
    margin: auto;
    margin-top: 62px;
    text-align: center;
  }

  @media (max-width: 550px) {
    max-width: revert;
    margin-top: 40px;
  }
`;

const ProminentText = styled.strong`
  color: hsl(var(--primary-color));
`;

const StyledBody = styled(Body)`
  margin-top: 32px;
  color: hsl(var(--primary-dark) / 0.5);
`;

export { Bio };
