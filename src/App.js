import logo from './logo.svg';
import './App.css';
import crypto from "crypto";

import { AppProps } from "next";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = BigInt(
  parseInt(crypto.randomBytes(20).toString("hex"), 16)
).toString(); // random value.

import { AnonAadhaarProvider } from "anon-aadhaar-react";


export default function App({ Component, pageProps }) {
  return (
    // Add the Country Identity Provider at the root of your app
    React.createElement(
      AnonAadhaarProvider,
      { _appId: app_id },
      {_testing: false},
      React.createElement(Component, pageProps)
    )
  );
}

export default function Home() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <div>
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
    </div>
  );
}


