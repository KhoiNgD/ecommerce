import { DialogOverlay } from "@reach/dialog";
import styled from "styled-components";

import "@reach/dialog/styles.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onDismiss: () => void;
};
function Dialog(props: Props) {
  return <StyledDialogOverlay {...props} />;
}

const StyledDialogOverlay = styled(DialogOverlay)`
  background: hsl(var(--primary-dark) / 0.4);
  top: 90px;
`;

export { Dialog };
