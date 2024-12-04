import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';

const page = () => {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
       <Products />
      </div>
    </main>
  )
}

export default page

