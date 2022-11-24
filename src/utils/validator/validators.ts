export type FielddValidatorType = (value: string) => string | undefined
export const required: FielddValidatorType = (value) => {
    if (value) return undefined
    return "Field is Required "
}

export const maxLenghtCreator = (maxLenght: number): FielddValidatorType => (value) => {
    if (value && value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`
    return undefined
}