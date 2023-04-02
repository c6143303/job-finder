"use client"
import React, {useState} from 'react';
import DefaultButton from "../../../../components/buttons/DefaultButton";
import arrowRight from '/public/images/arrowRight.svg'
import searchIcon from '/public/images/searchIcon.svg'
import Image from "next/image";
import clearIcon from '/public/images/clearIcon.svg'
import styles from './Hero.SearchBar.module.scss'
import HeroSearchBarDropdown from "./Hero.SearchBarDropdown";
import {stringRemoveBackspaces} from "../../../../util/stringRemoveBackspaces";
import Container from "../../../../components/containers/Container";

const STATIC_DROPDOWN_OPTIONS = [
    {id: 0, value: 'New Zealand', link: '/s'},
    {id: 1, value: 'New Zealand1', link: '/'},
    {id: 2, value: 'New Zealand2', link: '/'},
]
const HeroSearchBar = () => {
    const [inputValue, setInputValue] = useState('')
    const [filteredDropdownOptions, setFilteredDropdownOptions] = useState(STATIC_DROPDOWN_OPTIONS)
    const showSearchDropdown = inputValue.length && filteredDropdownOptions.length

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value

        const filteredOptions = STATIC_DROPDOWN_OPTIONS.filter(e => {
            const currentVal = stringRemoveBackspaces(e.value).toLowerCase()
            const inputVal = stringRemoveBackspaces(inputValue).toLowerCase()

            if (currentVal.search(inputVal) !== -1) return e
        })

        setFilteredDropdownOptions(filteredOptions)
        setInputValue(val)
    }

    const clearHandler = () => {
        setInputValue('')
    }
    return (
        <div className={styles.search}>
            <div className={'modal'}>
                <Container>
                    <div className={styles.searchContainer}>
                        <div className={styles.searchInputWrapper}>
                            <div className={styles.searchInputWrapperLeft}>
                                <Image height={searchIcon.height} width={searchIcon.width} src={searchIcon.src}
                                       alt={'search icon'}/>
                                <input value={inputValue} onChange={e => inputHandler(e)} placeholder={'Search for jobs'}
                                       className={styles.input} type="text"/>
                            </div>
                            <div className={styles.searchInputWrapperRight}>
                                {!inputValue.length ? null :
                                    <Image onClick={clearHandler} className={styles.clearIcon} src={clearIcon.src} alt={'clearIcon'}
                                           width={clearIcon.width} height={clearIcon.height}/>
                                }
                                <DefaultButton icon={arrowRight} buttonType={'filledIcon'} value={'Search job'}/>
                            </div>
                        </div>
                        {showSearchDropdown ? <HeroSearchBarDropdown options={filteredDropdownOptions}/> : null}
                    </div>
                </Container>
            </div>
        </div>

    );
};

export default HeroSearchBar;