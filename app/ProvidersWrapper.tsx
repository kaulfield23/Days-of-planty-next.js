'use client';

import { ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'redux/store';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
}
