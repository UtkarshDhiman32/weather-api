import "./CSS/ShopCategory.css";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import new_productmen from "../Components/Assets/new_productmen";
import new_productwomen from "../Components/Assets/new_productwomen";
import new_productkids from "../Components/Assets/new_productkids";
import { Link } from "react-router-dom";

function ShopCategory({ category, banner }) {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const filteredProducts = all_product.filter(
      (item) => item.category === category
    );
    setVisibleProducts(filteredProducts);
  }, [category, all_product]);

  const loadMore = () => {
    let newProducts = [];
    if (category === "men") newProducts = new_productmen;
    else if (category === "women") newProducts = new_productwomen;
    else if (category === "kid") newProducts = new_productkids;

    setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
  };

  const handleSort = (order) => {
    const sortedProducts = [...visibleProducts].sort((a, b) =>
      order === "low-to-high"
        ? a.new_price - b.new_price
        : b.new_price - a.new_price
    );
    setVisibleProducts(sortedProducts);
    setSortOrder(order);
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="Category Banner" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {visibleProducts.length}</span> out of 36 products
        </p>

        <div className="dropdown ml-2" >
  <button className="btn btn-secondary  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
<span>Sort by</span> 
<img src={dropdown_icon} alt="Dropdown Icon" />

 </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#" onClick={() => handleSort("low-to-high")} >Prices: Low to high</a></li>
    <li><a className="dropdown-item" href="#" onClick={() => handleSort("high-to-low")} >Prices: High to low</a></li>
  </ul>
</div>


        
      </div>
      

      <div className="shopcategory-products">
        {visibleProducts.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>

      <div className="shopcategory-loadmore" onClick={loadMore}>
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
