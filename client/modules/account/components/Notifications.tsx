import React, { useCallback, useEffect, useState } from "react";
import Body from "../UI/Body";
import DropdownV1 from "../../../components/dropdown/Dropdown_v1";
import {
  ICompanyApplication,
  IDropdownOption,
  IDropdownOptions,
} from "../../../interfaces";
import styles from "./layout.module.scss";
import MessageCard from "../../../components/cards/messageCard/MessageCard";
import { ProductService } from "../../../services/ProductService";
import { FormServices } from "../../../services/FormServices";

const $OPTIONS: IDropdownOptions[] = [
  { value: "All", query: "" },
  { value: "Checked", query: "checked" },
  { value: "Not checked", query: "not-checked" },
];
const Notifications = () => {
  const [notificationsDB, setNotificationsDB] = useState<ICompanyApplication[]>(
    []
  );
  const [activeDropdownOption, setActiveDropdownOption] =
    useState<IDropdownOption>();
  const [fetchQuery, setQuery] = useState<string | undefined>(
    $OPTIONS[0]["query"]
  );
  const [isLoading, setIsLoading] = useState(false);
  const fetch = useCallback(async () => {
    const response = await FormServices.getCompanyApplications(fetchQuery);
    setNotificationsDB(response);
    setIsLoading(true);
  }, [fetchQuery]);

  useEffect(() => {
    fetch();
  }, [fetch, fetchQuery]);

  function dropdownHandler(option: IDropdownOption) {
    setActiveDropdownOption(option);
    setQuery(option.query);
  }

  function downloadCvHandler(cvLink: string) {
    cvLink = cvLink.split("uploads\\")[1];
    window.location.href = process.env.NEXT_PUBLIC_BASE_URL + cvLink;
  }

  function updateCheckedStatus(id: number) {
    FormServices.updateApplicationStatus(id).then((e) => {
      fetch();
    });
  }

  return (
    <Body>
      <Body.Label label={"Notifications"}>
        <DropdownV1
          option={activeDropdownOption}
          onChange={(event) => dropdownHandler(event)}
          className={styles.messagesDropdown}
          options={$OPTIONS}
        />
      </Body.Label>
      <div className={styles.applications}>
        {!notificationsDB.length
          ? "empty"
          : notificationsDB.map(
              ({ id, message, cv, lastname, name, email, date, checked }) => {
                return (
                  <MessageCard
                    updateCheckedStatus={() => updateCheckedStatus(id)}
                    downloadCvHandler={() => downloadCvHandler(cv)}
                    key={id}
                    checked={checked}
                    date={date}
                    lastname={lastname}
                    userName={name}
                    message={message}
                    cv={cv}
                    email={email}
                  />
                );
              }
            )}
      </div>
    </Body>
  );
};

export default Notifications;
