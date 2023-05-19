import { Link } from 'react-router-dom';
import './LogIn.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
const LogIn = () => {
    const [error, setError] = useState('')
    const { logUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        logUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-tittle">LogIn</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />

                </form>
                <p><small className="account-info">New to ema-john</small><Link className='account-link' to="/register">Create New account</Link></p>
                <p>{error}</p>

            </div>
        </div>
    );
};

export default LogIn;