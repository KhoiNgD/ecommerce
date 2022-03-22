import { ResponsivePicture } from "components/ResponsivePicture";
import styled from "styled-components";
import { ProductAction } from "./ProductAction";

function TertiaryProduct() {
  return (
    <Wrapper>
      <StyledResponsivePicture
        mobileSrc="./assets/home/mobile/image-earphones-yx1.jpg"
        tabletSrc="./assets/home/tablet/image-earphones-yx1.jpg"
        desktopSrc="./assets/home/desktop/image-earphones-yx1.jpg"
        alt="tertiary product - earphones yx1"
      />
      <ActionWrapper>
        <StyledProductAction product="yx1 earphones" />
      </ActionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledResponsivePicture = styled(ResponsivePicture)`
  & img {
    border-radius: var(--border-radius);
  }
`;

const ActionWrapper = styled.div`
  border-radius: var(--border-radius);
  background: #f1f1f1;
  position: relative;
`;

const StyledProductAction = styled(ProductAction)`
  position: absolute;
  top: 50%;
  left: 95px;
  transform: translateY(-50%);

  @media (max-width: 1100px) {
    left: 41px;
  }

  @media (max-width: 550px) {
    left: 24px;
  }
`;

export default TertiaryProduct;
