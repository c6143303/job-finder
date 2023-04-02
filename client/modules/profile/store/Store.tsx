import {makeAutoObservable, toJS} from "mobx";
import {INavigationOptions} from "../../../interfaces";

class Store {
    _navigationOptions: INavigationOptions[] = [
        {text: 'Offers', id: 0},
        {text: 'About', id: 1},
    ]

    _activeOption = 1
    constructor() {
        makeAutoObservable(this)
    }

    get navigateOptions () {
        return toJS(this._navigationOptions)
    }

    set activeOption (id: number) {
        this._activeOption = id
    }

    get activeOption() {
        return toJS(this._activeOption)
    }
}

export default new Store()