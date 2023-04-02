import {makeAutoObservable, runInAction, toJS} from "mobx";
import {
    ICompany,
    IDropdownOption,
    IDropdownOptions,
    IFormData, IGetProduct,
    INavigationOptions,
    IProduct
} from "../../../interfaces";
import SubServices from "../../../services/SubServices";
import CompanyService from "../../../services/CompanyService";
import {ProductService} from "../../../services/ProductService";


class Store {
    _userNavigation: INavigationOptions[] = [
        {id: 0, text: 'Personal Info'},
        {id: 1, text: 'Job applications'},
        {id: 2, text: 'Help'},
        {id: 3, text: 'Notifications'},
    ]

    _account: ICompany = {}
    _formData: IFormData = {
        fields: {
            companyName: {
                value: '',
                rules: 'required'
            },
            email: {
                value: '',
                rules: 'required'
            },
            contactEmail: {
                value: '',
                rules: 'required'
            },
            contactPhone: {
                value: '',
                rules: 'required|numeric',
            },
            contactPerson: {
                value: '',
                rules: 'required',
            },
            employeeId: {
                value: '',
                rules: 'required'
            },
            location: {
                value: '',
                rules: 'required'
            },
            logo: {
                value: '',
                rules: 'required'
            },
            speakId: {
                value: '',
                rules: 'required'
            },
            website: {
                value: '',
                rules: 'required'
            },
            twitter: {
                value: '',
                rules: 'required'
            },
            facebook: {
                value: '',
                rules: 'required'
            },
            linkedin: {
                value: '',
                rules: 'required'
            },
        }
    }
    _activeEmployeesOption: IDropdownOption | undefined = undefined
    _activeSpeakOption: IDropdownOption | undefined = undefined
    _companyProducts: IGetProduct[] = []
    _employeesOptions: IDropdownOptions[] = []
    _speaksOptions: IDropdownOptions[] = []
    _activeLink = 0;

    constructor() {
        makeAutoObservable(this)
    }

    async fetchSpeakOptions() {
        const data = await SubServices.getAllLanguages()
        let res: IDropdownOptions[] = data.map(e => {
            let prepare = {
                value: e.language,
                id: e.id
            }

            return prepare
        })

        runInAction(() => {
            this._speaksOptions = res
        })
    }

    async fetchEmployeesOptions() {
        const data = await SubServices.getEmployees()
        let res: IDropdownOptions[] = data.map(e => {
            return {
                value: `${e.from} - ${e.till}`,
                id: e.id
            }
        })

        runInAction(() => {
            this._employeesOptions = res
        })
    }

    async fetchCompanyProducts() {
        const products = await ProductService.getProductByCompanyId()
        this._companyProducts = products
    }

    get companyProducts() {
        return toJS(this._companyProducts)
    }

    getFormValues() {
        Object.keys(this._formData['fields']).map(name => {
            this._formData['fields'][name]['value'] = this.account[name]
        })

        this.activeSpeakOption = this.account['speakId'] ? this.speakOptions[this.account['speakId']] : undefined
        this.activeEmployeesOption = this.account['employeeId'] ? this.employeesOptions[this.account['employeeId']] : undefined
        return toJS(this._formData)
    }

    async fetchCompany() {
        const response = await CompanyService.getCompanyById()

        runInAction(() => {
            this._account = response
        })
    }

    get speakOptions() {
        return toJS(this._speaksOptions)
    }

    get employeesOptions() {
        return toJS(this._employeesOptions)
    }

    set activeEmployeesOption(data: IDropdownOption | undefined) {
        this._activeEmployeesOption = data
    }

    set activeSpeakOption(data: IDropdownOption | undefined) {
        this._activeSpeakOption = data
    }

    get activeEmployeesOption() {
        return toJS(this._activeEmployeesOption)
    }

    get activeSpeakOption() {
        return toJS(this._activeSpeakOption)
    }

    get formData() {
        return toJS(this._formData)
    }

    get userNavigation() {
        return toJS(this._userNavigation)
    }

    get activeLink() {
        return toJS(this._activeLink)
    }

    set activeLink(id: number) {
        this._activeLink = id
    }

    get account() {
        return toJS(this._account)
    }

    set account(data) {
    }

    async updateCompany(data: ICompany) {
        try {
            const res = await CompanyService.updateCompanyById(data)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Store()