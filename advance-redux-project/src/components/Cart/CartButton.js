import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/features/uiSlice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const disPatch = useDispatch()
  const cartQty = useSelector(state => state.cart.totalQty)
  const toggleCart = () => {
    disPatch(toggle())
  }
  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
