import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.jpeg";

import React, { FC } from "react";
import Link from "next/link";

require("@solana/wallet-adapter-react-ui/styles.css");

import styles from "../styles/App.module.css";

// import { BioElement } from "../components/BioElement/BioElement";
// import { NavAppBar } from "../components/Navbar/Navbar";
// import { RouleteButton } from "../components/RouleteButton/RouleteButton";
import { BioElement, NavAppBar, RouleteButton  } from "../components/componentIndex";

import twitterLogo from "../public/twitter-logo.svg";
import githubLogo from "../public/github-logo.svg";

const HANDLE = [
  "https://twitter.com/UjjwalG52261234",
  "https://github.com/UjjwalGupta49/",
];
const LOGO = [twitterLogo, githubLogo];

export const App: FC = () => {
  return (
    <div>
      
        <div className={styles.navbarPosition}>
          {" "}
          <NavAppBar />
        </div>

        <div>
          <div className={styles.logo}>
            <Image
              alt="Logo"
              src={logo}
              width="150px"
              height="150px"
              layout="fixed"
            />
          </div>
          <div className={styles.baseAppText}>
            <h1>
              <div className={styles.classDegen}>Degen</div> Roulette
            </h1>
          </div>
          <div className={styles.RouleteButton}>
            <Link href="/degen">
              <a>
                <RouleteButton />
              </a>
            </Link>
          </div>
        </div>

      <div>
        <BioElement logo={LOGO} link={HANDLE}></BioElement>
      </div>
    </div>
  );
};

export default App;
