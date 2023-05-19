import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value
        //console.log(email, password, confirmPassword)
        setError('')

        if (password !== confirmPassword) {
            setError('Your Password did Not Match')
            return
        }
        else if (password.length < 6) {
            setError('Password Must be six character or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="form-container">
                <h2 className="form-tittle">SignUp</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />

                </form>
                <p><small className="account-info">Already have an account?</small><Link className='account-link' to="/login">LogIn</Link></p>

                <p className="text-error">{error}</p>

            </div>
        </div>
    );
};

export default Register;