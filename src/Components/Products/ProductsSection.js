import React from "react";

const ProductsBody = ({ item }) => (
        <div className="maincontainer__products-sub">
            <h1 className="gridHeader">{item.product}</h1>
            <p className="gridHeader_pricing">$ {item.price}</p>
            <img className="imageStyling" src={item.image} alt={item.alt} 
                height={'140px'} width={'140px'} />
                <p class="descriptionStyling descriptionStyling_format">
                    {item.description}
                </p>
            <button>Buy Now</button>
          </div>
)

export default ProductsBody;