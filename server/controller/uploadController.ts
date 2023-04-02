import {Express, Request, Response} from "express";
import ApiError from "../error/ApiError";
import {Company, ProductCategory, ProductType} from '../models/models'
import * as bcrypt from 'bcrypt'
import {ICompany, ILogin, IType} from "../interface";
import {externalIdType} from "aws-sdk/clients/sts";

class UploadController {
    async uploadCv(req: Request, res: Response, next) {
        try {
            res.json(req.file)
        } catch (e) {
            next(e)
        }
    }

    async uploadAvatar(req: Request, res: Response, next) {
        try {
            res.json(req.file)
        } catch (e) {
            next(e)
        }
    }
}

export default new UploadController()