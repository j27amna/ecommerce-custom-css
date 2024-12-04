import React from 'react'

const page = () => {
  return (
    <main className='contact-container'>
      <section className='contact-form'>
        <h2 className='about-title'>Contact Us</h2>
        <form>
        <input type="text" placeholder='First Name' required />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='Email' required/>
        <input type="tel" placeholder='Contact' />
        <textarea placeholder='Your Feedback' rows={6} required></textarea>
        <button type='submit'>Send Message</button>
        </form>
      </section>
    </main>
  )
}

export default page