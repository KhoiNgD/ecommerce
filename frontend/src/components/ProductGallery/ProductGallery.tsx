import { ResponsivePicture } from "components/ResponsivePicture";
import styled from "styled-components";

function ProductGallery() {
  return (
    <Wrapper>
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg`}
        tabletSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg`}
        desktopSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg`}
        alt="image gallery 1"
      />
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg`}
        tabletSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg`}
        desktopSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg`}
        alt="image gallery 2"
      />
      <StyledPicture
        mobileSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg`}
        tabletSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg`}
        desktopSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg`}
        alt="image gallery 3"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40fr 55fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 32px;

  @media (max-width: 1100px) {
    column-gap: 18px;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    column-gap: revert;
    row-gap: 20px;
  }
`;

const StyledPicture = styled(ResponsivePicture)`
  & img {
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:nth-of-type(2) {
    grid-column: 1;
    grid-row: 2;
  }

  &:nth-of-type(3) {
    grid-column: 2;
    grid-row: 1 / -1;
  }

  @media (max-width: 768px) {
    &:nth-of-type(2) {
      grid-column: revert;
      grid-row: revert;
    }

    &:nth-of-type(3) {
      grid-column: revert;
      grid-row: revert;
    }
  }
`;

export { ProductGallery };
