import { CheckoutForm, CheckoutSummary } from "components/Checkout";
import { Container } from "components/Container";
import { NavigateBack } from "components/NavigateBack/NavigateBack";
import styled from "styled-components";

function Checkout() {
  return (
    <Wrapper>
      <Container>
        <GoBack />
        <Main>
          <Form />
          <Summary />
        </Main>
      </Container>
    </Wrapper>
  );
}

const GoBack = styled(NavigateBack)`
  margin-bottom: 38px;
`;

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 142px;
  background: #f1f1f1;
`;

const Form = styled(CheckoutForm)`
  flex: 1;
`;

const Summary = styled(CheckoutSummary)``;

const Main = styled.main`
  display: flex;
  gap: 30px;

  & ${Form}, & ${Summary} {
    background: hsl(var(--primary-white));
    border-radius: var(--border-radius);
    overflow: hidden;
  }
`;

export { Checkout };
