import {ICompanyApplication} from "../../../interfaces";
import React, {HTMLAttributes} from "react";


export interface MessageCardProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    email: string
    cv: string
    message: string
    checked: boolean
    date: Date
    lastname: string
    userName: string
    downloadCvHandler: () => void
    updateCheckedStatus: () => void
}