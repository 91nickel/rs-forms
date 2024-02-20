import React                       from 'react'
import SignInForm, { IFormValues } from "components/signInForm";

const SignIn = () => {
    function handleSubmit (formData: IFormValues) {
        console.log('SignIn->handleSubmit', formData)
        alert(JSON.stringify(formData, null, 2))
    }
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-6 col-lg-4">
                <h2>Авторизация</h2>
                <SignInForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default SignIn
