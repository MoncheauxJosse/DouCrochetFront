import React, { useEffect,useState } from 'react';
import {getAll} from '../api/backend/product';

const ProductsView = () => {

    const [allProducts, setProducts] = useState([]);

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


    console.log(allProducts.data)

    return(
        <div>

        </div>
    )
}

export default ProductsView;