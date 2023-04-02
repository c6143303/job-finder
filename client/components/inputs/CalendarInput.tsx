import React, {useState} from 'react';

import styles from './calendarInput.module.scss'
import editIcon from '/public/images/edit.svg'
import Image from "next/image";
import Calendar from 'react-calendar'
import ModalDefault from "../modals/Modal.Default";
import {$MONTHS} from "../../util/const";

interface ICalendarInput {
    defaultValue: Date
    calendarClickHandler: (e:Date) => void
}
const currentDate = new Date()

const CalendarInput: React.FC<ICalendarInput> = ({defaultValue, calendarClickHandler}) => {
    const [isOpenCalendar, setIsOpenCalendar] = useState(false)
    const [date, setDate] = useState(defaultValue || new Date())

    return (
        <div className={styles.input}>
            <div onClick={() => setIsOpenCalendar(true)} className={styles.inputContainer}>
                <div className={styles.info}>
                    <p className={'neutral4 caption2'}>Deadline Ends</p>
                    <p className={'body2 neutral8'}>{`${$MONTHS[currentDate.getMonth()]} ${currentDate.getDate()} - ${$MONTHS[defaultValue.getMonth()]} ${defaultValue.getDate()} ${defaultValue.getFullYear()}`}</p>
                </div>
                <Image alt={'edit icon'} src={editIcon.src} height={24} width={24} className={styles.icon}/>
            </div>
            <ModalDefault isOpen={isOpenCalendar} closeHandler={() => setIsOpenCalendar(false)}>
                <p>{defaultValue && defaultValue.toString()}</p>
                <Calendar defaultValue={new Date()} value={defaultValue ? defaultValue : undefined} onChange={calendarClickHandler}/>
            </ModalDefault>
        </div>
    );
};

export default CalendarInput;