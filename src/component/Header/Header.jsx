import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='header-area'>
            <img src={logo} alt="" />
            <p>{user && <span>Welcome {user.email}</span>}</p>
            <div className='herder-component'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;