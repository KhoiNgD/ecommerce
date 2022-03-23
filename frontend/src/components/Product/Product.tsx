import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2, Overline } from "components/Typographies";
import styled from "styled-components";

function Product() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg`}
          tabletSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg`}
          desktopSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg`}
          alt="Product xx99 mark two headphones"
        />
      </PictureWrapper>
      <ProductInformation>
        <StyledOverline>New Product</StyledOverline>
        <H2>XX99 Mark II Headphones</H2>
        <StyledBody>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </StyledBody>
        <Button variant="fill">See Product</Button>
      </ProductInformation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 125px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 52px;
  }

  @media (max-width: 550px) {
    gap: 32px;
  }
`;

const PictureWrapper = styled.div`
  min-width: 540px;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: 1100px) {
    min-width: revert;
  }
`;

const ProductInformation = styled.div`
  align-self: center;

  @media (max-width: 1100px) {
    text-align: center;
  }
`;

const StyledOverline = styled(Overline)`
  color: hsl(var(--primary-color));
  margin-bottom: 16px;

  @media (max-width: 550px) {
    margin-bottom: 24px;
  }
`;

const StyledBody = styled(Body)`
  opacity: 0.5;
  margin-top: 32px;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    margin-bottom: 24px;
  }

  @media (max-width: 550px) {
    margin-top: 24px;
  }
`;

export { Product };
