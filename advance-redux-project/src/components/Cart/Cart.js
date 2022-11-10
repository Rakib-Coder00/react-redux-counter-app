import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cartItems = useSelector(state => state.cart.items)
  return (
    <>
      {showCart && <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <CartItem key={item.id}
              item={{ title: item.name, qty: item.qty, total: item.totalPrice, price: item.price, id: item.id, }}
            />
          ))
          }
        </ul>
      </Card>}
    </>
  );
};

export default Cart;
