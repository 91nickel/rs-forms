import React, { useRef, useState }                              from 'react'
import ITextFieldCommonProps, { FieldTypes, TextFieldVariants } from "../interface/input.field";
import TextField                                                from "./textInput";

enum FieldNames {
    name = 'name',
    login = 'login',
    email = 'email',
    sex = 'sex',
    password = 'password',
    confirm = 'confirm',
}

export type IFormValues = {
    [key in FieldNames]: string;
};

interface IProps {
    onSubmit: Function
}

interface ITextFieldDescription extends ITextFieldCommonProps {
    name: FieldNames
    type: FieldTypes
}

interface IRadioInputDescription {
    text: string
    value: string
}

interface IRadioGroupDescription {
    label: string
    name: FieldNames
    error: string
    disabled: false,
    required: true,
    variants: string[]
}

const defaultTextFieldDescription: ITextFieldDescription = {
    name: FieldNames.name,
    className: '',
    type: FieldTypes.text,
    defaultValue: '',

    placeholder: '',
    label: 'Login',
    description: '',
    error: '',
    variant: TextFieldVariants.default,
    radius: 4,
    size: 1,
    disabled: false,
    required: true,
}

const formFields: Array<ITextFieldDescription | IRadioGroupDescription> = [
    {
        ...defaultTextFieldDescription,
        name: FieldNames.name,
        type: FieldTypes.text,
        label: 'Name',
        placeholder: 'Your name',
    },
    {
        ...defaultTextFieldDescription,
        name: FieldNames.login,
        type: FieldTypes.text,
        label: 'Nickname',
        placeholder: 'Your nickname',
        text: '@',
    },
    {
        ...defaultTextFieldDescription,
        name: FieldNames.email,
        type: FieldTypes.email,
        placeholder: 'Your E-mail',
        label: 'E-mail',
    },
    {
        label: 'Sex',
        name: FieldNames.sex,
        error: 'saass',
        disabled: false,
        required: true,
        variants: ['Male', 'Female']
    },
    {
        ...defaultTextFieldDescription,
        name: FieldNames.password,
        type: FieldTypes.password,
        placeholder: 'Your password',
        label: 'Password',
    },
    {
        ...defaultTextFieldDescription,
        name: FieldNames.confirm,
        type: FieldTypes.password,
        placeholder: 'Confirm your password',
        label: 'Confirm password',
    },
]

const defaultValues = Object.assign({}, ...formFields.map(f => ({[f.name]: ''}))) as IFormValues

export default function SignUpForm({onSubmit}: IProps) {

    const [errors, setErrors] = useState(defaultValues)
    const values = useRef(defaultValues)

    function handleChange(name: FieldNames, value: string | number) {
        console.log(name, value)
        values.current = {...values.current, [name]: value}
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        onSubmit(values.current)
    }
    const validated = false

    return (
        <form className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
            {
                formFields.map((field: ITextFieldDescription | IRadioGroupDescription) => {
                    if (field.name === FieldNames.sex) {
                        return (
                            <div key={field.name} className="input-group has-validation">
                                <label className="w-100 mb-1">
                                    {field.label}
                                    {field.required && <span className="text-danger ps-1">*</span>}
                                </label>
                                {
                                    (field as IRadioGroupDescription).variants.map(
                                        (text: string, i, arr) => {
                                            const id = `${field.name}-${i}`
                                            return (
                                                <div key={i} className="form-check mb-3 w-100">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input"
                                                        id={id}
                                                        name={field.name}
                                                        required={field.required}
                                                        defaultValue=""
                                                        onChange={() => handleChange(field.name, arr[i])}
                                                    />
                                                    <label className="form-check-label" htmlFor={id}>
                                                        {text}
                                                    </label>
                                                    {
                                                        field.error
                                                        && i === arr.length - 1
                                                        && <div className="invalid-feedback w-100">{field.error}</div>
                                                    }
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        )
                    }

                    return (
                        <TextField
                            key={field.name}
                            {...field as ITextFieldDescription}
                            error={errors[field.name] || ''}
                            onInput={(value: string) => handleChange(field.name, value)}
                            onChange={(value: string) => handleChange(field.name, value)}
                        />
                    )
                })
            }
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
