import {IFlattenedObject} from "./FlattenedObject.props";


export const flattenedObject = (object: IFlattenedObject, name = 'rules') => {
    let res: any = {}
    Object.keys(object['fields']).map((key: any) => {
        res[key] = object['fields'][key][name]
    })

    return res
}