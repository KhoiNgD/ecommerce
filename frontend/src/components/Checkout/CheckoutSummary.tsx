import { Button } from "components/Button/Button";
import { ProductSummary } from "components/ProductSummary";
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
      <Products>
        <ProductSummary quantity={<Quantity />} />
        <ProductSummary quantity={<Quantity />} />
        <ProductSummary quantity={<Quantity />} />
      </Products>
      <TotalSummary>
        <Row>
          <StyledBody>TOTAL</StyledBody>
          <StyledH6>$ 5,396</StyledH6>
        </Row>
        <Row>
          <StyledBody>SHIPPING</StyledBody>
          <StyledH6>$ 50</StyledH6>
        </Row>
        <Row>
          <StyledBody>VAT (INCLUDED)</StyledBody>
          <StyledH6>$ 1,079</StyledH6>
        </Row>
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

const Wrapper = styled.div`
  padding: 32px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Products = styled.div`
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

const TotalSummary = styled.div`
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
