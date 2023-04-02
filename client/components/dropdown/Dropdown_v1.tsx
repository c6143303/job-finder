import React, {useRef, useState} from 'react';
import styles from "./Dropdown.module.scss";
import {UseClickOutside} from "../../hooks/UseClickOutside";
import {IDropdownOption} from "../../interfaces";


interface Interface {
    onChange?: (event: IDropdownOption) => void
    option?: undefined | IDropdownOption
    options: IDropdownOption[]
    placeholder?: string
    className?: string
}

const DropdownV1: React.FC<Interface> = ({options, onChange, placeholder = 'Select', option = undefined, ...props}) => {
    const inputRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    UseClickOutside(inputRef, () => setIsOpen(false))
    const headClickHandler = () => {
        setIsOpen(!isOpen)
    }

    const displayActiveOption = (iteratedOption: IDropdownOption) => {
        if (option) {
            return iteratedOption.value === option.value ? styles.active : ''
        }
    }

    return (
        <div ref={inputRef} className={`${styles.dropdown} ${isOpen ? styles.open : ''} ${props.className}`}>
            <div onClick={headClickHandler} className={styles.dropdownHead}>
                <p>{option ? option.value : placeholder}</p>
                <div className={styles.dropdownIcon}></div>
            </div>
            <div className={`${styles.dropdownBody}`}>
                {options.map((e, index) => {
                    return (
                        <div key={index}
                             onClick={() => onChange ? onChange(options[index]) : null}
                             className={`${styles.dropdownItem} ${displayActiveOption(e)}`}>
                            <p className={'captionBold'}>{e.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DropdownV1;