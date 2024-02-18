import React      from 'react'
import SignInForm from "components/signInForm";

const SignIn = () => {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-6 col-lg-4">
                <h2>Авторизация</h2>
                <SignInForm/>
            </div>
        </div>
    )
}

export default SignIn
