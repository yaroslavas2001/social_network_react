export const required = (value) => {
    if (value) return undefined
    return "Field is Required "
}

export const maxLenghtCreator = (maxLenght) => value => {
    if (value && value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`
    return undefined
}