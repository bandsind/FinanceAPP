// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColorOptions {
    main?: string;
    light?: string;
    dark?: string;
  }

  interface PaletteColor extends PaletteColorOptions {
    [key: number]: string; // Allow numeric keys in addition to named keys
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
