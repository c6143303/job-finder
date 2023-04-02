import React from 'react';
import ModalDefault from "../../../components/modals/Modal.Default";
import styles from './Layout.module.scss'
import Preview from "./Preview";
import DefaultButton from "../../../components/buttons/DefaultButton";
interface IModal {
    show: boolean
    closeModal: () => void
}
const ModalSuccessful:React.FC<IModal> = ({show, closeModal}) => {
    return (
        <ModalDefault isOpen={show} closeHandler={closeModal}>
            <div className={styles.modalHead}>
                <h2 className={'neutral8 headline2'}>Congratulation!</h2>
                <p className={'body2'}>You tour has been booked! 🎉</p>
            </div>
            <div className={'divider-hor'}></div>
            <div className={styles.modalBody}>
                <DefaultButton buttonType={'border'} value={'Check status'}/>
            </div>
        </ModalDefault>
    );
};

export default ModalSuccessful;