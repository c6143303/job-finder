import {makeAutoObservable, toJS, runInAction} from "mobx";
import SubServices from "../../../services/SubServices";
import {IDropdownOption, IFormData, IProduct, ISubItem} from "../../../interfaces";
import {ProductService} from "../../../services/ProductService";
import {$DATE} from "../../../util/const";
import {flattenedObject} from "util/FlattenedObject";
import { rewriteVariableInside } from "util/rewriteVariableInside";


class Store {
    _types: IDropdownOption[] = []
    _categories: IDropdownOption[] = []
    _activeType: IDropdownOption | null = null
    _activeCategory: IDropdownOption | null = null
    _form: IFormData = {
        fields: {
            title: {
                value: '',
                rules: 'required'
            },
            salaryFrom: {
                value: '',
                rules: 'required|numeric',
            },
            salaryTill: {
                value: '',
                rules: 'required|numeric',
            },
            description: {
                value: '',
                rules: 'required'
            },
            categoryId: {
                value: '',
                rules: 'required'
            },
            typeId: {
                value: '',
                rules: 'required'
            },
            expires: {
                value: $DATE,
                rules: `required|test:${new Date()}`
            },
            position: {
                value: '',
                rules: `required`
            }
        }
    }

    constructor() {
        makeAutoObservable(this)
    }

    async fetchTypes() {
        const data = await SubServices.getTypes()
        runInAction(() => {
            this._types = rewriteVariableInside(data)
        })
    }

    async fetchCategories() {
        const data = await SubServices.getCategories()
        runInAction(() => {
            this._categories = rewriteVariableInside(data)
        })
    }

    async addProduct(data: IFormData) {
        const productDataToSend = flattenedObject(data, 'value') as IProduct
        const res = await ProductService.addProduct(productDataToSend)
        return res
    }

    async updateProduct() {

    }

    async fetchProduct(productId: number) {
        const res = await ProductService.getById(productId)

        return res
    }

    get types() {
        return toJS(this._types)
    }

    get categories() {
        return toJS(this._categories)
    }

    get form() {
        return toJS(this._form)
    }

    set form(data) {
        this._form = data
    }

    get flattenedFormValues() {
        return flattenedObject(this._form, 'value') as IProduct
    }

    set activeType(data: IDropdownOption | null) {
        this._activeType = data
    }

    set activeCategory(data: IDropdownOption | null) {
        this._activeCategory = data
    }

    get activeType(): IDropdownOption {
        return toJS(this._activeType) as IDropdownOption
    }

    get activeCategory(): IDropdownOption {
        return toJS(this._activeCategory) as IDropdownOption
    }

}

export default new Store()