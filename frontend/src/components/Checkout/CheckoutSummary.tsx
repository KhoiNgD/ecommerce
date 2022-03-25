import { H6 } from "components/Typographies";
import styled from "styled-components";

type Props = { className?: string };
function CheckoutSummary({ className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <Title>Summary</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 32px;
`;

const Title = styled(H6)``;

export { CheckoutSummary };
