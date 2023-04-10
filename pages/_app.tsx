import Layout from "@/components/ui/layout/layout";
import { NotificationContextProvider } from "@/store/notification-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NotificationContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NotificationContextProvider>
    );
}
