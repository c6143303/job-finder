import React, {ReactFragment, ReactNode} from 'react';
import styles from "./formColumn.module.scss";


interface IFormCol {
    children: ReactNode
}
const FormColumn:React.FC<IFormCol> = ({children}) => {
    return (
        <div className={styles.formCol}>
            {children}
        </div>
    );
};

export default FormColumn;