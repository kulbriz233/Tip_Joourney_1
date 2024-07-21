import React, { useState, useEffect } from 'react';
import '../Styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
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
      setVisibleProducts(3);
    } else if (windowWidth <= 480) {
      setVisibleProducts(3);
    } else {
      setVisibleProducts(products.length);
    }
  }, [windowWidth]);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 3);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product-main">
      <div className="homepage" id='products'>
      <div className="content">
        <h1 className="title">Discover Our <br />Unique Products.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
          ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
        </p>
        <button id='cta-button' className="cta-button"><a href="./booking">Get Some</a></button>
      </div>
    </div>

      <div className="product-head">
        <h1>Products Made Specailly For You</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
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
