import ToastContainer from '../components/notification/ToastContainer';
import { AuthProvider } from '../hooks/auth';
import { ToastProvider } from '../hooks/toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return( 
    <AuthProvider>
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer/>
      </ToastProvider>
    </AuthProvider>
  )
};

export default MyApp;
