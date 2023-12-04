import Image from "next/image";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import UserDataProvider from "../hooks/userDataContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (session) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setShowHeader(true);
  }, []);

  return (
    <SessionProvider session={session}>
      {showHeader && <Header />}

      <UserDataProvider>
        <Component {...pageProps} />
      </UserDataProvider>
    </SessionProvider>
  );
};

const Header = () => {
  return (
    <div className="fixed z-50 flex w-full justify-end">
      <div className="relative mr-4 mt-4 h-12 w-12 overflow-hidden rounded-full bg-white">
        <Image
          className=""
          src={"/dogImage.svg"}
          alt={"User Profile Image"}
          fill
          style={{ transform: "scale(1.2)" }}
        ></Image>
      </div>
    </div>
  );
};

export default MyApp;
