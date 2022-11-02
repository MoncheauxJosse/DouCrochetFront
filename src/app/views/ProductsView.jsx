import React, { useEffect, useState } from "react";
import { getAll } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [loader, setloader] = useState({ state: false });

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getAll();
      setProducts(productsData);
      console.log(productsData);
    };

    fetchData();
    setloader({ state: true });
  }, []);

  console.log(products.data);

  if (loader.state == false) {
    console.log(loader.sta);
    return (
      <div>
        <Loader />
      </div>
    );
  } else if (loader.state == true) {
    return (
      <div className="p-10 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 bg-light-yellow h-max">
        {products.data?.map((product) => {
          return (
            <div>
              <div
                className="m-2 h-90 rounded overflow-hidden shadow-xl bg-light-pink hover:bg-dark-pink transition duration-1000 hover:text-white"
                key={product._id}
              >
                <img
                  className="w-80 m-auto rounded"
                  src={product.image}
                  alt="lorem picture"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.name}</div>
                  <p className="text-gray-700 text-base">
                    {product.price}€
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        
    );
  }
};

export default ProductsView;
