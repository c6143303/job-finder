import React from 'react';
import Body from "../UI/Body";
import styles from './layout.module.scss'
import {ILabel, Variant} from "../../../interfaces";
import DefaultButton from "../../../components/buttons/DefaultButton";
import arrowRight from '/public/images/arrowRight.svg'
import useForm from "../../../hooks/UseForm";
import FormBlock from "../UI/FormBlock";
import FormColumn from "../../../components/containers/FormColumn";
import FormLabel from "../../../components/inputs/FormLabel";
import DefaultInput from "../../../components/inputs/DefaultInput";
import InputError from "../../../components/inputs/InputError";
import DropdownV1 from "../../../components/dropdown/Dropdown_v1";
import UploadInput from "../../../components/inputs/UploadInput";
import Textarea from "../../../components/inputs/Textarea";

const $DATA: ILabel[] = [
    {label: 'process', variant: 'process'},
    {label: 'canceled', variant: 'canceled'},
    {label: 'approved', variant: 'approved'},
]
const JobApplications = () => {
    const form = {
        fields: {
            message: {
                value: '',
                rules: 'required'
            },
        }
    }
    const submitFormHandler = () => {

    }

    const clearForm = () => {
        formData.updateFormValueByName('message', '')
    }
    const formData = useForm(form, submitFormHandler)
    return (
        <Body key={'help'}>
            <Body.Label label={'Help'}/>
            <FormBlock>
                <FormBlock.Label label={'We will get back to you as soon as possible. Thank you!'}/>
                <FormBlock.Body>
                    <FormColumn>
                        <FormLabel title={'message'}>
                            <Textarea value={formData.values['fields']['message']['value']}
                                      onChange={formData.changeHandler}
                                      name={'message'}/>
                            <InputError error={formData.showErrors && formData?.errors?.message?.message}/>
                        </FormLabel>
                    </FormColumn>
                    <div className={styles.buttons}>
                        <DefaultButton onClick={formData.submitHandler} buttonType={'filled'} value={'Submit'}/>
                        <DefaultButton onClick={clearForm} buttonType={'transparent'} value={'Clear all'}/>
                    </div>
                </FormBlock.Body>
            </FormBlock>
        </Body>
    );
};

export default JobApplications;