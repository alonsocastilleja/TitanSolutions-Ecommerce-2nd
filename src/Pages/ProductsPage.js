import React from 'react';
import NavBar from '../Components/Utilities/NavBar'
import ProductsSection from '../Components/Products/Filter';
import Footer from '../Components/Utilities/Footer';




const ProductsPage = () => {
    return (
        <div>
            <NavBar />
            <ProductsSection />
            <Footer />
        </div>
    )
}

export default ProductsPage;