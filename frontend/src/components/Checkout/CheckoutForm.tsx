import { H3 } from "components/Typographies";
import styled from "styled-components";

type Props = { className?: string };
function CheckoutForm({ className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <Title>Checkout</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;
`;

const Title = styled(H3)`
  margin-top: calc(54px - 48px);
`;

export { CheckoutForm };
