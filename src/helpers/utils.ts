export const makeState = <S>(state: S) => (overrides?: Partial<S>) => ({
  ...state,
  ...overrides
});
