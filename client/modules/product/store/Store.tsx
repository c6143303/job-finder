import {makeAutoObservable, toJS} from "mobx";
import {IProduct} from "../../../interfaces";
import {ProductService} from "../../../services/ProductService";

class Store {
    _product : unknown | IProduct = undefined
    constructor() {
        makeAutoObservable(this)
    }

    set product(product: IProduct) {
        this._product = product
    }

    get product() {
        return toJS(this._product) as IProduct
    }
}

export default new Store()