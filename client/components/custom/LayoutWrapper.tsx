"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../modules/navbar/Navbar";
import Footer from "../footer/Footer";
import { Context } from "../../modules/auth/store/Provider";
import { log } from "console";
import { observer } from "mobx-react-lite";

const LayoutWrapper = observer(
  ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);
    const store = useContext(Context);

    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  }
);

export default LayoutWrapper;
