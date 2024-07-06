import React, { useState, useEffect } from 'react';
import '../Styles/Products.css';

const products = [
  { id: 1, name: "Rainbow Cocktail", price: "$10", image: require('../Images/bob5.png'), description: "A vibrant mix of flavors in a rainbow spectrum." },
  { id: 2, name: "Mojito", price: "$8", image: require('../Images/bob2.png'), description: "Refreshing mint and lime cocktail." },
  { id: 3, name: "Margarita", price: "$9", image: require('../Images/bo4.png'), description: "Classic cocktail with a tangy twist." },
  { id: 4, name: "Pina Colada", price: "$12", image: require('../Images/bob6.png'), description: "Tropical cocktail with pineapple and coconut." },
  { id: 5, name: "Martini", price: "$11", image: require('../Images/bob1.png'), description: "Sophisticated and timeless cocktail." },
  { id: 6, name: "Old Fashioned", price: "$10", image: require('../Images/bob2.png'), description: "A classic cocktail with a modern twist." },
  { id: 7, name: "Bloody Mary", price: "$10", image: require('../Images/bo4.png'), description: "A savory cocktail with a spicy kick." },
  { id: 8, name: "Cosmopolitan", price: "$10", image: require('../Images/bob5.png'), description: "A chic and fruity cocktail." },
  { id: 9, name: "Daiquiri", price: "$9", image: require('../Images/bob6.png'), description: "A sweet and sour rum-based cocktail." },
  { id: 10, name: "Whiskey Sour", price: "$11", image: require('../Images/bob1.png'), description: "A perfect blend of whiskey and citrus." },
  { id: 11, name: "Mai Tai", price: "$12", image: require('../Images/bob5.png'), description: "A tropical cocktail with a rich history." },
  { id: 12, name: "Negroni", price: "$10", image: require('../Images/bob5.png'), description: "A bitter and bold cocktail." }
];

function Products() {
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 1068) {
      setVisibleProducts(3);
    } else if (windowWidth <= 1920) {
      setVisibleProducts(5);
    } else if (windowWidth <= 480) {
      setVisibleProducts(5);
    } else {
      setVisibleProducts(products.length);
    }
  }, [windowWidth]);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 3);
  };

  return (
    <div className="product-main">
        <div className="product-page-container">
  <div className="product-page-content">
    <h1 className="product-page-title">Discover Our <br /> Unique Products.</h1>
    <p className="product-page-description">
      Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
      ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
    </p>
    <button className="product-page-cta-button">Explore More</button>
  </div>
</div>

      <div className="product-head">
        <h1>Our Cocktails</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button className="show-more-button" onClick={showMoreProducts}>
          View More
        </button>
      )}
    </div>
  );
}

export default Products;
