import { DialogContent } from "@reach/dialog";
import { Menu } from "components/Menu";
import styled from "styled-components";
import { Dialog } from "./Dialog";

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};
function MenuDialog(props: Props) {
  return (
    <StyledDialog {...props}>
      <StyledDialogContent aria-label="Menu Navigation">
        <Menu />
      </StyledDialogContent>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)``;

const StyledDialogContent = styled(DialogContent)`
  width: 100%;
  padding: 56px 40px 68px;
  background: hsl(var(--primary-white));
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  @media (max-width: 550px) {
    padding: 32px 24px;
  }
`;

export { MenuDialog };
