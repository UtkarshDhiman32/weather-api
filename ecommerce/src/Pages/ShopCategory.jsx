import './CSS/ShopCategory.css';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import new_productmen from '../Components/Assets/new_productmen';
import new_productwomen from '../Components/Assets/new_productwomen';
import new_productkids from '../Components/Assets/new_productkids';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState([]);

  // Debugging: Log the props.category
  console.log("Props Category:", props.category);

  // Update visibleProducts when category changes
  useEffect(() => {
    const filteredProducts = all_product.filter(item => item.category === props.category);
    setVisibleProducts(filteredProducts);
  }, [props.category, all_product]);

  const loadmore = () => {
    let newProducts = [];

    // Debugging: Log the current category
    console.log("Current Category:", props.category);

    // Check category and append correct products
    if (props.category === "men") {
      newProducts = new_productmen; // No need to filter, as all items are for men
    } else if (props.category === "women") {
      newProducts = new_productwomen; // No need to filter, as all items are for women
    } else if (props.category === "kids") {
      newProducts = new_productkids; // No need to filter, as all items are for kids
      console.log("Kids Products:", newProducts); // Debugging: Log the kids products
    }

    // Debugging: Log the new products being appended
    console.log("New Products to Append:", newProducts);

    // Append new products to the current visibleProducts
    setVisibleProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, ...newProducts];
      console.log("Updated Visible Products:", updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {visibleProducts.length}</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {visibleProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore" onClick={loadmore}>
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;