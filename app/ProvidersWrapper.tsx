'use client';

import { ThemeProvider } from '@mui/material';
import { ReduxProvider } from 'redux/provider';
import { theme } from 'styles/theme';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
}
