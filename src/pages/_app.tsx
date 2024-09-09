import '../app/globals.css';
import type { AppProps } from 'next/app';
import { Chakra_Petch } from 'next/font/google';
import { ToastBar, Toaster } from 'react-hot-toast';

const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={chakraPetch.className}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
