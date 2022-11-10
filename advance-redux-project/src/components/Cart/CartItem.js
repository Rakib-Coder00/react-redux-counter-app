import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/features/cartSlice';

const CartItem = (props) => {
  const {  title, qty, total, price, id } = props.item;
  console.log(title, qty, total, price, id);

  const disPatch = useDispatch()
  const removeCartItem = () => {
    disPatch(removeItem(id))
  }

  const addToCart = () => {
    disPatch(addToCart({
      id,
      price,
      title,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItem}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
