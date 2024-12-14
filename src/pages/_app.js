import '@/styles/globals.css';
import '@/styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from '/components/layout/header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';
import { CookiesProvider } from "react-cookie";
import { useRouter } from 'next/router';
import { PatientProvider } from '@/context/patientContext';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <CookiesProvider>
      <PatientProvider>
      <AuthProvider>
        {router.pathname !== "/pages/auth/login" && <Header />}
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
        </PatientProvider>
    </CookiesProvider>
  );
}
