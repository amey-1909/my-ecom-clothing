import React, { Fragment } from "react";
import { ReactComponent as Crown} from "./crown.svg";
import CartIcon from "../cart-Icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { Outlet,Link } from "react-router-dom";
import "./navigation.styles.scss"
import { SignOutUser } from "../utils/fireBase/firebase.utilities";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../../Store/userReducer/userSelector";
function NavBar(){
    let currentUser=useSelector(currentUserSelector)
    async function handleClick(){
        await SignOutUser();
    }
    return (
    <Fragment>
     <div className="navigation">
    <div className="logo-container">
    <Link to="/"><Crown/></Link>
    </div>
    <div className="nav-links-container">
    <Link className="nav-link" to="/shop">Shop</Link>
    <Link className="nav-link" to="/contact">Contact</Link>
    {currentUser?<span className="nav-link" onClick={handleClick}>Sign Out</span>:<Link className="nav-link" to="/signIn">Sign In</Link>}
    <CartIcon />
    <CartDropdown/>
    </div>
    </div>
    <Outlet></Outlet>    
    </Fragment>
    )
}
export default NavBar