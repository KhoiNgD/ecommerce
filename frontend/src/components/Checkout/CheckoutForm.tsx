import { FormLabel } from "components/FormLabel";
import { Radio } from "components/Radio";
import { TextField } from "components/TextField";
import { H3, SubTitle } from "components/Typographies";
import styled from "styled-components";

type Props = { className?: string };
function CheckoutForm({ className = "" }: Props) {
  return (
    <Wrapper className={className}>
      <Title>Checkout</Title>
      <Form>
        <FormGroup>
          <StyledSubtitle>Billing Details</StyledSubtitle>
          <Fields>
            <TextField label="Name" placeholder="Alexei Ward" id="name" />
            <TextField
              type="email"
              label="Email Address"
              placeholder="alexei@mail.com"
              id="email"
            />
            <TextField
              label="Phone Number"
              placeholder="+1 202-555-0136"
              id="phone"
            />
          </Fields>
        </FormGroup>
        <FormGroup>
          <StyledSubtitle>Shipping Info</StyledSubtitle>
          <Fields>
            <EmailTextField
              label="Address"
              placeholder="1137 Williams Avenue"
              id="address"
            />
            <TextField label="Zip Code" placeholder="10001" id="zip" />
            <TextField label="City" placeholder="New York" id="city" />
            <TextField
              label="Country"
              placeholder="United States"
              id="country"
            />
          </Fields>
        </FormGroup>
        <FormGroup>
          <StyledSubtitle>Payment Details</StyledSubtitle>
          <Fields>
            <FormLabel htmlFor="payment">Payment Method</FormLabel>
            <RadioGroup>
              <Radio
                id="emoney"
                label="e-Money"
                name="payment"
                value="emoney"
              />
              <Radio
                id="cash"
                label="Cash on Delivery"
                name="payment"
                value="cash"
              />
            </RadioGroup>
            <TextField
              label="e-Money Number"
              placeholder="238521993"
              id="emoneyNumber"
            />
            <TextField label="e-Money PIN" placeholder="6891" id="emoneyPin" />
          </Fields>
        </FormGroup>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;

  @media (max-width: 1100px) {
    padding: 30px 26px;
  }

  @media (max-width: 550px) {
    padding: 24px;
  }
`;

const Title = styled(H3)`
  margin-top: calc(54px - 48px);

  @media (max-width: 550px) {
    margin: 0;
  }
`;

const Form = styled.form`
  margin-top: 40px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:first-of-type {
    margin-bottom: 52px;
  }

  &:last-of-type {
    margin-top: 60px;
  }

  @media (max-width: 550px) {
    &:first-of-type {
      margin-bottom: 32px;
    }

    &:last-of-type {
      margin-top: 32px;
    }
  }
`;

const StyledSubtitle = styled(SubTitle)`
  color: hsl(var(--primary-color));
`;

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 24px;

  @media (max-width: 550px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const EmailTextField = styled(TextField)`
  grid-column: 1 / -1;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export { CheckoutForm };
