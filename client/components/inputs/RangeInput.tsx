import React, {useState} from 'react';

import styles from './RangeInput.module.scss'
import {CURRENCY} from "../../util/const";
import {is} from "immutable";

interface IRangeInput {
    label?: null | string
    min?: number
    max?: number
    value?: number
    onInput?: (event: React.FormEvent<EventTarget>) => void
}

const RangeInput: React.FC<IRangeInput> = ({label, min = 0, max = 100, value = 0, onInput = null}) => {

    const [tooltipCoordinates, setTooltipCoordinates] = useState(0)
    const [isShowed, setIsShowed] = useState(false)

    const inputHandler = (event: React.FormEvent<EventTarget>) => {
        if (onInput) onInput(event)
        let target = event.target as HTMLInputElement

        const calc = Number(((+target.value - min) * 100) / (max - min));
        setTooltipCoordinates(calc)
    }
    return (
        <div className={styles.wrapper}>
            {!isShowed ? null :
                <output className={styles.output}
                        style={{left: `calc(${tooltipCoordinates}% + (${8 - tooltipCoordinates * 0.15}px))`}}>{`${CURRENCY} ${value}`}</output>
            }
            {label ? <label className={'hairline2 neutral5'} htmlFor="{'range'}">{label}</label> : null}
            <input onMouseDown={e => setIsShowed(true)} onMouseUp={e => setIsShowed(false)}
                   onInput={event => inputHandler(event)} value={value} id={'range'} min={min} max={max} type="range"/>
        </div>
    );
};

export default RangeInput;