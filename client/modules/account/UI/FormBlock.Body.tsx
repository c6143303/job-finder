import React from 'react';
import styles from "../components/layout.module.scss";
import FormColumn from "../../../components/containers/FormColumn";
import FormLabel from "../../../components/inputs/FormLabel";
import DefaultInput from "../../../components/inputs/DefaultInput";
import Dropdown from "../../../components/dropdown/Dropdown";
import UploadInput from "../../../components/inputs/UploadInput";

const FormBlockBody = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.blockFields}>
            {children}
        </div>
    );
};

export default FormBlockBody;