interface Interface {
    checked: boolean
    id: number
    value: string
}
export const dropCheckedState = (options: Interface[]) => {
    return options.map(e => {
        e.checked = false
        return e
    })
}