import memo from "fast-memoize";

export const getMatchingSymbols = state =>
  state.symbols.symbols.filter(([symbol, name]) => {
    return `${symbol} ${name}`
      .toLowerCase()
      .includes(state.symbols.query.toLowerCase());
  });

export const filterSymbols = memo(getMatchingSymbols);
