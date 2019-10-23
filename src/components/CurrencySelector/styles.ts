import styled from "@emotion/styled";
import { is } from "@/css/helpers";

// @TODO Move to components
export type Frame = {
  show: boolean;
};

export const Frame = styled.div<Frame>`
  display: ${is("show", "flex", "none")};
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 100;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const Item = styled.li`
  display: block;
  padding: 0;
  margin: 0;
  padding: 5px 15px;
`;

export const Search = styled.input`
  border: none;
  padding: 15px;
  min-width: 0;
  width: 100%;
  /* Never do this!! */
  outline: none;
`;

export const BackButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: white;
  padding: 15px;
  /* Never do this!! */
  outline: none;
`;

export const CurrencySymbol = styled.p`
  margin: 0;
  margin-bottom: 2px;
  font-size: 18px;
`;

export const CurrencyName = styled(CurrencySymbol)`
  color: #999;
  font-size: 14px;
`;
