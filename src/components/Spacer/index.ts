import styled from "@emotion/styled";

export type Spacer = {
  x?: number;
  y?: number;
};

export const Spacer = styled.div<Spacer>`
  width: ${({ x }) => `${x}px`};
  height: ${({ y }) => `${y}px`};
`;
