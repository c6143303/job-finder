import {makeAutoObservable, toJS} from "mobx";

class Store {

    _showSignUp = false
    _showSignIn = false

    constructor() {
        makeAutoObservable(this)
    }

    set showSignUp(bool: boolean) {
        this._showSignUp = bool
    }
    set showSignIn(bool: boolean) {
        this._showSignIn = bool
    }

    get showSignUp () {
        return toJS(this._showSignUp)
    }
    get showSignIn () {
        return toJS(this._showSignIn)
    }
}

export default new Store()