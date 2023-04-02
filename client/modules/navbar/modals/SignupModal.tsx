"use client"
import React, {useContext, useRef, useState} from 'react';
import ModalDefault from "../../../components/modals/Modal.Default";
import styles from './index.module.scss'
import DefaultInput from "../../../components/inputs/DefaultInput";
import DefaultButton from "../../../components/buttons/DefaultButton";
import CheckboxItem from "./CheckboxItem";
import InputError from "../../../components/inputs/InputError";
import {Context} from "../store/Provider";
import {observer} from "mobx-react";
import ModalHead from "./Modal.Head";
import FormInfo from "./FormInfo";
import useForm from "../../../hooks/UseForm";
import LabelWrapper from "../../index/UI/LabelWrapper";
import Checkbox from "../../../components/inputs/Checkbox";
import {useFocus} from "../../../hooks/useFocus";

const SignupModal = observer(() => {

    const store = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const [showErrors, setShowErrors] = useState(false)
    const inputRef = useRef(null)

    const form = {
        fields: {
            email: {
                value: '',
                rules: 'required|email'
            },
            name: {
                value: '',
                rules: 'required|between:6,24'
            },
            password: {
                value: '',
                rules: 'required|between:6,24',
            },
            repeatPassword: {
                value: '',
                rules: 'required|same:password|between:6,24'
            },
            terms: {
                value: false,
                rules: 'required|accepted'
            },
            subscribe: {
                value: false,
                rules: 'required'
            },
        }
    }
    const submitFormHandler = () => {
        console.log('sending')
    }
    useFocus(store.showSignUp, inputRef)
    const formData = useForm(form, submitFormHandler)
    const formCheckboxHandler = (event: React.FormEvent<EventTarget>) => {
        const target = event.target as HTMLInputElement
        const name = target.name
        const checkboxStateBool = formData.values['fields'][name]['value']
        formData.updateFormValueByName(name, !checkboxStateBool)
    }

    return (
        <ModalDefault closeHandler={() => {
            store.showSignUp = false
        }} isOpen={store.showSignUp}>
            <ModalHead title={'Sign up on Fleet'} subtitle={'Use Your OpenID to Sign up'}/>
            <form className={styles.block}>
                <DefaultInput ref={inputRef} placeholder={'email'} name={'email'}
                              value={formData.values['fields']['email']['value']}
                              onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.email?.message}/>

                <DefaultInput
                    placeholder={'name'} name={'name'}
                    value={formData.values['fields']['name']['value']}
                    onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.name?.message}/>

                <DefaultInput
                    placeholder={'password'} type={'password'} name={'password'}
                    value={formData.values['fields']['password']['value']}
                    onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.password?.message}/>

                <DefaultInput
                    placeholder={'repeat password'} type={'password'} name={'repeatPassword'}
                    value={formData.values['fields']['repeatPassword']['value']}
                    onChange={formData.changeHandler}/>
                <InputError error={formData.showErrors && formData?.errors?.repeatPassword?.message}/>

                <DefaultButton size={'medium'} loading={isLoading} onClick={formData.submitHandler} className={styles.formBtn}
                               buttonType={'filled'} value={'Send form'}/>
            </form>
            <div className={styles.block}>
                <CheckboxItem>
                    <LabelWrapper key={'politics'} onInput={formCheckboxHandler}>
                        <Checkbox name={'terms'} readOnly={true} checked={formData.values['fields']['terms']['value']}/>
                        <p className={'captionBold neutral4'}>I accept the Terms of Service and the Privacy Policy.</p>
                    </LabelWrapper>
                </CheckboxItem>
                <InputError error={formData.showErrors && formData?.errors?.terms?.message}/>
                <CheckboxItem>
                    <LabelWrapper key={'politics'} onInput={formCheckboxHandler}>
                        <Checkbox name={'subscribe'} readOnly={true} checked={formData.values['fields']['subscribe']['value']}/>
                        <p className={'captionBold neutral4'}>Subscribe to the newsletter.</p>
                    </LabelWrapper>
                </CheckboxItem>
            </div>
            <FormInfo>
                <p>Already have an account?</p><a className={'primary1'} href={'/'}>Login</a>
            </FormInfo>
        </ModalDefault>
    );
});

export default SignupModal;