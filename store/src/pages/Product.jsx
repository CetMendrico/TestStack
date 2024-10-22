import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams();

    useEffect(() => {
        const fetchSingleProduct = async (id) =>{
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    return console.log('Network Failed');
                }
                const data = await response.json();

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSingleProduct(params.product_id);
    }, []);

    return (
        <div className="border p-4 flex gap-4" >
            <div>
                <img src={product.image} className="w-24 h-28" /> 
            </div>
            <div className='text-left'></div>
                <h3 className='font-bold text-xl block mb-4'>{product.title}</h3>
                <div className='block mb-8'>
                    <span className='border rounded-lg p-1 bg-green-900 text-white'>
                        {product.category}
                    </span>
                </div>

                <span className='text-2x1'>{product.price}</span>
        </div>
    )
};

export default Product;