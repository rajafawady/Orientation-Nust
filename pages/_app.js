import { ThemeProvider } from 'next-themes'
import { ClickProvider } from '../context/GlobalProvider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ClickProvider>
      <ThemeProvider attribute='class'>

        <Component {...pageProps} />

      </ThemeProvider>
    </ClickProvider>
  );
}

export default MyApp;
