'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

type PortfolioThemeProviderProps = React.PropsWithChildren<ThemeProviderProps>

export function ThemeProvider({ children, ...props }: PortfolioThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
