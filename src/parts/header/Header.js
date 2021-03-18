import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from '../../context/StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className='header'>
            <Link to="/">
              <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header_logo" />
            </Link>
            <div className="header__location">
                <div className="header__locationLogo">
                    <LocationOnOutlinedIcon className="location__logo"/>
                </div>
                <div className="location__ctn">
                    <span className="location__details">Deliver to</span>
                    <span className="location__details">France</span>
                </div>
            </div>
            <div className="header__search">
            <Button className="header__ButtonCategorie" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Toutes nos catégories
                          <KeyboardArrowDownOutlinedIcon className="header__categorieLogo"/>
             </Button>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className="categorie__menu"
                >
                <MenuItem onClick={handleClose} className="categorie__menu">Alexa Skill</MenuItem>
                <MenuItem onClick={handleClose} className="categorie__menu">Amazon Warehouse</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Animalerie</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Appareils Amazon</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Applis et jeux</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Auto et moto</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Bagages</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Beauté et parfum</MenuItem>
                    <MenuItem onClick={handleClose} className="categorie__menu">Animalerie</MenuItem>
                </Menu>
                <input className='header__searchInput' type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__option baskets">
                        <div className="baskets__ctn">
                            <ShoppingCartOutlinedIcon className="baskets__icon" />
                            <span className="baskets__Count">{ basket?.length }</span>
                        </div>
                         <span className="baskets__text">Cart</span>
                    </div>
                </Link>
                                
            </div>
       
        </div>
    )
}

export default Header
