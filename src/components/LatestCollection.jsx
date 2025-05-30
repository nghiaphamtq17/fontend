import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextReal'
import Title from './Title'
import ProsuctItem from './ProductItem'

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProsucts] = useState([]);

    useEffect(() => {
        setLatestProsucts(products.slice(0, 10));

       
    }, [])

    console.log('latestProducts', latestProducts);
    

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.
                </p>
            </div>
        {/* Rendering products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts && latestProducts.map((item, index ) => (
                    <ProsuctItem key = {index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>

        </div>
    )
}

export default LatestCollection