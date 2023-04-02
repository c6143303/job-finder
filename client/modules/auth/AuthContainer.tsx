"use client";
import { observer } from "mobx-react";
import React, { ReactNode, useContext, useEffect } from "react";
import AuthService from "services/AuthService";
import CompanyService from "services/CompanyService";
import Provider, { Context } from "./store/Provider";

const AuthContainer = observer(({ children }: { children: ReactNode }) => {
  const store = useContext(Context);
  useEffect(() => {
    const fetch = async () => {
      await AuthService.verify();
      store.isAuth = true;
      const company = await CompanyService.getCompanyById();
      store.company = company;
      store.isFetched = true;
    };

    fetch();
  }, [store]);

  if (!store._isFetched) return null;
  return <Provider>{children}</Provider>;
});

export default AuthContainer;
