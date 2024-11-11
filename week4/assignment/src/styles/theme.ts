import { css } from "@emotion/react";

const theme = {
  colors: {
    green1: "#E9EFEC",
    green2: "#C4DAD2",
    green3: "#6A9C89",
    green4: "#16423C",

    white: "ffffff",

    black1: "#000000B3",
    black2: "000000",
  },

  fonts: {
    title: css`
      font-size: 2rem;
      font-weight: 700;
    `,
    subTitle: css`
      font-size: 1.5rem;
      font-weight: 700;
    `,
    content: css`
      font-size: 1rem;
      font-weight: 500;
    `,
  },
};

export default theme;
