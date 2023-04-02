export interface ISpeak {
    id: number
    language: string
}

export interface IEmployee {
    id: number
    from: number
    till: number
}

export interface ISupportForm {
    id: number
    message: string
    companyId: number
}

export interface IApplication {
    companyId: number
    name: string
    lastName: string
    email: string
    cv: string
    letter: string
    checked: boolean
    date: Date
    id: string
}

export interface ICompany {
    id: number
    email: string
    password: string
    about: string
    location: string
    website: string
    employeeId: string
    contactPerson: string
    contactEmail: string
    contactPhone: string
    facebook: string
    twitter: string
    linkedin: string
    verified: string
    companyName: string
    logo: string
}

export interface ICompanyUpdate extends ICompany {
    speakId: number
}

export interface ILogin {
    email?: string
    password?: string
}

export interface IType {
    id: number
    name: string
}

export interface ICategory {
    name: string
}

export interface IObjectKey {
    [key: string | number]: string | number
}

export interface IGetProducts {
    pageSize?: number
    page: number
    typeId: number[]
    categoryId: number[]
    salaryFrom: number
    salaryTill: number
    sort: 'high' | 'low' | 'date'
}

export interface IAddProduct {
    title: string
    position: string
    description: string
    salaryFrom: number
    salaryTill: number
    companyId: number
    categoryId: number
    typeId: number,
    imageSrc: string,
    expires: string
}

export interface IGetProduct extends IGetProducts{
    companyId: string
}

export interface ICompanyClient {
    about: string,
    companyName: string,
    contactEmail: string,
    contactPerson: string,
    contactPhone: string,
    facebook: string,
    linkedin: string,
    location: string,
    twitter: string,
    website: string,
    employeeAmount: IEmployee
}
export interface IUpdateProduct extends IAddProduct {
    id: number
}

export interface IToken {
    companyId: string
    email: string
}