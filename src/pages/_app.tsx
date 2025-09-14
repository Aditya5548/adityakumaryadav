import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import '@/styles/admin.css'
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  <Toaster position='bottom-right' toastOptions={{style:{marginTop:"100px",padding:"10px"}}} reverseOrder={false} />
  </>
);
}
