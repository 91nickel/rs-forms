
export enum FieldTypes {
    text = 'text',
    pass = 'pass',
}

export enum TextFieldVariants {
    default = 'default',
    filled = 'filled',
    unstyled = 'unstyled',
}

export default interface ITextFieldCommonProps {
    name: string
    type: string
    className: string
    placeholder: string
    label: string
    description: string
    error: string
    variant: TextFieldVariants
    radius: number
    size: number
    disabled: boolean
    required: boolean
}