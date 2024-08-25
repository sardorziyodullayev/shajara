import {
  Button,
  createTheme,
  darken,
  defaultVariantColorsResolver,
  MantineProvider,
  parseThemeColor,
  rem,
  rgba,
  VariantColorsResolverInput,
} from "@mantine/core"; 
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import { ComponentType, createElement } from "react";

const theme = createTheme({
  variantColorResolver: (input: VariantColorsResolverInput) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
      color: input.color || input.theme.primaryColor,
      theme: input.theme,
    });

    if (input.variant === "filled" || input.variant === "default") {
      return {
        hover: "#FDB022",
        color: "#FFF",
        background: "#FDB022",
        border: "none",
        hoverColor: "#FFF",
      };
    }

    if (input.variant === "outline") {
      return {
        background: rgba(parsedColor.value, 0),
        hover: rgba(parsedColor.value, 0),
        border: `${rem(1)} solid ${parsedColor.value}`,
        color: darken(parsedColor.value, 0),
        hoverColor: "#000",
      };
    }

    if (input.variant === "danger") {
      return {
        background: "var(--mantine-color-red-9)",
        hover: "var(--mantine-color-red-8)",
        color: "var(--mantine-color-white)",
        border: "none",
      };
    }

    return defaultResolvedColors;
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "#FDB022",
        variant: "filled",
        radius: "10px",
        ff: "Rubik, sans-serif",
        fz: "16px",
        fw: 500,
        fs: "normal",
        lh: "19.2px",
      },
      styles: {
        root: { transition: "all 300ms" },
      },
    }),
  },
});

export const withMantine = (component: ComponentType) => () => {
  return (
    <MantineProvider withCssVariables theme={theme}>
      {createElement(component)}
    </MantineProvider>
  );
};
