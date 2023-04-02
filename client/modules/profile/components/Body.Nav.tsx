import React, {useContext} from 'react';
import styles from "../styles.module.scss";
import SubnavButton from "../../../components/nav/Subnav.Button";
import {Context} from "../store/Provider";
import {observer} from "mobx-react";

const BodyNav = observer(() => {
    const store = useContext(Context)

    return (
        <div className={styles.nav}>
            {store.navigateOptions.map(({id, text}) => {
                return (
                    <SubnavButton key={id} isActive={id === store.activeOption} value={text} onClick={() => store.activeOption = id}
                                  index={1}/>
                )
            })}
        </div>
    );
});

export default BodyNav;