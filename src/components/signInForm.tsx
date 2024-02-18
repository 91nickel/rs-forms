import React, { useRef, useState }       from 'react'
import TextField                         from "./textInput";
import ITextFieldCommonProps             from "../interface/input.field";
import { FieldTypes, TextFieldVariants } from '../interface/input.field'

enum FieldNames {
    login = 'login',
    pass = 'pass',
}

type IFormValues = {
    [key in FieldNames]: string;
};

interface IProps {
    onSubmit: Function
}

interface IFormFieldDescription extends ITextFieldCommonProps {
    name: FieldNames
    type: FieldTypes
}

const formFields: Array<IFormFieldDescription> = [
    {
        name: FieldNames.login,
        type: FieldTypes.text,
        variant: TextFieldVariants.default,
        label: 'Login',
        description: '',
        placeholder: '',
        required: true,
        className: '',
        error: '',
        radius: 4,
        size: 1,
        disabled: false,
    },
]

const defaultValues = Object.assign({}, ...formFields.map(f => ({[f.name]: ''}))) as IFormValues

const SignInForm = ({}) => {

    const [errors, setErrors] = useState(defaultValues)
    const values = useRef(defaultValues)

    function onInputChange(name: FieldNames, value: string) {
        values.current = {...values.current, [name]: value}
    }

    return (
        <>
            <form>
                {
                    formFields.map((field: IFormFieldDescription, i) => {
                        return (
                            <TextField
                                key={field.name}
                                {...field}
                                error={errors[field.name] || ''}
                                onInput={(value: string) => onInputChange(field.name, value)}
                                onChange={(value: string) => onInputChange(field.name, value)}
                            />
                        )
                    })
                }
            </form>
        </>
    )
}

export default SignInForm
