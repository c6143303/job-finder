"use client";
import React, { useContext, useEffect, useState } from "react";

import styles from "./components/Layout.module.scss";
import Announce from "./components/Announce";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Container from "../../components/containers/Container";
import ModalSuccessful from "./components/Modal.Successful";
import LayoutWrapper from "../../components/custom/LayoutWrapper";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useSearchParams } from "next/navigation";
import { observer, Provider } from "mobx-react";
import { Context } from "./store/Provider";
import useForm from "../../hooks/UseForm";
import {
  IDropdownOption,
  IFormData,
  IProduct,
  ISubItem,
} from "../../interfaces";
import { $DATE } from "../../util/const";
import SubServices from "../../services/SubServices";
import { runInAction } from "mobx";
import { flattenedObject } from "../../util/FlattenedObject";
import { ProductService } from "../../services/ProductService";
import { useRouter } from "next/navigation";
import { rewriteVariableInside } from "util/rewriteVariableInside";
import Portal from "components/custom/Portal";
import LoadingSpinner from "components/loadingSpinner/LoadingSpinner";
import useFetching from "hooks/useLoadingSpinner";

const Layout = observer(() => {
  const router = useRouter();
  const _form: IFormData = {
    fields: {
      title: {
        value: "",
        rules: "required",
      },
      salaryFrom: {
        value: "",
        rules: "required|numeric",
      },
      salaryTill: {
        value: "",
        rules: "required|numeric",
      },
      description: {
        value: "",
        rules: "required",
      },
      categoryId: {
        value: "",
        rules: "required",
      },
      typeId: {
        value: "",
        rules: "required",
      },
      expires: {
        value: $DATE,
        rules: `required|test:${new Date()}`,
      },
      position: {
        value: "",
        rules: `required`,
      },
    },
  };
  const searchParams = useSearchParams();
  const hasEditQuery = searchParams.has("edit");
  const editId = Number(searchParams.get("id"));
  const editMode = hasEditQuery && editId;
  const [fetchedTypes, setFetchedTypes] = useState<IDropdownOption[] | []>([]);
  const [fetchedCategories, setFetchedCategories] = useState<
    IDropdownOption[] | []
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const UseFetching = useFetching();
  const submitFormHandler = async () => {
    const formDataToSend = flattenedObject(UseForm.values, "value") as IProduct;

    if (editMode) {
      try {
        UseFetching.setIsFetching(true);
        const res = await ProductService.updateById({
          ...formDataToSend,
          id: editId,
        });
        UseFetching.setIsFetching(false);
        router.push("/account");
      } catch (e) {
        console.log("alert");
      }
    } else {
      try {
        const res = await ProductService.addProduct(formDataToSend);
        // openModal()
      } catch (e) {
        alert("error");
      }
    }
  };
  const UseForm = useForm(_form, submitFormHandler);
  const [showModal, setShowModal] = useState(false);
  const [activeType, setActiveType] = useState<IDropdownOption>();
  const [activeCategory, setActiveCategory] = useState<IDropdownOption>();

  const store = useContext(Context);
  useEffect(() => {
    const fetch = async () => {
      const fetchedTypesDB = await SubServices.getTypes();
      const fetchedCategoriesDB = await SubServices.getCategories();
      setFetchedCategories(rewriteVariableInside(fetchedCategoriesDB));
      setFetchedTypes(rewriteVariableInside(fetchedTypesDB));

      setIsLoading(true);
      if (editMode) {
        const fetchedProduct = await store.fetchProduct(editId);
        if (fetchedProduct) {
          const copy = { ..._form };
          Object.keys(copy["fields"]).map((name) => {
            _form["fields"][name]["value"] = fetchedProduct[name];
          });
          copy["fields"]["expires"]["value"] = new Date(
            copy["fields"]["expires"]["value"]
          );

          UseForm.setValues(copy);
        }
      }
    };

    fetch();
  }, []);

  if (!isLoading) return null;

  return (
    <Provider>
      {UseFetching.html}
      <div className={styles.container}>
        <Container>
          <ModalSuccessful
            closeModal={() => setShowModal(false)}
            show={showModal}
          />
          <div className={styles.postJob}>
            <div className={styles.postJobLeft}>
              <Announce />
              <Form
                activeType={activeType}
                setActiveType={setActiveType}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                fetchedTypes={fetchedTypes}
                fetchedCategories={fetchedCategories}
                UseForm={UseForm}
                openModal={() => setShowModal(true)}
              />
            </div>
            <div className={styles.postJobRight}>
              <Preview
                activeType={activeType}
                activeCategory={activeCategory}
                UseForm={UseForm}
              />
            </div>
          </div>
        </Container>
      </div>
    </Provider>
  );
});

export default Layout;
