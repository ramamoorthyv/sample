import {    
    NavLink  
  } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';

const Menu = () => {

    return (
        <div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/signup'}>signup</NavLink>

        </div>
    );
};

export default Menu;