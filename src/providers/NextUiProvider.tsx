"use client";

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { type ThemeProviderProps } from "next-themes/dist/types";

const NextUiProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextUIProvider>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </NextUIProvider>
  );
};

export default NextUiProvider;
