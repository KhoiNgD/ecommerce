import { Button } from "components/Button/Button";
import { PriceDetail } from "components/PriceDetail";
import { ProductSummaryItem } from "components/ProductSummaryItem";
import { Body, H6 } from "components/Typographies";
import styled from "styled-components";

function Quantity() {
  return <ProductQuantity>x1</ProductQuantity>;
}

type Props = { className?: string };
function CheckoutSummary({ className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <H6>Summary</H6>
      <ProductList>
        <ProductSummaryItem quantity={<Quantity />} />
        <ProductSummaryItem quantity={<Quantity />} />
        <ProductSummaryItem quantity={<Quantity />} />
      </ProductList>
      <TotalSummary>
        <PriceDetail title="TOTAL" price="5,396" />
        <PriceDetail title="SHIPPING" price="50" />
        <PriceDetail title="VAT (INCLUDED)" price="1,079" />
      </TotalSummary>
      <GrandTotal>
        <Row>
          <StyledBody>GRAND TOTAL</StyledBody>
          <GrandPrice>$ 5,446</GrandPrice>
        </Row>
      </GrandTotal>
      <StyledButton type="submit" variant="fill">
        Continue & Pay
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 32px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0;
`;

const ProductQuantity = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: hsl(var(--primary-dark) / 0.5);
`;

const TotalSummary = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBody = styled(Body)`
  color: hsl(var(--primary-dark) / 0.5);
  letter-spacing: 0;
`;

const StyledH6 = styled(H6)`
  letter-spacing: 0;
`;

const GrandTotal = styled.div`
  padding-top: 24px;
  padding-bottom: 32px;
`;

const GrandPrice = styled(StyledH6)`
  color: hsl(var(--primary-color));
`;

export { CheckoutSummary };
