import { DialogContent } from "@reach/dialog";
import { Button } from "components/Button/Button";
import { Container } from "components/Container";
import { InputNumber } from "components/InputNumber";
import { PriceDetail } from "components/PriceDetail";
import { ProductSummaryItem } from "components/ProductSummaryItem";
import { H6 } from "components/Typographies";
import { useCart } from "contexts/cart-context";
import { ActionType } from "contexts/cart-context.types";
import { useInputNumber } from "hooks/input-number";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Dialog } from "./Dialog";

function Quantity({
  quantity,
  update,
}: {
  quantity: number;
  update: (quantity: number) => void;
}) {
  const inputProps = useInputNumber({ defaultValue: quantity, update });
  return <InputNumber small {...inputProps} />;
}

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};
function CartDialog(props: Props) {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  function navigateToCheckout() {
    navigate("/checkout");
  }

  function clearCart() {
    dispatch({ type: ActionType.CLEAR });
  }

  function generateProductItem() {
    return state.products.map((product) => {
      function updateCartItem(quantity: number) {
        dispatch({
          type: ActionType.UPDATE,
          payload: {
            name: product.name,
            price: product.price,
            slug: product.slug,
            quantity,
          },
        });
      }

      return (
        <ProductSummaryItem
          key={product.name}
          {...product}
          quantity={
            <Quantity quantity={product.quantity} update={updateCartItem} />
          }
        />
      );
    });
  }

  return (
    <StyledDialog {...props}>
      <Container>
        <StyledDialogContent aria-label="Cart">
          <TopWrapper>
            <H6>Cart ({state.products.length})</H6>
            <Remove onClick={clearCart}>Remove All</Remove>
          </TopWrapper>

          <ProductList>
            {state.products.length ? generateProductItem() : "Cart is empty"}
          </ProductList>

          <dl>
            <PriceDetail title="TOTAL" price={state.total} />
          </dl>

          <StyledButton onClick={navigateToCheckout} variant="fill">
            CHECKOUT
          </StyledButton>
        </StyledDialogContent>
      </Container>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)``;

const StyledDialogContent = styled(DialogContent)`
  width: 377px;
  padding: 0 32px;
  margin: 0;
  margin-top: calc(97px + 36px); // Header height + margin
  margin-left: auto;
  background: hsl(var(--primary-white));
  border-radius: var(--border-radius);

  @media (max-width: 1100px) {
    margin-top: calc(90px + 36px); // Header height + margin
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 0 28px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 26px;
`;

const Remove = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0;
  color: hsl(var(--primary-dark) / 0.5);
  text-decoration: underline;
  cursor: pointer;
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 36px;
`;

export { CartDialog };
