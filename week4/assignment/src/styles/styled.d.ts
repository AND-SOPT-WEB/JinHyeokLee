import "@emotion/react";
import { ColorsType, FontsType } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsType;
    fonts: FontsType;
  }
}
