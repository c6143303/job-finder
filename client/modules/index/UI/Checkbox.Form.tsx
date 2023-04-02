import React from 'react';

import styles from './index.module.scss'
import LabelWrapper from "./LabelWrapper";
import Checkbox from "../../../components/inputs/Checkbox";
import {ICategories} from "../../../interfaces";

interface IFilterForm {
    label: string
    options: ICategories[]
    handler: (e: number) => void
    name: string
}
const CheckboxForm:React.FC<IFilterForm> = ({label,options, handler, name}) => {
    return (
        <div className={styles.container}>
            <p className={'hairline2 neutral5 mb-24'}>{label}</p>
            {options.map((e, index) => {
                return (
                    <LabelWrapper key={index} onInput={() => handler(index)}>
                        <Checkbox readOnly={true} checked={e.checked}/>
                        <p className={'neutral8'}>{e.name}</p>
                    </LabelWrapper>
                )
            })}
        </div>
    );
};

export default CheckboxForm;