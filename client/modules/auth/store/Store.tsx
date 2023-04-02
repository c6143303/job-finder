import {makeAutoObservable, toJS} from "mobx";
import AuthService from "../../../services/AuthService";
import {ICompany} from "../../../interfaces";

class Store {
    _isAuth = false
    _company = {}
    _isFetched = false

    constructor() {
        makeAutoObservable(this)
    }


    set isAuth(boolean: boolean) {
        this._isAuth = boolean
    }

    get isAuth() {
        return toJS(this._isAuth)
    }

    get company() {
        return toJS(this._company)
    }

    set company(data: ICompany) {
        this._company = data
    }

    set isFetched (bool: boolean) {
        this._isFetched = bool
    }

    get isFetched() {
        return toJS(this._isFetched)
    }
}

export default new Store()