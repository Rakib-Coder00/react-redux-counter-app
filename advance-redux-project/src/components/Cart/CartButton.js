import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/features/uiSlice';

const CartButton = (props) => {
  const disPatch =useDispatch()
  const toggleCart = () => {
    disPatch(toggle())
  }
  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
