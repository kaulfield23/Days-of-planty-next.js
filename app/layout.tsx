import { Metadata } from 'next';
// import { ThemeProvider } from '@mui/material';
// import { theme } from './styles/theme';
import Navbar from './components/features/Navbar';
import './globals.css';
import ProvidersWrapper from './ProvidersWrapper';

export const metadata: Metadata = {
  title: 'Days of Planty',
  description: 'Plant diary',
  keywords: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Material UI'],
  authors: [
    {
      name: 'Haeju eom',
      url: 'https://github.com/kaulfield23',
    },
  ],
  creator: 'Haeju Eom',
  publisher: 'Haeju Eom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <Navbar />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
