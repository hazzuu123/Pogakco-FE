import type { Preview } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { queryClient } from "../src/api/queryClient";
import FallbackUI from "../src/components/errorBoundary/FallbackUI";
import GlobalStyle from "../src/style/global";
import { light } from "../src/style/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={FallbackUI}>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle themeName="light" />
              <Story />
            </QueryClientProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    )
  ]
};

export default preview;
