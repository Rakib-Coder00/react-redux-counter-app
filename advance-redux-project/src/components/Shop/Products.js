import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dumProducts = [
  {
    id: 'pl',
    price: 7,
    title: 'My Favorite Book',
    name: 'adventure book',
  },
  {
    id: 'ghl',
    price: 5,
    title: 'My Favorite Book',
    name: 'Drama Book',
  },
  {
    id: 'plob',
    price: 9,
    title: 'My 3rd Book',
    name: 'Thriller book',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          dumProducts.map((product) => (
            <ProductItem
              title={product.name}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          )
          )}

      </ul>
    </section>
  );
};

export default Products;
