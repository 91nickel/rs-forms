import React                       from 'react'
import SignUpForm, { IFormValues } from "../components/signUpForm";

function SignUp() {
    function handleSubmit(formData: IFormValues) {
        console.log('SignIn->handleSubmit', formData)
        alert(JSON.stringify(formData, null, 2))
    }

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-6 col-lg-4">
                <h2>Регистрация</h2>
                <SignUpForm onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default SignUp