import React, { Component } from "react";
import productslist from '../data/products.json';
import ProductsSection from '../Products/ProductsSection';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "",
            Price: ""
        }
    }
    handlePriceDropdown = (event) => {
        this.setState({
            Price: event.target.value,
        })
    }
    handleCategoryDropdown = (event) => {
        this.setState({
            tag: event.target.value
        })
    }
    render() {
        const { tag, Price } = this.state;
        let displayedProducts = productslist.map((item) => {
            if (tag === '' && Price === '') {
                return <ProductsSection item={item} />
            }
            if (tag !== '' && Price !== '') {
                if (tag === item.tag && Price === item.Price) {
                    return <ProductsSection item={item} /> 
                } 
            }
            if (tag !== '' && Price === '') {
                if (tag === item.tag) {
                    return <ProductsSection item={item} />
                }
            }
            if (tag === '' && Price !== '') {
                if (Price === item.Price) {
                    return <ProductsSection item={item} />
                }
            }
            return null;
        });
        return (
            <div>
                <div className="products-hero">
                    <div>
                        <h2>Latest Products</h2>
                        <p>Designed to make everyday life easier.</p>
                    </div>
                </div>
                <div className="grid__filter">
                    <select value={Price} onChange={this.handlePriceDropdown}>
                        <option value="">Any Price</option>
                        <option value="price0-100">$0 - $100</option>
                        <option value="price100-200">$100 - $200</option>
                        <option value="price200+">$200+</option>
                    </select>
                
                    <select value={tag} onChange={this.handleCategoryDropdown}>
                        <option value="">Any Category</option>
                        <option value="Locks">Locks</option>
                        <option value="Thermostats">Thermostats</option>
                        <option value="Cameras">Cameras</option>
                        <option value="Sensors">Sensors</option>
                    </select>
                </div>

                <div id="product-container">
                    {
                        displayedProducts
                    }
                     
                </div>
            </div>

        )
    }
}

export default Filters;