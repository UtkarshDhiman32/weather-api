import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import plus_icon from "../Assets/plus_icon.png";
import minus_icon from "../Assets/minus-sign.png";
import "./ProductDisplay.css";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart, getTotalCartItems,removeFromCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="prodctdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div className="S">S</div>
            <div className="M">M</div>
            <div className="L">L</div>
            <div className="XL">XL</div>
            <div className="XXL">XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <br />
        <img
          className="plus"
          src={plus_icon}
          alt="plus icon"
          onClick={() => addToCart(product.id)}
        />
        <img className="minus-icon" src={minus_icon} alt="" onClick={()=>removeFromCart(product.id)} />
        <p className="product-display-category">
          <span>Category:</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-category">
          <span>Tags:</span> Modern, Latest
        </p>

        {/* Display total cart items */}
        <p>Total Items in Cart: {getTotalCartItems()}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
