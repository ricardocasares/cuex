import styled from "@emotion/styled";

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 30px;
  padding: 0;
  text-align: right;
  outline: none;
  width: 100%;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
