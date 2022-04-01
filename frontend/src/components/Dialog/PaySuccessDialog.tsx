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
          <Button variant="fill">Back To Home</Button>
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
  background: hsl(var(--primary-white));
  border-radius: var(--border-radius);
`;

const StyledH3 = styled(H3)``;
const StyledBody = styled(Body)``;

export { PaySuccessDialog };
