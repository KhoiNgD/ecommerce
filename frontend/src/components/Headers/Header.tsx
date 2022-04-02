import { ReactComponent as Cart } from "assets/icon-cart.svg";
import styled from "styled-components";
import { Navigation } from "components/Navigation";
import { Logo } from "components/Logo";
import { CartDialog } from "components/Dialog";
import React from "react";
import { Container } from "components/Container";

type Props = { className?: string; isHomePage: boolean };
function Header({ className = "", isHomePage }: Props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  return (
    <Wrapper className={className} isHomePage={isHomePage}>
      <StyledContainer>
        <Logo />

        <Navigation />

        <CartWrapper>
          <Cart onClick={openDialog} />
        </CartWrapper>

        <CartDialog isOpen={showDialog} onDismiss={closeDialog} />
      </StyledContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ isHomePage: boolean }>`
  width: 100%;
  background: ${({ isHomePage }) =>
    isHomePage ? "transparent" : "hsl(var(--primary-dark))"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 1100px) {
    height: 90px;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(var(--primary-white) / 0.2);
`;

const CartWrapper = styled.div`
  cursor: pointer;
`;

export { Header };
