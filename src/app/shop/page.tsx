import React from 'react';
import Image from 'next/image';

interface ishopcart {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string
}

const page = () => {

  const shopcart: ishopcart[] = [
    {
      id: 1,
      name: 'Cradle Chair',
      price: 30000,
      description: "Availabe in various designs and materials, perfect for relaxation, reading or simply unwinding",
      image: '/images/shop1.jpg'
    },
    {
      id: 2,
      name: 'Modern & Minimalist Bedside Table',
      price: 12000,
      description: "Modern, Aesthetic & Affordable Bedside table with microfiber leather and solid wood legs",
      image: '/images/shop2.jpg'
    },
    {
      id: 3,
      name: 'Bed',
      price: 85000,
      description: "Tranform your bedroom with this luxurious king-size bed. Crafted with premium materials, it offers exceptional comfort & style",
      image: '/images/shop3.jpg'
    },
    {
      id: 4,
      name: 'Night Stand',
      price: 11500,
      description: "Solid wood nightstand made of imported larch wood, environmentally friendly and odorless",
      image: '/images/shop4.jpg'
    },
    {
      id: 5,
      name: 'Classic Boss Desk & Library Set',
      price: 210000,
      description: "The expansive desk features a generous work surface, multiple drawers, and a built-in hutch for added storage.",
      image: '/images/shop5.jpg'
    },
    {
      id: 6,
      name: 'Study Table & Chair',
      price: 30000,
      description: "Ideal for small rooms or shared spaces, this table offers a practical solution for studying, working or hobbies.",
      image: './images/shop6.jpg'
    },
    {
      id: 7,
      name: 'Office Chair',
      price: 9000,
      description: "Experience ultimate comfort during work with padded seat, adjustable height and ergonomic design",
      image: '/images/shop7.jpg'
    },
    {
      id: 8,
      name: 'Velvet Chair & Ottoman',
      price: 27000,
      description: "Avai;able in various colors",
      image: '/images/shop8.jpg'
    },
    {
      id: 9,
      name: 'Table & Chair',
      price: 25000,
      description: "Splendid Decor Wooden Pumpkin Style Chair With Small Table",
      image: '/images/shop9.jpg'
    }

  ]
  return (
    <main>
        <div className='furniture-cart'>
          {shopcart.map((shop) => (
            <div key={shop.id} className='cart'>
              <Image className="img" src={shop.image} alt={shop.name} height="400"/>
              <h3>{shop.name}</h3>
              <p><small>{shop.description}</small></p>
              <div className='price'> <b>Rs.{shop.price}</b></div>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
    </main>
  )
}

export default page
