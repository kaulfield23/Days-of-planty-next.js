import Navbar from 'features/Navbar';
import { Metadata } from 'next';
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
      <body suppressHydrationWarning={true}>
        <ProvidersWrapper>
          <Navbar />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
