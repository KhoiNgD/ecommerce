import { ReactComponent as Cart } from "assets/icon-cart.svg";
import styled from "styled-components";
import { Navigation } from "components/Navigation";
import { Logo } from "components/Logo";
import { CartDialog } from "components/Dialog";
import React from "react";

type Props = { className?: string };
function Header({ className = "" }: Props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  return (
    <Wrapper className={className}>
      <Logo />

      <Navigation />

      <CartWrapper>
        <Cart onClick={openDialog} />
      </CartWrapper>

      <CartDialog isOpen={showDialog} onDismiss={closeDialog} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 97px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    height: 90px;
  }
`;

const CartWrapper = styled.div`
  cursor: pointer;
`;

export { Header };
