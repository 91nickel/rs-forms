import React                                        from 'react'
import ITextFieldCommonProps, { TextFieldVariants } from "../interface/input.field";

interface ITextFieldProps extends ITextFieldCommonProps {
    onChange: Function
    onInput: Function
}

const TextField = (
    {
        onChange,
        onInput,
        ...props
    }: ITextFieldProps
) => {
    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement
        onChange(target.value)
    }

    const getInputClasses = () => {
        const classes = ['form-control']
        if (props.error)
            classes.push('is-invalid')

        return classes.join(' ')
    }

    return (
        <div className={props.className}>
            <label htmlFor={props.name}>{props.label}</label>
            {props.description && <p>{props.description}</p>}
            <div className="input-group has-validation">
                <input
                    {...props}
                    className={getInputClasses()}
                    onChange={handleChange}
                    onInput={handleChange}
                />
                {props.error && <div className="invalid-feedback">{props.error}</div>}
            </div>
        </div>
    )
}

export default TextField
