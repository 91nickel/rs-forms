import React, { useState } from "react";
import ITextFieldCommonProps, {
    ITextFieldControllableProps,
    ITextFieldStaticProps,
    TextFieldVariants
}                          from "../interface/input.field";
import TextField           from "./textInput";

const defaultStaticProps: ITextFieldStaticProps = {
    type: 'text',
    className: '',
    name: 'name',
    defaultValue: '',
}

const defaultControllableProps: ITextFieldControllableProps = {
    placeholder: 'Your Placeholder',
    label: 'Current Label',
    description: 'Description',
    error: 'Some error',
    variant: TextFieldVariants.default,
    radius: 4,
    size: 1,
    disabled: false,
    required: false,
}

const defaultProps: ITextFieldCommonProps = {...defaultStaticProps, ...defaultControllableProps}

const InputTest = () => {
    const [props, setProps] = useState(defaultProps)

    function handleChange(name: string, value: any) {
        console.log('handleChange', name, value, props)
        setProps(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-12">
                        <TextField {...props} onChange={() => null} onInput={() => null}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <pre>
                            {JSON.stringify(props, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <form>
                    {
                        Object.keys(defaultControllableProps).map((key) => {

                            const index = key as keyof ITextFieldControllableProps
                            const value = props[index]

                            if (key === 'variant') {
                                return (
                                    <div key={key}>
                                        <label
                                            htmlFor={key}
                                            className="form-label"
                                        >
                                            {key}
                                        </label>
                                        <select
                                            id={key}
                                            name={key}
                                            className="form-select"
                                            onChange={e => handleChange(key, e.target.value)}
                                        >
                                            {
                                                Object.values(TextFieldVariants).map(v =>
                                                    <option
                                                        key={`${key}-${v}`}
                                                        value={v}
                                                    >
                                                        {v}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
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
                                                defaultValue={defaultProps[index].toString()}
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
                                                max={key === 'radius' ? '4' : 2}
                                                id={key}
                                                // value={value}
                                                defaultValue={defaultProps[index].toString()}
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
                                            defaultValue={defaultProps[index].toString()}
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