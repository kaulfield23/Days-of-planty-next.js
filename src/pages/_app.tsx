import Navbar from '@/features/Navbar';
import '@/styles/globals.css'
import { PageWithLayout } from '@/utils';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const {...restProps} = pageProps;
  const c = Component as PageWithLayout;
  const getLayout = c.getLayout || ((page) => <>{page}</>);

  return (
  <>
    <Navbar/>
    {getLayout(<Component {...restProps} />, restProps)}
  </>
  )
}