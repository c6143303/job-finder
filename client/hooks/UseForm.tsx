import React, {FormEvent, useEffect, useState} from "react";
import Validator, {RegisterCallback} from "validatorjs";
import {type} from "os";
import {IFormData, IUseForm, IValues, TypeValues, UseFormErrorsType, UseFormValues} from "../interfaces";
import {flattenedObject} from "../util/FlattenedObject";
import {IFlattenedObject} from "../util/FlattenedObject.props";

const validate = (values: IFlattenedObject): UseFormErrorsType => {

    const validate = new Validator(
        flattenedObject(values, 'value'),
        flattenedObject(values, 'rules'),
    )

    Validator.register('test', (date, params) => {
        let val1 = typeof date == 'string' ? new Date(date) : date
        let val2 = new Date(params)

        if (val1 > val2) return true
        return false
    }, 'wrong format with data')
    validate.passes()

    let validatedErrors: TypeValues = {}
    Object.keys(validate.errors.errors).map(key => {
        validatedErrors[key] = {
            message: validate.errors.errors[key][0],
            error: true
        }
    })

    return validatedErrors
}

function useForm(initValues: {fields: UseFormValues}, callback: () => void): IUseForm {
    const [errors, setErrors] = useState<UseFormErrorsType>({})
    const [values, setValues] = useState<IFlattenedObject>(initValues)
    const [showErrors, setShowErrors] = useState(false)

    const changeHandler = (event: FormEvent) => {
        const {name, value} = event.target as HTMLInputElement
        const copy = {...values}
        copy['fields'][name]['value'] = value
        setValues(copy)
    }

    const updateFormValueByName = (name: string, value: unknown) => {
        const copy = {...values}
        copy['fields'][name]['value'] = value
        setValues(copy)
    }

    const clear = () => {
        const copy = {...values}

        Object.keys(copy['fields']).map(e => {
            copy['fields'][e]['value'] = ''
        })

        setValues(copy)
    }

    const submitHandler = () => {
        if (Object.keys(errors).length === 0) {
            return callback()
        }

        setShowErrors(true)
    }

    useEffect(() => {
        const validatedErrors = validate(values)

        setErrors(validatedErrors)
    }, [values])

    return {
        errors,
        submitHandler,
        values,
        changeHandler,
        showErrors,
        updateFormValueByName,
        clear,
        setValues
    }
}

export default useForm