import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import Provider
import store from "@/store/store"; // Import store

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> {/* Wrap with Provider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
