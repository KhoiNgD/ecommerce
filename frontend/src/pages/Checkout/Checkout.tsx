import { CheckoutForm, CheckoutSummary } from "components/Checkout";
import { Container } from "components/Container";
import { NavigateBack } from "components/NavigateBack/NavigateBack";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

type FormData = {
  // Billing Details
  name: string;
  email: string;
  phone: string;
  // Shipping Info
  address: string;
  zipCode: string;
  city: string;
  country: string;
  // Payment Details
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

function Checkout() {
  const methods = useForm<FormData>({
    defaultValues: { paymentMethod: "emoney" },
  });
  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <Wrapper>
      <Container>
        <GoBack />
        <FormProvider {...methods}>
          <Form onSubmit={onSubmit}>
            <StyledCheckoutForm />
            <Summary />
          </Form>
        </FormProvider>
      </Container>
    </Wrapper>
  );
}

const GoBack = styled(NavigateBack)`
  margin-bottom: 38px;

  @media (max-width: 1100px) {
    margin-bottom: 24px;
  }
`;

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 142px;
  background: #f1f1f1;

  @media (max-width: 1100px) {
    padding-top: 48px;
    padding-bottom: 116px;
  }

  @media (max-width: 550px) {
    padding-top: 16px;
    padding-bottom: 96px;
  }
`;

const StyledCheckoutForm = styled(CheckoutForm)`
  flex: 1;
`;

const Summary = styled(CheckoutSummary)`
  min-width: 350px;
  align-self: flex-start;

  @media (max-width: 1100px) {
    min-width: revert;
    align-self: revert;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 30px;

  & ${StyledCheckoutForm}, & ${Summary} {
    background: hsl(var(--primary-white));
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export { Checkout };
