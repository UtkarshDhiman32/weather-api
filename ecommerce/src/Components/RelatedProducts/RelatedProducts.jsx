import './RelatedProducts.css';
import Item from '../Item/Item';
import men_related from '../Assets/men_related';
import women_related from '../Assets/women_related';
import kid_related from '../Assets/kid_related';

function RelatedProducts({ category }) {
  let relatedProducts = [];

  // Determine which dataset to use based on category
  if (category === 'men') {
    relatedProducts = men_related;
  } else if (category === 'women') {
    relatedProducts = women_related;
  } else if (category === 'kid') {
    relatedProducts = kid_related;
  }

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
}

export default RelatedProducts;
