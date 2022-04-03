import { FormLabel } from "components/FormLabel";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type Props = {
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  className?: string;
};
function TextField({
  label,
  placeholder,
  id,
  type = "text",
  className = "",
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const isError = Boolean(errors[id]?.message);

  return (
    <Wrapper className={className}>
      <StyledLabel isError={isError} htmlFor={id}>
        {label}
      </StyledLabel>
      <Input
        isError={isError}
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id)}
      />
      <ErrorMessage>{errors[id]?.message}</ErrorMessage>
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const StyledLabel = styled(FormLabel)<{ isError: boolean }>`
  color: ${({ isError }) => isError && "#cd2c2c"};
`;

const Input = styled.input<{ isError: boolean }>`
  padding: 20px 24px;
  outline: none;
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? "#cd2c2c" : "#cfcfcf")};
  border-radius: var(--border-radius);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  caret-color: hsl(var(--primary-color));
  color: hsl(var(--primary-dark));

  &:hover,
  &:active,
  &:focus {
    border-color: ${({ isError }) =>
      isError ? "#cd2c2c" : "hsl(var(--primary-color))"};
  }

  &::placeholder {
    color: hsl(var(--primary-dark) / 0.4);
  }

  @media (max-width: 1100px) {
    padding: 18px 24px;
  }
`;

const ErrorMessage = styled.strong`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.21;
  color: #cd2c2c;

  position: absolute;
  top: 0;
  right: 0;
`;

export { TextField };
