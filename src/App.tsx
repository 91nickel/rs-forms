import React                                from 'react';
import { Navigate, Route, Routes, NavLink } from "react-router-dom";
import SignIn                               from "layouts/signIn";
import SignUp                               from "layouts/signUp";
import TestInput                            from "layouts/testInput";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link me-2" to="/">Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-2" to="/signIn">Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-2" to="/signUp">Sign Up</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link me-2" to="/test">Test</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <Routes>
                <Route path="/" index element={<h1>Home</h1>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/test" element={<TestInput/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;
