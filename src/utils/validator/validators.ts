export const required = (value:any) => {
    if (value) return undefined
    return "Field is Required "
}

export const maxLenghtCreator = (maxLenght:number) => (value: string | any) => {
    if (value && value.length > maxLenght) return `Max lenght is ${maxLenght} symbols`
    return undefined
}