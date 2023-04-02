import {IDropdownOption, ISubItem} from "../interfaces";

export function rewriteVariableInside(data: ISubItem[]): IDropdownOption[] {
    const response = data.map(e => {
        return {
            value: e.name,
            id: e.id
        }
    })

    return response
}
