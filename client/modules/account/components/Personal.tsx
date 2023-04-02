'use client'
import React, {useContext, useEffect, useState} from 'react';
import styles from "./layout.module.scss";
import DefaultButton from "../../../components/buttons/DefaultButton";
import FormColumn from "../../../components/containers/FormColumn";
import FormLabel from "../../../components/inputs/FormLabel";
import DefaultInput from "../../../components/inputs/DefaultInput";
import useForm from "../../../hooks/UseForm";
import Dropdown from "../../../components/dropdown/Dropdown";
import UploadInput from "../../../components/inputs/UploadInput";
import FormBlock from "../UI/FormBlock";
import Divider from "../../../components/custom/Divider";
import Body from "../UI/Body";
import InputError from "../../../components/inputs/InputError";
import {IFormData, IOnChange, IUploadInput} from '../../../interfaces';
import {IDropdownOption, IDropdownOptions} from "../../../interfaces";
import Select from "react-select";
import DropdownV1 from "../../../components/dropdown/Dropdown_v1";
import {Context} from "../store/Provider";
import {observer} from "mobx-react";
import {$FIX_ME} from "../../../util/const";
import Image from "next/image";

const Personal = observer(({UseForm}: { UseForm: any }) => {
    const [isLoading, setIsLoading] = useState(false)
    const store = useContext(Context)
    function dropdownChangeHandler(option: IDropdownOption, name: 'employees' | 'speak') {

        if (name === 'employees') {
            UseForm.updateFormValueByName('employeeId', option.value)
            store.activeEmployeesOption = option
        }
        if (name === 'speak') {
            UseForm.updateFormValueByName('speakId', option.value)
            store.activeSpeakOption = option
        }
    }

    const uploadInputProps: IUploadInput = {
        action: 'http://localhost:3000/upload/avatar',
        method: 'POST',
        name: 'avatar',
        onChange(info) {
            console.log(info.file.response)
            UseForm.updateFormValueByName('logo', info.file.response.filename)
        },
        onRemove(bool) {
            if (bool) UseForm.updateFormValueByName('logo', '')
        }
    }

    return (
        <>
            <Body>
                <Body.Label label={'Personal Info'}/>
                <FormBlock>
                    <FormBlock.Label label={'General Info'}/>
                    <FormBlock.Body>
                        <FormColumn>
                            <FormLabel title={'Email'}>
                                <DefaultInput value={UseForm.values['fields']['email']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'email'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.email?.message}/>
                            </FormLabel>
                            <FormLabel title={'Company Name'}>
                                <DefaultInput value={UseForm.values['fields']['companyName']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'companyName'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.companyName?.message}/>
                            </FormLabel>
                        </FormColumn>
                        <FormColumn>
                            <FormLabel title={'Location'}>
                                <DefaultInput value={UseForm.values['fields']['location']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'location'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.location?.message}/>
                            </FormLabel>
                        </FormColumn>
                        <FormColumn>
                            <FormLabel title={'Upload Logo'}>
                                {!UseForm.values['fields']['logo']['value'] ?
                                    <>
                                        <UploadInput {...uploadInputProps}/>
                                        <InputError error={UseForm.showErrors && UseForm?.errors?.logo?.message}/>
                                    </>
                                    :
                                    <>
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${UseForm.values['fields']['logo']['value']}`} alt={'logo preview'} height={50} width={50}/>
                                        <button onClick={e => UseForm.updateFormValueByName('logo', '')}>Reset</button>
                                    </>
                                }
                            </FormLabel>
                        </FormColumn>
                        <FormColumn>
                            <FormLabel title={'Speak'}>
                                <DropdownV1 onChange={option => dropdownChangeHandler(option, 'speak')}
                                            option={store.activeSpeakOption} options={store.speakOptions}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.speakId?.message}/>
                            </FormLabel>
                        </FormColumn>
                    </FormBlock.Body>
                </FormBlock>
                <Divider/>
                <FormBlock>
                    <FormBlock.Label label={'Contact Info'}/>
                    <FormBlock.Body>
                        <FormColumn>
                            <FormLabel title={'Contact Phone'}>
                                <DefaultInput value={UseForm.values['fields']['contactPhone']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'contactPhone'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.contactPhone?.message}/>
                            </FormLabel>
                            <FormLabel title={'Contact Email'}>
                                <DefaultInput value={UseForm.values['fields']['contactEmail']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'contactEmail'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.contactEmail?.message}/>
                            </FormLabel>
                        </FormColumn>
                        <FormColumn>
                            <FormLabel title={'Contact Person'}>
                                <DefaultInput value={UseForm.values['fields']['contactPerson']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'contactPerson'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.contactPerson?.message}/>
                            </FormLabel>
                            <FormLabel title={'Employees'}>
                                <DropdownV1 onChange={option => dropdownChangeHandler(option, 'employees')}
                                            option={store.activeEmployeesOption} options={store.employeesOptions}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.employeeId?.message}/>
                            </FormLabel>
                        </FormColumn>
                    </FormBlock.Body>
                </FormBlock>
                <FormBlock>
                    <FormBlock.Label label={'Social'}/>
                    <FormBlock.Body>
                        <FormColumn>
                            <FormLabel title={'Website'}>
                                <DefaultInput value={UseForm.values['fields']['website']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'website'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.website?.message}/>
                            </FormLabel>
                            <FormLabel title={'Twitter'}>
                                <DefaultInput value={UseForm.values['fields']['twitter']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'twitter'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.twitter?.message}/>
                            </FormLabel>
                        </FormColumn>
                        <FormColumn>
                            <FormLabel title={'Linkedin'}>
                                <DefaultInput value={UseForm.values['fields']['linkedin']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'linkedin'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.linkedin?.message}/>
                            </FormLabel>
                            <FormLabel title={'Facebook'}>
                                <DefaultInput value={UseForm.values['fields']['facebook']['value']}
                                              onChange={UseForm.changeHandler}
                                              name={'facebook'}/>
                                <InputError error={UseForm.showErrors && UseForm?.errors?.facebook?.message}/>
                            </FormLabel>
                        </FormColumn>
                    </FormBlock.Body>
                </FormBlock>
                <Divider/>
                <div className={styles.buttons}>
                    <DefaultButton onClick={UseForm.submitHandler} buttonType={'filled'} value={'Submit'}/>
                    <DefaultButton onClick={UseForm.clear} buttonType={'transparent'} value={'Clear all'}/>
                </div>
            </Body>
        </>
    );
})

export default Personal;