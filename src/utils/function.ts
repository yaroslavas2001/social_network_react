export const join = (ClassName: Array<string>) => {
    if(ClassName && ClassName.length>0)
    return ClassName.join(" ")
    else return ''
}