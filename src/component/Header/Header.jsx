import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='herder-component'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/log in">Log In</Link>
            </div>
        </div>
    );
};

export default Header;