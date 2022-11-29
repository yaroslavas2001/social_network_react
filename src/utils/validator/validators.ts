export type FielddValidatorType = (value: string) => string | undefined | boolean

export const required: FielddValidatorType = (value) => {
    if (value) return undefined
    return "Field is Required "
}

export const maxLenghtCreator = (maxLenght: number): FielddValidatorType => (value) => {
    if (value && value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`
    return undefined
}

export const checkTextEmpty = (value: string): string  => {
    const textWithoutLetters = value.replace(/[\n\r]/g, '')
    if (textWithoutLetters.length === 0 && value.length > 0)
        return "Don't post empty space"
    if (textWithoutLetters.length === 0 && value.length === 0)
        return "Don't post empty post"
    return undefined
}