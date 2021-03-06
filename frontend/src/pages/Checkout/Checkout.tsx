import { CheckoutForm, CheckoutSummary } from "components/Checkout";
import { Container } from "components/Container";
import { PaySuccessDialog } from "components/Dialog";
import { NavigateBack } from "components/NavigateBack/NavigateBack";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  emoneyNumber?: string;
  emoneyPin?: string;
};

const schema = yup.object({
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Wrong format")
    .required("Can't be empty"),
  email: yup.string().email("Wrong format").required("Can't be empty"),
  phone: yup.string().required("Can't be empty"),
  address: yup.string().required("Can't be empty"),
  zipCode: yup.string().required("Can't be empty"),
  city: yup.string().required("Can't be empty"),
  country: yup.string().required("Can't be empty"),
  paymentMethod: yup
    .string()
    .equals(["emoney", "cash"])
    .required("Can't be empty"),
  emoneyNumber: yup.string().when("paymentMethod", {
    is: "emoney",
    then: yup.string().required("Can't be empty"),
  }),
  emoneyPin: yup.string().when("paymentMethod", {
    is: "emoney",
    then: yup.string().required("Can't be empty"),
  }),
});

function Checkout() {
  const [showDialog, setShowDialog] = React.useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const methods = useForm<FormData>({
    defaultValues: { paymentMethod: "emoney" },
    resolver: yupResolver(schema),
  });
  const onSubmit = methods.handleSubmit((data) => {
    openDialog();
  });

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

      <PaySuccessDialog isOpen={showDialog} onDismiss={closeDialog} />
    </Wrapper>
  );
}

const GoBack = styled(NavigateBack)`
  margin-bottom: 38px;

  @media (max-width: 1100px) {
    margin-bottom: 24px;
  }
`;

const Wrapper = styled.section`
  padding-top: calc(80px + 94px); // section padding + header height
  padding-bottom: 142px;
  background: #f1f1f1;

  @media (max-width: 1100px) {
    padding-top: calc(48px + 94px);
    padding-bottom: 116px;
  }

  @media (max-width: 550px) {
    padding-top: calc(16px + 94px);
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
