import React, { useEffect,useState } from 'react';
import {getAll} from '../api/backend/product';

const ProductsView = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getAll();
            setProducts(
                productsData
            )
            console.log(productsData)
            // getAll().then( async (response) => {
            //     console.log(response.data)
            //     const result = await response.data
            //     setProducts(result)
            //     console.log(allProducts)
            // })
            
        }

        fetchData()

    },[])


    console.log(products.data)

    return(
      <div></div>
  //       {products.map(product =>(
  //       <div key = {product._id}>
          
  //           <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  // <div className="px-6 py-4">
  //   <div classNamess="font-bold text-xl mb-2">The Coldest Sunset</div>
  //   <p className="text-gray-700 text-base">
  //     {product.description}
  //   </p>
  // </div>
  // <div className="px-6 pt-4 pb-2">
  //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
  //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  //   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  // </div>  

  //       </div>
          // ))}   
    )
}

export default ProductsView;