import React      from 'react'
import SignUpForm from "../components/signUpForm";

function SignUp() {
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-12 col-md-6 col-lg-4">
                <h2>Регистрация</h2>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default SignUp