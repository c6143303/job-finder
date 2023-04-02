"use client"
import React, {useContext, useEffect, useState} from 'react';

import styles from './index.module.scss'
import RangeInput from "../../../../components/inputs/RangeInput";
import CheckboxForm from "../../UI/Checkbox.Form";
import RangeOutput from "../../UI/RangeOutput";
import ResetButton from "../../UI/ResetButton";
import {dropCheckedState} from "../../../../util/dropCheckedState";
import {FilterServices} from "../../../../services/FilterServices";
import {ICategories, IFilterName, ISortOptions} from "../../../../interfaces";
import {Context} from "../../store/Provider";
import {observer} from "mobx-react";
import DropdownV1 from "../../../../components/dropdown/Dropdown_v1";

const $salaryMin = 1000
const $salaryMax = 5000
const FilterLayout = observer(() => {
    const [rangeVal, setRangeVal] = useState($salaryMin)

    const checkboxFormHandler = (name: IFilterName, index: number) => {

        if (name === 'category') {
            store.updateFilterOptionState('category', index)
        }
        if (name === 'type') {
            store.updateFilterOptionState('type', index)
        }
    }

    const rangeHandler = (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLInputElement
        setRangeVal(Number(target.value))
    }

    const [categories, setCategories] = useState<ICategories[]>()
    const [types, setTypes] = useState<ICategories[]>()
    const store = useContext(Context)

    const dropdownClickHandler = (option: ISortOptions) => {
        store.sortOptionActive = option.id
    }
    useEffect(() => {
        store.fetchFilterOptions()
            .then(e => console.log('fetched categories'))
            .catch(e => console.log(e, 'error'))
    }, [])
    return (
        <div className={styles.filter}>
            <div>
                <DropdownV1 className={styles.dropdown} placeholder={'Recommended'} options={store.sortOptions}
                            option={store.sortOptions[store.sortOptionActive]} onChange={dropdownClickHandler}/>
            </div>
            <div className={'divider-hor'}></div>
            <CheckboxForm name={'category'} handler={(optionId) => checkboxFormHandler('category', optionId)}
                          label={'Category'}
                          options={store.categoriesDB} key={'categoryOptions'}/>
            <CheckboxForm name={'type'} handler={(optionId) => checkboxFormHandler('type', optionId)} label={'Type'}
                          options={store.typesDB}
                          key={'typeOptions'}/>
            <div>
                <div className={'divider-hor mb-24'}></div>
                <ResetButton handler={() => store.resetFilter()}/>
            </div>
        </div>
    );
});

export default FilterLayout;