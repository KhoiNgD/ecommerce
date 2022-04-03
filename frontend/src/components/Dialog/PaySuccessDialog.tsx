import { DialogContent } from "@reach/dialog";
import { Button } from "components/Button/Button";
import { Container } from "components/Container";
import { Body, H3 } from "components/Typographies";
import styled from "styled-components";
import { Dialog } from "./Dialog";

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};
function PaySuccessDialog(props: Props) {
  return (
    <StyledDialog {...props}>
      <Container>
        <StyledDialogContent aria-label="Payment Success">
          <StyledH3>THANK YOU FOR YOUR ORDER</StyledH3>
          <StyledBody>
            You will receive an email confirmation shortly.
          </StyledBody>
          <StyledButton variant="fill">Back To Home</StyledButton>
        </StyledDialogContent>
      </Container>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)`
  display: flex;
`;

const StyledDialogContent = styled(DialogContent)`
  width: fit-content;
  margin: auto;
  padding: 48px;
  background: hsl(var(--primary-white));
  border-radius: var(--border-radius);

  @media (max-width: 550px) {
    padding: 32px;
  }
`;

const StyledH3 = styled(H3)`
  margin-bottom: 24px;
`;

const StyledBody = styled(Body)`
  margin-bottom: 32px;
  color: hsl(var(--primary-dark) / 0.5);
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export { PaySuccessDialog };
