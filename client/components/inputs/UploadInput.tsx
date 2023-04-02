import React, {useRef, useState} from 'react';

import styles from './uploadInput.module.scss'
import Image from "next/image";
import uploadImg from 'public/images/file.svg'
import uploadFile from 'public/images/uploadFile.svg'
import {IUploadInput, ResponseStatusT} from "../../interfaces";

const $STATUS_STYLES = {
    'progress': '',
    'failed': styles.error,
    'success': styles.success
}

const UploadInput: React.FC<IUploadInput> = ({action, method = 'POST', onChange, name, onRemove}) => {
    const ref = useRef<HTMLInputElement>(null)
    const refBar = useRef<HTMLInputElement>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<ResponseStatusT>('success')
    const [showLoadingBar, setShowLoadingBar] = useState(false)
    const [filename, setFilename] = useState<false | string>(false)

    const changeInputHandler = async (event: React.FormEvent) => {
        if (refBar.current) refBar.current.classList.add(styles.active)
        setIsLoading(true)

        const formData = new FormData()
        const target = event.target as HTMLInputElement
        const selectedFile: any = (target.files as FileList)[0]

        if (!selectedFile) return
        setFilename(selectedFile['name'])
        formData.append(name, selectedFile as unknown as Blob)

        let status:ResponseStatusT = 'progress'
        let responseJson: string = ''
        await fetch(action, {
            method: method,
            body: formData
        })
            .then(e => {
                setShowLoadingBar(true)
                if (e.status === 200) {
                    status = 'success'
                } else {
                    status = 'failed'
                }
                setStatus(status)
                return e.json()
            })
            .then(e => responseJson = e)
            .finally(() => {
                return onChange({
                    file: {
                        state: status,
                        name: selectedFile['name'],
                        response: responseJson
                    },
                    event: event
                })
            })
    }

    function onClickHandler() {
        if (ref.current) {
            (ref.current).click()
        }
    }

    function cleanHandler() {
        if (ref.current) {
            ref.current.value = ''
            setIsLoading(false)
        }
        onRemove(true)
    }

    function animationEndHandler() {
        setTimeout(() => {
            setShowLoadingBar(false)
        }, 500)
    }

    return (
        <>
            <div onClick={onClickHandler} className={`${styles.container}`}>
                <Image src={uploadImg.src} alt={'uploadFile'} width={uploadImg.width}
                       height={uploadFile.height}/>
                <p>I will be late about 1 hour, please wait...</p>
                <input ref={ref} hidden={true} onChange={changeInputHandler} type="file"/>
            </div>
            {isLoading && <div className={`${styles.information} ${$STATUS_STYLES[status]}`}>
                <div className={styles.informationHead}>
                    <div className={styles.informationContent}>
                        <div className={styles.uploadImg}></div>
                        {filename && <p>{filename}</p>}
                    </div>
                    <div onClick={cleanHandler} className={styles.informationRemover}></div>
                </div>
                {showLoadingBar &&
                    <div ref={refBar} className={`${styles.loaderWrapper} ${showLoadingBar ? styles.active : ''}`}>
                        <div onAnimationEnd={animationEndHandler} className={`${styles.loader}`}/>
                    </div>}
            </div>}
        </>
    );
};

export default UploadInput;