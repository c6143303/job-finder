import {FormEvent} from "react";

export type IDropdownOption = { value: string, id?: number, query?: string };

export interface IDropdownOptions extends IDropdownOption {

}


export interface IUploadInput {
    onChange: (event: IOnChange) => void
    action: string
    method: 'GET' | 'POST'
    name: string,
    onRemove: (bool: boolean) => void
}

export interface ICategories {
    id: number
    name: string
    checked?: boolean
}

export type IFilterName = 'category' | 'type'

export type TSort = 'high' | 'low' | 'date'

export interface IOnChange {
    file: {
        state: ResponseStatusT
        name: string
        response: any
    }
    event: React.FormEvent
}

export type ResponseStatusT = 'progress' | 'failed' | 'success'

export interface IProduct {
    id: number
    title: string,
    position: string
    description: string
    salaryTill: number
    salaryFrom: number
    typeId: number
    categoryId: number
    companyId: number
    imageSrc: string
    expires: Date
    isLiked: boolean
}

export interface IGetProduct extends IProduct {
    [key: string]: any
    company?: {
        about: string
        companyName: string
        contactEmail: string
        contactPerson: string
        contactPhone: string
        facebook: string
        linkedin: string
        location: string
        twitter: string
        website: string
        employeeAmount: {
            from: string,
            till: string
        }
    }
}

export interface IGetProducts {
    rows: IGetProduct[]
    count: number
}

export interface ISortOptions {
    query: string
    name: string
    id: number
}

export interface INavigationOptions {
    id: number
    text: string
}

export type Variant = 'approved' | 'process' | 'canceled'

export interface ILabel {
    variant: Variant
    label: string
}

export type TypeValues = {
    [key: string]: any
}

export interface IItem {
    value: unknown
    rules: string
}

export interface IValues {
    fields: {
        [key: string]: IItem
    }

    [key: string]: any
}

export interface IApplicationForm {
    name: string
    lastname: string
    email: string
    cv: string
    companyId: string
    message: string
}

export interface ICompany {
    id?: number,
    email?: string,
    password?: string,
    about?: string,
    location?: string,
    website?: string,
    contactPerson?: string,
    contactEmail?: string,
    contactPhone?: string,
    facebook?: string,
    twitter?: string,
    linkedin?: string,
    verified?: boolean,
    companyName?: string,
    logo?: null,
    speakId?: null | number
    employeeId?: null | number

    [key: string]: any
}

export interface IDecodedToken {
    companyId: string
    email: string
}

export interface IFormData {
    fields: {
        [key: string]: {
            value: any
            rules: string
        }
    }
}

export interface ILanguages {
    id: number
    language: string
}

export interface IEmployees {
    id: number
    from: number
    till: number
}

export interface ISubItem {
    name: string
    id: number
}

export type UseFormValues = {
    [key: string]: {
        rules: string
        value: any
    }
}

export type UseFormErrorsType = {
    [key: string]: {
        error: boolean,
        message: string
    }
}

export interface IUseForm {
    errors: UseFormErrorsType
    submitHandler: () => void
    values: { fields: UseFormValues }
    changeHandler: (event: FormEvent) => void
    showErrors: boolean
    updateFormValueByName: (name: string, value: any) => void
    clear: () => void
    setValues: any
}

export interface ICompanyApplication {
    id: number
    companyId: number
    name: string
    lastname: string
    email: string
    cv: string
    date: Date
    message: string
    checked: boolean
}