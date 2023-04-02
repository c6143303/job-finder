import React from 'react';

import styles from './notificationLabel.module.scss'
import {ILabel, Variant} from "../../interfaces";

const $STYLES = {
    'approved': styles.approved,
    'process': styles.process,
    'canceled': styles.canceled,

}
const NotificationLabel:React.FC<ILabel> = ({variant, label}) => {
    return (
        <div className={$STYLES[variant]}>
            {label}
        </div>
    );
};

export default NotificationLabel;