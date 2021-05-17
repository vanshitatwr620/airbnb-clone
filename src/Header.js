import React from 'react'
import './Header.css'
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";



function Header() {
    const history = useHistory();
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <Button onClick={()=>history.push('/search')}>
                    <SearchIcon/>
                </Button>
            </div>

            <div className='header__right'>
                <p>Become a host &nbsp; </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
