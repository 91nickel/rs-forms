import React, { useState }                          from "react";
import ITextFieldCommonProps, { TextFieldVariants } from "../interface/input.field";
import TextField                                    from "./textInput";

const defaultParams: ITextFieldCommonProps = {
    type: 'text',
    className: '',
    description: '',
    error: '',
    label: 'Current Label',
    name: 'name',
    placeholder: 'Your Placeholder',
    variant: TextFieldVariants.default,
    radius: 4,
    size: 1,
    disabled: false,
    required: false,
}

const InputTest = () => {
    const [params, setParams] = useState(defaultParams)

    function handleChange(name: string, value: any) {
        console.log('handleChange', name, value, params)
        setParams(prevState => ({...prevState, [name]: value}))
    }

    console.log(params)

    return (
        <div className="row">
            <div className="col-6 d-flex align-items-center">
                <div className="w-100">
                    <TextField {...params} onChange={() => null} onInput={() => null}/>
                </div>
            </div>
            <div className="col-6">
                <form>
                    {
                        Object.keys(defaultParams).map((key) => {
                            if (key === 'type') return null

                            const value = params[key as keyof ITextFieldCommonProps]

                            if (key === 'variant') {
                                return (
                                    Object.values(TextFieldVariants).map((v => {
                                        return (
                                            <span key={`variant-${v}`}>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    id={`variant-${v}`}
                                                    checked={params.variant === v}
                                                    onChange={() => handleChange('variant', v)}
                                                />
                                                <label
                                                    className="btn btn-secondary"
                                                    htmlFor={`variant-${v}`}
                                                >{v}</label>
                                            </span>
                                        )
                                    }))
                                )
                            }

                            if (typeof value === 'string') {
                                return (
                                    <div key={key} className="input-group my-3">
                                        <div className="w-100">
                                            <label
                                                htmlFor="label"
                                                className="form-label"
                                            >
                                                {key}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id={key}
                                                placeholder={key}
                                                onInput={
                                                    event => {
                                                        const target = event.target as HTMLInputElement
                                                        handleChange(key, target.value)
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                )
                            }

                            if (typeof value === 'number') {
                                return (
                                    <div key={key} className="input-group my-3">
                                        <div className="w-100">
                                            <label
                                                htmlFor={key}
                                                className="form-label"
                                            >
                                                {key}: {value}
                                            </label>
                                            <input
                                                type="range"
                                                className="form-range"
                                                min="0"
                                                max="5"
                                                id={key}
                                                value={value}
                                                onChange={
                                                    event => {
                                                        const target = event.target as HTMLInputElement
                                                        handleChange(key, +target.value)
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div key={key} className="input-group my-3">
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id={key}
                                            checked={value}
                                            onChange={
                                                event => {
                                                    const target = event.target as HTMLInputElement
                                                    handleChange(key, target.checked)
                                                }
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={key}
                                        >
                                            {key}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        </div>
    )
}

export default InputTest