export const makeState = <S>(state: S) => (overrides?: Partial<S>) => ({
  ...state,
  ...overrides
});

export const pipe = (...fn: Function[]) => x => fn.reduce((a, b) => b(a), x);
