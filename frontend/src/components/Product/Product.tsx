import { Button } from "components/Button/Button";
import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2, Overline } from "components/Typographies";
import { IProduct } from "helpers/types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { product: IProduct };
function Product({ product }: Props) {
  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${
            process.env.PUBLIC_URL
          }${product.categoryImage.mobile.slice(1)}`}
          tabletSrc={`${
            process.env.PUBLIC_URL
          }${product.categoryImage.tablet.slice(1)}`}
          desktopSrc={`${
            process.env.PUBLIC_URL
          }${product.categoryImage.desktop.slice(1)}`}
          alt={product.name}
        />
      </PictureWrapper>
      <ProductInformation>
        <StyledOverline>{product.new ? "New Product" : ""}</StyledOverline>
        <H2>{product.name}</H2>
        <Description>{product.description}</Description>
        <NavLink to={product.slug}>
          <Button variant="fill">See Product</Button>
        </NavLink>
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

const Description = styled(Body)`
  color: hsl(var(--primary-dark) / 0.5);
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
