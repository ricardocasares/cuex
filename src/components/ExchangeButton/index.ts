import styled from "@emotion/styled";

export const ExchangeButton = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 500;
  background: #fd1f8f;
  padding: 15px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 10px 10px #fd1f8f25;
  width: 100%;

  &[disabled] {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;
