export function is<T, K extends keyof T>(k: K, a: string, b: string) {
  return (props: T) => (props[k] ? a : b);
}
