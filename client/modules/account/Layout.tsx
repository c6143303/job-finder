'use client'
import React, {useContext, useEffect, useState} from 'react';

import styles from './components/layout.module.scss'
import Container from "../../components/containers/Container";
import Navigation from "./components/Navigation";
import Provider, {Context} from "./store/Provider";
import {observer} from "mobx-react";
import DisplayBody from "./components/DisplayBody";
import useForm from "../../hooks/UseForm";
import {ICompany} from "../../interfaces";
import {flattenedObject} from 'util/FlattenedObject';

const Layout = observer(() => {
    const store = useContext(Context)

    const submitHandler = () => {
        try {
            store.updateCompany(flattenedObject(UseForm.values, 'value'))
                .then(e => alert('data updated'))
        } catch (e) {
            console.log(e)
        }
    }
    const UseForm = useForm(store.formData, () => submitHandler())

    useEffect(() => {
        const promises = Promise.all([
                store.fetchEmployeesOptions(),
                store.fetchSpeakOptions(),
                store.fetchCompany(),
                store.fetchCompanyProducts()
            ]
        )
            .then(e => {
                UseForm.setValues(store.getFormValues())
            })
    }, [])

    return (
        <Provider>
            <Container>
                <section className={styles.layout}>
                    <Navigation/>
                    <div className={styles.body}>
                        <DisplayBody UseForm={UseForm}/>
                    </div>
                </section>
            </Container>
        </Provider>
    )
})

export default Layout;