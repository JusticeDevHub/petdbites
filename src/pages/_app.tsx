import Image from "next/image";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { TbArrowBackUp } from "react-icons/tb";

import "../styles/globals.css";
import UserDataProvider from "../hooks/userDataContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UserDataProvider>
        <Header />
        <Component {...pageProps} />
      </UserDataProvider>
    </SessionProvider>
  );
};

const Header = () => {
  const router = useRouter();

  if (router.pathname === "/") {
    return null;
  }

  return (
    <div className="fixed z-50 flex w-full justify-between">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <TbArrowBackUp
          className="ml-3 mt-3 cursor-pointer text-4xl text-white"
          onClick={() => {
            router.back();
          }}
        />
      </motion.div>

      <div
        className="relative mr-3 mt-3 h-12 w-12 cursor-pointer overflow-hidden rounded-full bg-white"
        onClick={() => {
          router.push("/profile");
        }}
      >
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
