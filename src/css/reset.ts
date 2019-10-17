import { css } from "@emotion/core";
import normalize from "emotion-normalize";

export const reset = css`
  ${normalize}
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  body {
    margin: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
  }
`;
