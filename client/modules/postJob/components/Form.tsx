import React, {useContext, useEffect, useState} from 'react';
import styles from "./Layout.module.scss";
import FormColumn from "../../../components/containers/FormColumn";
import FormLabel from "../../../components/inputs/FormLabel";
import DefaultInput from "../../../components/inputs/DefaultInput";
import DefaultButton from "../../../components/buttons/DefaultButton";
import Dropdown from "../../../components/dropdown/Dropdown";
import CalendarInput from "../../../components/inputs/CalendarInput";
import Textarea from "../../../components/inputs/Textarea";
import useForm from "../../../hooks/UseForm";
import InputError from "../../../components/inputs/InputError";
import {any, number} from "prop-types";
import {$DATE} from "../../../util/const";
import {IDropdownOption, IFormData, TypeValues} from "../../../interfaces";
import DropdownV1 from "../../../components/dropdown/Dropdown_v1";
import {Context} from '../store/Provider'
import {observer} from "mobx-react";

interface IForm {
    openModal: () => void
    UseForm: any
    fetchedTypes: IDropdownOption[] | []
    fetchedCategories: IDropdownOption[] | []
    activeType: IDropdownOption | undefined
    setActiveType: React.Dispatch<React.SetStateAction<IDropdownOption | undefined>>
    activeCategory: IDropdownOption | undefined
    setActiveCategory: React.Dispatch<React.SetStateAction<IDropdownOption | undefined>>
}

const $FORM_EXPIRES = 'expires'
const $FORM_TITLE = 'title'
const $FORM_POSITION = 'position'
const $FORM_SALARYFROM = 'salaryFrom'
const $FORM_SALARYTILL = 'salaryTill'
const $FORM_DESCRIPTION = 'description'
const $FORM_CATEGORYID = 'categoryId'
const $FORM_TYPEID = 'typeId'

const Form: React.FC<IForm> = observer(({
                                            openModal,
                                            UseForm,
                                            fetchedCategories,
                                            fetchedTypes,
                                            setActiveType,
                                            activeType,
                                            activeCategory,
                                            setActiveCategory
                                        }) => {


    console.log(UseForm.values['fields']['title']['value'])
    const dropDownHandler = (event: IDropdownOption, name: 'typeId' | 'categoryId') => {
        const {id} = event as any
        if (name === 'typeId') {
            setActiveType(event)
            UseForm.updateFormValueByName('typeId', id)
        } else if (name === 'categoryId') {
            setActiveCategory(event)
            UseForm.updateFormValueByName('categoryId', id)
        }

    }

    let selectCalendar = (date: Date) => {
        UseForm.updateFormValueByName('expires', new Date(date))
    }

    return (
        <form onSubmit={e => e.preventDefault()} className={styles.postJobForm}>
            <p className={'body1body neutral8'}>
                1. Job information
            </p>
            <FormColumn>
                <FormLabel title={'Job title'}>
                    <DefaultInput value={UseForm.values['fields'][$FORM_TITLE]['value']}
                                  onChange={UseForm.changeHandler}
                                  name={$FORM_TITLE}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_TITLE]?.['message']}/>
                </FormLabel>
                <FormLabel title={'Job position'}>
                    <DefaultInput value={UseForm.values['fields'][$FORM_POSITION]['value']}
                                  onChange={UseForm.changeHandler}
                                  name={$FORM_POSITION}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_POSITION]?.['message']}/>
                </FormLabel>
            </FormColumn>
            <FormColumn>
                <FormLabel title={'Salary From'}>
                    <DefaultInput type={'number'} value={UseForm.values['fields'][$FORM_SALARYFROM]['value']}
                                  onChange={UseForm.changeHandler}
                                  name={$FORM_SALARYFROM}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_SALARYFROM]?.['message']}/>
                </FormLabel>
                <FormLabel title={'Salary Till'}>
                    <DefaultInput type={'number'} value={UseForm.values['fields'][$FORM_SALARYTILL]['value']}
                                  onChange={UseForm.changeHandler}
                                  name={$FORM_SALARYTILL}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_SALARYTILL]?.['message']}/>
                </FormLabel>
            </FormColumn>
            <FormColumn>
                <FormLabel title={'description'}>
                    <Textarea onChange={UseForm.changeHandler} name={'description'}
                              value={UseForm.values['fields'][$FORM_DESCRIPTION]['value']} className={'new'}
                    />
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_DESCRIPTION]?.['message']}/>
                </FormLabel>
            </FormColumn>
            <FormColumn>
                <FormLabel title={'job category'}>
                    <DropdownV1 option={activeCategory} placeholder={'job category'}
                                options={fetchedCategories}
                                onChange={e => dropDownHandler(e, $FORM_CATEGORYID)}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_CATEGORYID]?.['message']}/>
                    <input hidden={true} readOnly={true} value={UseForm.values['fields'][$FORM_CATEGORYID]['value']}
                           name={'jobCategory'}/>
                </FormLabel>
                <FormLabel title={'job type'}>
                    <DropdownV1 option={activeType} placeholder={'job type'}
                                options={fetchedTypes}
                                onChange={e => dropDownHandler(e, $FORM_TYPEID)}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_TYPEID]?.['message']}/>
                    <input hidden={true} readOnly={true} value={UseForm.values['fields'][$FORM_TYPEID]['value']}
                           name={'jobCategory'}/>
                </FormLabel>
            </FormColumn>
            <FormColumn>
                <FormLabel title={'deadline'}>
                    <CalendarInput calendarClickHandler={selectCalendar}
                                   defaultValue={UseForm.values['fields'][$FORM_EXPIRES]['value']}/>
                    <InputError error={UseForm.showErrors && UseForm?.errors?.[$FORM_EXPIRES]?.['message']}/>
                    <input hidden={true} readOnly={true} value={UseForm.values['fields'][$FORM_EXPIRES]['value']}
                           name={'date'}/>
                </FormLabel>
            </FormColumn>
            <DefaultButton className={'align-self-start'} onClick={e => UseForm.submitHandler(e)} size={'medium'}
                           buttonType={'filled'}
                           value={'Submit for approval'}/>
        </form>
    );
});

export default Form;