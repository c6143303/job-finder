import React, {FormEvent, useCallback, useContext, useEffect, useRef, useState} from 'react';

import styles from './index.module.scss'
import ModalDefault from "../../../components/modals/Modal.Default";
import {Context} from "../store/Provider";
import ModalHead from "./Modal.Head";
import FormInfo from "./FormInfo";
import DefaultInput from "../../../components/inputs/DefaultInput";
import DefaultButton from "../../../components/buttons/DefaultButton";
import {observer} from "mobx-react";
import useForm from "../../../hooks/UseForm";
import InputError from "../../../components/inputs/InputError";
import AuthService from "../../../services/AuthService";
import {useFocus} from "../../../hooks/useFocus";

const SignInModal = observer(() => {
    const store = useContext(Context)
    const form = {
        fields: {
            email: {
                value: '',
                rules: 'required|email'
            },
            password: {
                value: '',
                rules: 'required|between:6,24',
            },
        }
    }
    const [isLoading, setIsLoading] = useState(false)
    const [showErrors, setShowErrors] = useState(false)
    const [dbError, setDbError] = useState<false | string>(false)
    const inputRef = useRef(null)
    const submitFormHandler = async () => {
        const data = {
            email: formData.values['fields']['email']['value'],
            password: formData.values['fields']['password']['value']
        }
        try {
            await AuthService.signIn(data)
        } catch (error: any) {
            setDbError(error)
        }
    }

    useFocus(store.showSignIn, inputRef)
    const formData = useForm(form, submitFormHandler)
    return (
        <ModalDefault closeHandler={() => store.showSignIn = false} isOpen={store.showSignIn}>
            <ModalHead title={'Sign in on fleet'} subtitle={'Use Your OpenID to Sign up'}/>
            <form className={styles.block}>
                <DefaultInput ref={inputRef} placeholder={'email'} name={'email'}
                              value={formData.values['fields']['email']['value']}
                              onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.email?.message}/>
                <DefaultInput type={'password'} placeholder={'password'} name={'password'}
                              value={formData.values['fields']['password']['value']}
                              onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.password?.message}/>
                <InputError error={dbError && dbError}/>
            </form>
            <DefaultButton size={'medium'} iconSide={'left'} loading={isLoading} onClick={formData.submitHandler}
                           className={styles.formBtn}
                           buttonType={'filled'} value={'Send form'}/>
            <FormInfo>
                <p>Already have an account?</p><a className={'primary1'} href={'/'}>Login</a>
            </FormInfo>
        </ModalDefault>
    );
})

export default SignInModal;