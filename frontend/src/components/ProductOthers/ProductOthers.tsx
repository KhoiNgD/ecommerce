import { H3 } from "components/Typographies";
import { IProductOthers } from "helpers/types";
import styled from "styled-components";
import Other from "./Other";

type Props = { others: IProductOthers[] };
function ProductOthers({ others }: Props) {
  return (
    <Wrapper>
      <H3>You may also like</H3>
      <OthersWrapper>
        {others.map((other) => (
          <Other key={other.name} product={other} />
        ))}
      </OthersWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  text-align: center;
`;

const OthersWrapper = styled.ul`
  list-style: none;
  margin-top: 64px;
  display: flex;
  gap: 30px;

  & > * {
    flex: 1;
  }

  @media (max-width: 1100px) {
    margin-top: 56px;
    gap: 11px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    flex-direction: column;
    gap: 56px;
  }
`;

export { ProductOthers };
