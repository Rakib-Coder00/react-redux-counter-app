import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cartSlice';

const ProductItem = (props) => {
  const { title, price, name, id } = props;

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem({
      id,
      title,
      price,
      name
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{name}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
