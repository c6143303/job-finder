'use client'
import React from 'react';
import styles from "./layout.module.scss";
import FormLabel from "../../../components/inputs/FormLabel";
import DefaultInput from "../../../components/inputs/DefaultInput";
import InputError from "../../../components/inputs/InputError";
import Textarea from "../../../components/inputs/Textarea";
import UploadInput from "../../../components/inputs/UploadInput";
import DefaultButton from "../../../components/buttons/DefaultButton";
import {IApplicationForm, IOnChange, IUploadInput} from "../../../interfaces";
import useForm from "../../../hooks/UseForm";
import {FormServices} from "../../../services/FormServices";

const FormBody = ({companyId}: { companyId: number }) => {
    const data = {
        fields: {
            name: {
                value: '',
                rules: 'required'
            },
            lastName: {
                value: '',
                rules: 'required'
            },
            email: {
                value: '',
                rules: 'required'
            },
            description: {
                value: '',
                rules: 'required'
            },
            cv: {
                value: '',
                rules: 'required'
            },
        }
    }
    const submitHandler = () => {
        const fields = formData.values['fields']
        const data: IApplicationForm = {
            name: fields['name']['value'],
            lastname: fields['lastName']['value'],
            email: fields['email']['value'],
            cv: fields['cv']['value'],
            companyId: companyId.toString(),
            message: fields['description']['value']
        }

        FormServices.sendApplicationForm(data)
            .then(() => window.location.href = '/')
            .catch(e => console.log(e))
    }
    const formData = useForm(data, submitHandler)
    const uploadInputProps: IUploadInput = {
        action: `${process.env.NEXT_PUBLIC_BASE_URL}upload/cv`,
        method: 'POST',
        name: 'cv',
        onChange(info: IOnChange) {
            console.log('ex')
            console.log(info)
            formData.updateFormValueByName('cv', info.file.response.path)
        },
        onRemove(bool: boolean) {
            if (bool) formData.updateFormValueByName('cv', '')
        }
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            formData.submitHandler(e)
        }} className={styles.formBody}>
            <FormLabel title={'Name'}>
                <DefaultInput className={styles.input}
                              value={formData.values['fields']['name']['value']}
                              onChange={formData.changeHandler}
                              name={'name'}/>
                <InputError error={formData.showErrors && formData?.errors?.name?.message}/>
            </FormLabel>
            <FormLabel title={'Last name'}>
                <DefaultInput className={styles.input}
                              value={formData.values['fields']['lastName']['value']}
                              onChange={formData.changeHandler}
                              name={'lastName'}/>
                <InputError error={formData.showErrors && formData?.errors?.lastName?.message}/>
            </FormLabel>
            <FormLabel title={'Email'}>
                <DefaultInput className={styles.input}
                              value={formData.values['fields']['email']['value']}
                              onChange={formData.changeHandler}
                              name={'email'}/>
                <InputError error={formData.showErrors && formData?.errors?.email?.message}/>
            </FormLabel>
            <FormLabel title={'Cover letter and motivation'}>
                <Textarea className={styles.input}
                          value={formData.values['fields']['description']['value']}
                          onChange={formData.changeHandler}
                          name={'description'}/>
                <InputError error={formData.showErrors && formData?.errors?.description?.message}/>
            </FormLabel>
            <FormLabel title={'Cv'}>
                <UploadInput {...uploadInputProps}/>
                <InputError error={formData.showErrors && formData?.errors?.cv?.message}/>
            </FormLabel>
            <DefaultButton type={'submit'} className={'align-self-start'} buttonType={'filled'} size={'medium'}
                           value={'Confirm and pay'}/>
        </form>
    );
};

export default FormBody;