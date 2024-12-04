import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <main>
      <section className="products-section">
        <div className="products-header">
          <h1 className="products-title">Browse The Range</h1>
          <br />
          <p className="products-description">
            Find the perfect pieces to make your place feel like yours.
          </p>
        </div>

        <div className="products-gallery-container">
          <div className="products-gallery">
            <Image
              className="products-image"
              width="400"
              height="800"
              src="/images/coff.jpg"
              alt="Living"
            />
            <Image
              className="products-image"
              width="400"
              height="800"
              src="/images/study.jpg"
              alt="Study"
            />
            <Image
              className="products-image image-bed"
              width="350"
              height="800"
              src="/images/beds.jpg"
              alt="Bedroom"
            />
          </div>
        </div>

        <div className="products-categories">
          <ul className="categories-list">
            <li className="category-item category-living">Living</li>
            <li className="category-item category-study">Study</li>
            <li className="category-item category-bedroom">Bedroom</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Products;
