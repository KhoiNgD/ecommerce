import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2, H6, Overline } from "components/Typographies";
import styled from "styled-components";

function ProductDetail() {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg`}
          tabletSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg`}
          desktopSrc={`${process.env.PUBLIC_URL}/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg`}
          mediaMobile="(max-width: 768px)"
          alt="Product xx99 mark two headphones"
        />
      </PictureWrapper>
      <ProductInformation>
        <StyledOverline>New Product</StyledOverline>
        <StyledH2>XX99 Mark II Headphones</StyledH2>
        <StyledBody>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </StyledBody>
        <H6>$ 2,999</H6>
        <ActionWrapper>
          -1+
          <Button variant="fill">Add To Cart</Button>
        </ActionWrapper>
      </ProductInformation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 125px;

  @media (max-width: 1100px) {
    gap: 69px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const PictureWrapper = styled.div`
  min-width: 540px;
  border-radius: var(--border-radius);
  overflow: hidden;

  @media (max-width: 1100px) {
    min-width: 281px;
  }

  @media (max-width: 550px) {
    min-width: revert;
  }
`;

const ProductInformation = styled.div`
  align-self: center;
`;

const StyledOverline = styled(Overline)`
  color: hsl(var(--primary-color));
  margin-bottom: 16px;

  @media (max-width: 1100px) {
    font-size: 1.2rem;
    letter-spacing: 0.857rem;
  }

  @media (max-width: 550px) {
    font-size: 1.4rem;
    letter-spacing: 1rem;
    margin-bottom: 24px;
  }
`;

const StyledH2 = styled(H2)`
  @media (max-width: 1100px) {
    font-size: 2.8rem;
    letter-spacing: 1px;
    line-height: 3.2rem;
  }
`;

const StyledBody = styled(Body)`
  color: hsl(var(--primary-dark) / 0.5);
  margin: 32px 0;

  @media (max-width: 550px) {
    margin: 24px 0;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 46px;

  @media (max-width: 1100px) {
    margin-top: 32px;
  }
`;

export { ProductDetail };
