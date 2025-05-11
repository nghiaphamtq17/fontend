import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off </p>
        <p className='text-gray-400 mt-3 '>
            Subscribe to our newsletter and get the latest updates on new products and upcoming sales.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 m-auto flex items-center justify-between gap-3 mx-auto my-6 mt-5 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox