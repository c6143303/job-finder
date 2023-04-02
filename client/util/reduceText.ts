export const reduceText = (text: string, length: number) => {
    const shortedText = text.split('').splice(0, length).join('')
    return text.length >= length ? shortedText + '...' : shortedText

}