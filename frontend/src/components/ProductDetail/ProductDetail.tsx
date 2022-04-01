import { Button } from "components/Button/Button";
import { InputNumber } from "components/InputNumber";
import { ResponsivePicture } from "components/ResponsivePicture";
import { Body, H2, H6, Overline } from "components/Typographies";
import { useCart, useCheckAddedToCart } from "contexts/cart-context";
import { ActionType } from "contexts/cart-context.types";
import { IProduct } from "helpers/types";
import { useInputNumber } from "hooks/input-number";
import styled from "styled-components";

type Props = { product: IProduct };
function ProductDetail({ product }: Props) {
  const {
    new: isNew,
    name,
    description,
    price,
    slug,
    image: { mobile, tablet, desktop },
  } = product;

  const { dispatch } = useCart();
  const productInCart = useCheckAddedToCart(slug);
  const isAddedToCart = Boolean(productInCart);
  const inputProps = useInputNumber({
    defaultValue: isAddedToCart ? productInCart?.quantity : 1,
    update: updateCartItem,
  });

  const payload = {
    name,
    price,
    slug,
    quantity: inputProps.value,
  };

  function handleAddToCart() {
    dispatch({
      type: ActionType.ADD,
      payload,
    });
  }

  function updateCartItem(quantity: number) {
    dispatch({
      type: ActionType.UPDATE,
      payload: { ...payload, quantity },
    });
  }

  return (
    <Wrapper>
      <PictureWrapper>
        <ResponsivePicture
          mobileSrc={`${process.env.PUBLIC_URL}${mobile.slice(1)}`}
          tabletSrc={`${process.env.PUBLIC_URL}${tablet.slice(1)}`}
          desktopSrc={`${process.env.PUBLIC_URL}${desktop.slice(1)}`}
          mediaMobile="(max-width: 768px)"
          alt={name}
        />
      </PictureWrapper>
      <ProductInformation>
        <StyledOverline>{isNew ? "New Product" : ""}</StyledOverline>
        <StyledH2>{name}</StyledH2>
        <StyledBody>{description}</StyledBody>
        <H6>$ {price}</H6>
        <ActionWrapper>
          {!isAddedToCart && <InputNumber {...inputProps} />}
          <Button
            onClick={handleAddToCart}
            variant="fill"
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "Added to Cart" : "Add To Cart"}
          </Button>
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
