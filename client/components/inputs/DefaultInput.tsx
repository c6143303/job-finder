import React, {
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    LegacyRef,
    MutableRefObject,
    useEffect,
    useState
} from 'react';

import styles from './defaultInput.module.scss'
import Image from "next/image";
import passwordIcon from '/public/images/password.svg'
import activePassword from '/public/images/password-active.svg'
import InputError from "./InputError";

type InputType = React.HTMLProps<HTMLInputElement>

interface IDefaultInput {
    type?: 'text' | 'password' | 'number'
    value: string
    onChange: (event: React.FormEvent) => void
    name: string
    placeholder?: string
    className?: string
    ref?: React.ForwardedRef<HTMLInputElement>,
    variant?: 'default' | 'round'
}

const $STYLES = {
    'round': styles.input,
    'default': styles.roundInput
}
const DefaultInput: React.ForwardRefExoticComponent<React.PropsWithoutRef<IDefaultInput> & React.RefAttributes<HTMLInputElement>> =
    forwardRef(({
                    type = 'text',
                    value,
                    onChange,
                    name,
                    placeholder = '',
                    className = '',
                    variant = 'default'
                }, ref) => {
        const [showPassword, setShowPassword] = useState(false)
        const isTypePassword = type === 'password'

        return (
                <div className={styles.wrapper}>
                    {isTypePassword ?
                        <div onClick={e => setShowPassword(!showPassword)} className={styles.passwordIcon}>
                            <Image src={showPassword ? passwordIcon.src : activePassword.src} alt={'passwordIcon'}
                                   width={16}
                                   height={16}/>
                        </div>
                        :
                        null
                    }
                    <input ref={ref ? ref : undefined} placeholder={placeholder}
                           className={$STYLES[variant]}
                           name={name}
                           value={value}
                           onInput={onChange} type={showPassword ? 'text' : type}/>
                </div>
        );
    })

export default DefaultInput;