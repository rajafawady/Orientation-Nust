import { ThemeProvider } from 'next-themes'
import TransitionEffect from '../components/Transitions/Transition'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
    <TransitionEffect>
      <Component {...pageProps} />
      </TransitionEffect>
    </ThemeProvider>
  );
}

export default MyApp;
