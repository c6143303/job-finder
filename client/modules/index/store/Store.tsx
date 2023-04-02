import {makeAutoObservable, runInAction, toJS} from "mobx";
import {ICategories, IFilterName, IProduct, TSort} from "../../../interfaces";
import {ProductService} from "../../../services/ProductService";
import axios from "../../../http";

function addCheckField(categories: ICategories[]) {
    return categories.map(e => {
        e.checked = false
        return e
    });
}
function extractCheckedIds(arr: ICategories[]): Array<number> {
    let res: Array<number> = []
    arr.filter(e => e.checked ? res.push(e.id) : '')
    return res
}

class Store {
    _productsDB: IProduct[] = []
    _categoryId: number[] = []
    _typeId: number[] = []
    _currentPage = 1
    _pageCount = 0
    _pageSize = 5
    _showPagination = true
    _categoriesDB: ICategories[] = []
    _typesDB: ICategories[] = []
    _sortOptions = [
        {id: 0, value: 'By date', query: 'date'},
        {id: 1, value: 'high-low', query: 'low'},
        {id: 2, value: 'low-high', query: 'high'},
    ]
    _sortOptionActive: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    async fetchFilterOptions() {
        try {
            const categories: { data: ICategories[] } = await axios.get('/category/get-all')
            const types: { data: ICategories[] } = await axios.get('/type/get-all')

            runInAction(() => {
                this._categoriesDB = addCheckField(categories.data);
                this._typesDB = addCheckField(types.data);
            })
        } catch (e: any) {
            throw e?.request?.data?.message
        }
    }

    async fetchProducts() {
        await runInAction(async () => {
            try {
                const sortQuery = this._sortOptions[this._sortOptionActive].query as TSort;
                const response = await ProductService.getProducts(this._pageSize * this._currentPage, 1, this._categoryId, this._typeId, sortQuery)

                runInAction(() => {
                    this._productsDB = response.rows
                    this._pageCount = response.count
                    this._showPagination = !(this._pageSize * this._currentPage >= this._pageCount)
                })

                return toJS(response);
            } catch (e) {
                console.log(e)
            }
        })
    }

    resetFilter() {
        runInAction(() => {
            this._categoriesDB.map(e => e.checked = false)
            this._typesDB.map(e => e.checked = false)
            this._sortOptionActive = 0
        })

        this.updateQueryIds()
        this.fetchProducts()
    }

    private updateQueryIds() {
        this._categoryId = extractCheckedIds(this._categoriesDB)
        this._typeId = extractCheckedIds(this._typesDB)
    }

    updateFilterOptionState(name: IFilterName, index: number) {
        if (name === 'category') {
            this._categoriesDB[index]['checked'] = !this._categoriesDB[index]['checked']
        } else if (name === 'type') {
            this._typesDB[index]['checked'] = !this._typesDB[index]['checked']
        }

        this.updateQueryIds()
        this.fetchProducts()
    }

    get categoriesDB() {
        return toJS(this._categoriesDB)
    }

    get typesDB() {
        return toJS(this._typesDB)
    }

    get sortOptions() {
        return toJS(this._sortOptions)
    }

    get sortOptionActive() {
        return toJS(this._sortOptionActive)
    }

    get productDB() {
        return toJS(this._productsDB)
    }

    get showPagination() {
        return toJS(this._showPagination)
    }

    set sortOptionActive(index: number) {
        runInAction(() => this._sortOptionActive = index)
        this.fetchProducts()
    }

    set currentPage(number: number) {
        runInAction(() => this._currentPage += number)
    }
}

export default new Store()