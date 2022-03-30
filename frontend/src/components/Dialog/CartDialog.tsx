import { DialogContent } from "@reach/dialog";
import { Button } from "components/Button/Button";
import { Container } from "components/Container";
import { InputNumber } from "components/InputNumber";
import { PriceDetail } from "components/PriceDetail";
import { ProductSummaryItem } from "components/ProductSummaryItem";
import { H6 } from "components/Typographies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Dialog } from "./Dialog";

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};
function CartDialog(props: Props) {
  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <StyledDialog {...props}>
      <Container>
        <StyledDialogContent aria-label="Cart">
          <TopWrapper>
            <H6>Cart (3)</H6>
            <Remove>Remove All</Remove>
          </TopWrapper>

          <Products>
            <ProductSummaryItem quantity={<InputNumber small maxValue={3} />} />
            <ProductSummaryItem quantity={<InputNumber small maxValue={3} />} />
            <ProductSummaryItem quantity={<InputNumber small maxValue={3} />} />
          </Products>

          <dl>
            <PriceDetail title="TOTAL" price="5,396" />
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

const Products = styled.ul`
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
