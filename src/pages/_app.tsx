import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux'
import { persistor, store } from "@/store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from "next-auth/react";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <Provider store = {store}>
      <PersistGate persistor = {persistor} loading={null}>
        <SessionProvider session={session}>
          <div className={`${dmSans.className} bg-gray-300`}>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
