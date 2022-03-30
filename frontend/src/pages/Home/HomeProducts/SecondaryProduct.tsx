import { ResponsivePicture } from "components/ResponsivePicture";
import styled from "styled-components";
import { ProductAction } from "./ProductAction";

function SecondaryProduct() {
  return (
    <Wrapper>
      <StyledResponsivePicture
        mobileSrc={`${process.env.PUBLIC_URL}/assets/home/mobile/image-speaker-zx7.jpg`}
        tabletSrc={`${process.env.PUBLIC_URL}/assets/home/tablet/image-speaker-zx7.jpg`}
        desktopSrc={`${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx7.jpg`}
        alt="secondary product - speaker zx7"
      />
      <StyledProductAction
        product="zx7 speaker"
        link="/category/speakers/zx7-speaker"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
`;

const StyledResponsivePicture = styled(ResponsivePicture)`
  @media (max-width: 1100px) {
    & img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }
`;

const StyledProductAction = styled(ProductAction)`
  position: absolute;
  top: 50%;
  left: 95px;
  transform: translateY(-50%);

  @media (max-width: 1100px) {
    left: 62px;
  }

  @media (max-width: 550px) {
    left: 24px;
  }
`;

export default SecondaryProduct;
