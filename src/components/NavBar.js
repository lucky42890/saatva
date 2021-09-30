import { useContext } from 'react';
import { ReactComponent as LogoSvg } from '../assets/icons/logo.svg';
import { ReactComponent as ShoppingCartSvg } from '../assets/icons/shopping-cart.svg';
import { cartContext } from '../utils/cartContext';

const NavBar = () => {
  const { cartNumber } = useContext(cartContext);

  return (
    <div className="app-nav">
      <div className="container nav-container">
        <LogoSvg />
        
        <button className="cart-link">
          <ShoppingCartSvg />
          <span className="cart-count" data-testid="cartCount">{cartNumber}</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar;