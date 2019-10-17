import styled from "@emotion/styled";
import { is } from "@/css/helpers";

export type Paragraph = {
  overdraft: boolean;
};

export const Paragraph = styled.p<Paragraph>`
  font-size: 14px;
  color: ${is("overdraft", "#fd1f8f", "#777")};
`;
