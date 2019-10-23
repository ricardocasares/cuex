import memo from "fast-memoize";

export const getMatchingSymbols = memo(state =>
  state.symbols.symbols.filter(([symbol, name]) => {
    return `${symbol} ${name}`
      .toLowerCase()
      .includes(state.symbols.query.toLowerCase());
  })
);
