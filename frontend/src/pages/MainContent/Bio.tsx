import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2 } from "components/Typographies";
import styled from "styled-components";

function Bio() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc="./assets/shared/mobile/image-best-gear.jpg"
          tabletSrc="./assets/shared/tablet/image-best-gear.jpg"
          desktopSrc="./assets/shared/desktop/image-best-gear.jpg"
          alt="A man is experiencing one of our top gear"
        />
      </PictureWrapper>
      <ContentWrapper>
        <H2>Bringing you the best audio gear</H2>
        <Body>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Body>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const PictureWrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const ContentWrapper = styled.div``;

export { Bio };
