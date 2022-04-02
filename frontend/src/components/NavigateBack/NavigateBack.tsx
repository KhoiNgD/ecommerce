import { Body } from "components/Typographies";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = { className?: string };
function NavigateBack({ className = "" }: Props) {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <Wrapper className={className} onClick={navigateBack}>
      Go back
    </Wrapper>
  );
}

const Wrapper = styled(Body)`
  width: max-content;
  cursor: pointer;
  color: hsl(var(--primary-dark) / 0.5);
`;

export { NavigateBack };
