import styled from "@emotion/styled";
import { is } from "@/css/helpers"

export type CurrencyBlock = {
  dark?: boolean;
};

export const CurrencyBlock = styled.div<CurrencyBlock>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${is("dark", "#f2f4f3", "#ffffff")};
`;
