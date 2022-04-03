import { ReactComponent as LogoIcon } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { className?: string };
function Logo(props: Props) {
  return (
    <LogoWrapper to="/" {...props}>
      <LogoIcon />
    </LogoWrapper>
  );
}

const LogoWrapper = styled(NavLink)``;

export { Logo };
