import Hero from "../Components/Hero/Hero"
import Popular from "../Components/Popular/Popular"
import Offers from "../Components/Offers/Offers"
import NewCollections from "../Components/NewCollections/NewCollections"
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import Product from "./Product"
import Breadcrum from "../Components/Breadcrums/Breadcrum"
function Shop() {
  return (
<div className=""> 
<Hero/>
<Popular/>
<Offers/>
<NewCollections/>
<NewsLetter/>
<Product/>
<Breadcrum/>
</div> 

)
}

export default Shop