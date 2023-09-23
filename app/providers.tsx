"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import definedTheme from "@/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={definedTheme}>
        <Global
          styles={css`
            @media print {
              body *,
              *::before,
              *::after {
                -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
                color-adjust: exact !important; /*Firefox*/
              }

              .not-print {
                display: none !important;
              }
              .print-area {
                width: 100vw !important;
                height: 100vh !important;
                padding-left: 0 !important;
                margin: 0 !important;
                transform: scale(1) !important;
              }
              .print {
                display: block !important;
              }
            }

            @page {
              size: Letter portrait;
            }
          `}
        />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
