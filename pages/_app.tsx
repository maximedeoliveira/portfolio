import type { AppProps } from 'next/app';
import '@/styles/tailwind.css';
import '@fontsource/nunito';
import ThemeToggle from '@/components/ThemeToggle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="w-screen h-screen dark:bg-gray-900">
            <Component {...pageProps} />
            <ThemeToggle />
        </main>
    );
}

export default MyApp;
