import React, { useContext, useEffect, useState } from "react";
import Personal from "./Personal";
import Help from "./Help";
import JobApplications from "./JobApplications";

import { Context } from "../store/Provider";
import { observer } from "mobx-react";
import Notifications from "./Notifications";
import { IFormData } from "../../../interfaces";
import useForm from "../../../hooks/UseForm";

const DisplayBody = observer(({ UseForm }: any) => {
  const store = useContext(Context);

  if (store.activeLink === 0)
    return <Personal UseForm={UseForm} key={"pers"} />;
  else if (store.activeLink === 1) return <JobApplications key={"app"} />;
  else if (store.activeLink === 2) return <Help key={"helps"} />;
  else if (store.activeLink === 3) return <Notifications key={"messages"} />;
  else return null;
});

export default DisplayBody;
