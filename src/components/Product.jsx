import React, { useState } from 'react';
import Products from './ProductList';
import { Link } from 'react-router-dom';


const Product= () => {
  const [isShow, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
const [filteredProducts, setFilteredProducts] = useState(Products);
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 6; // Number of products per page


   // Logic to calculate indexes of products for the current page
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
 
  const handleSearch = () => {
    const value = searchTerm.toLowerCase().trim();
    if (value === '') {
      setError('Please enter a product name');
      setFilteredProducts(Products)
    } else {
      const result = Products.filter(product =>
        product.title.toLowerCase().includes(value)
      );
      if (result.length === 0) {
        setError('No products found. Please try again.');
      } else {
        setError('');
        setFilteredProducts(result);
        setCurrentPage(1);
      }
    }
  };

   // Handle pagination click
  //  const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //     // Scroll to the top of the page
  //     window.scrollTo(0, 0);
  // };

  return (
    <>
     
    <section className="container">
    <section className="search">
    <div className="search-bar">

    <input type="text"
     placeholder='Search for Products'
     value={searchTerm} 
     onChange={(e) => setSearchTerm(e.target.value)}
     />
    <button onClick={handleSearch}>search</button>
    </div>
    {error && <p className="error">{error}</p>}
    </section>
  </section>
      <div className="product-list">
        {currentProducts.map(product => (
          <div className='card' key={product.id} onClick={() => setShow(!isShow)}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="card-content">
              <h3 className='title'>{product.title}</h3>
              <p className={isShow ? 'show' : 'cards'}>{product.content}</p>
            </div>
              <button> <Link to="https://wa.link/6ta3v9" target="_blank" rel="noopener noreferrer">Purchase</Link> </button> 
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>))}
      </div>
    </>
  );
};

export default Product
