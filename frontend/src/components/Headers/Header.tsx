import { ReactComponent as Cart } from "assets/icon-cart.svg";
import styled from "styled-components";
import { Navigation } from "components/Navigation";
import { Logo } from "components/Logo";
import { CartDialog, MenuDialog } from "components/Dialog";
import React from "react";
import { Container } from "components/Container";
import { ReactComponent as Hamburger } from "assets/icon-hamburger.svg";

type Props = { className?: string; isHomePage: boolean };
function Header({ className = "", isHomePage }: Props) {
  const [showCartDialog, setShowCartDialog] = React.useState(false);
  const openCartDialog = () => setShowCartDialog(true);
  const closeCartDialog = () => setShowCartDialog(false);

  const [showMenuDialog, setShowMenuDialog] = React.useState(false);
  const openMenuDialog = () => setShowMenuDialog(true);
  const closeMenuDialog = () => setShowMenuDialog(false);

  return (
    <Wrapper className={className} isHomePage={isHomePage}>
      <StyledContainer>
        <StyledHamburger onClick={openMenuDialog} />
        <Side>
          <Logo />
        </Side>
        <StyledNavigation />
        <Side>
          <Cart onClick={openCartDialog} />
        </Side>

        <MenuDialog isOpen={showMenuDialog} onDismiss={closeMenuDialog} />
        <CartDialog isOpen={showCartDialog} onDismiss={closeCartDialog} />
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

const Side = styled.div`
  flex: 1;

  & > svg {
    margin-left: auto;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    flex: revert;

    &:first-of-type {
      margin-right: auto;
    }
  }

  @media (max-width: 550px) {
    &:first-of-type {
      margin: 0;
    }
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 36px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(var(--primary-white) / 0.2);

  @media (max-width: 550px) {
    justify-content: space-between;
  }
`;

const StyledHamburger = styled(Hamburger)`
  display: none;
  cursor: pointer;

  @media (max-width: 1100px) {
    display: revert;
    margin-right: 42px;
  }

  @media (max-width: 550px) {
    margin: 0;
  }
`;

const StyledNavigation = styled(Navigation)`
  @media (max-width: 1100px) {
    display: none;
  }
`;

export { Header };
