import React, { useEffect, useState } from "react";
import { getAllPage, detailProduct } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";
import { useNavigate } from 'react-router-dom';
import { URL_PRODUCT } from "../constants/urls/urlFrontEnd";
import { useLocation } from 'react-router-dom'

const ProductsView = () => {

  const location= useLocation()
  const [products, setProducts] = useState([]);
  const [loader, setloader] = useState({ state: false });
  const [page, setPage] = useState(1);

    const AvancerPage=()=>{

      if(page!==products.totalPages){
      setPage(page+1)
      }


  }
  
  const reculerPage=()=>{

      if(page!==1){

          setPage(page-1)
      }
      
      
  }

  async function recupeLocal(){

    if(location.state!==null){

      if(location.state.search.searchData!==''){
        return location.state.search.searchData
      }else{
        return 'Totaux'
      }

    }else{
          return 'Totaux'
  }}
  
  useEffect(() => {
  
    const fetchData = async () => {

      const essai = await recupeLocal()   
      const productsData = await getAllPage(essai,page);
      setProducts(productsData.data);    
    };

    fetchData();
    setloader({ state: true });
  }, [page,location]);

const navigate = useNavigate();
  const details = () => {
        const detailStorage = document.activeElement.id
        sessionStorage.setItem("detailStorage", detailStorage)
        navigate(URL_PRODUCT)
  }

  if (loader.state == false) {
    return (
      <div>
        <Loader/>
      </div>
    )
  } else if(loader.state == true){
    return (
      <div>
      <div className="p-10 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 bg-light-yellow h-max">
        {products.productsPage?.map((product) => {
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
                <div className="flex justify-center">
                  <button className="button rounded p-3 mb-3 bg-light-yellow hover:text-dark-pink" onClick={() => details(product._id)} id={product._id}> En savoir plus </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        <section className="flex items-center justify-center">
    
        <button onClick={reculerPage} className="bg-light-pink hover:bg-dark-pink text-white font-bold py-2 px-4 rounded" >-</button>
        <div className="font-bold text-center text-2xl mx-2"> Pages {page} /{products.totalPages}</div>
        <button onClick={AvancerPage} className="bg-light-pink hover:bg-dark-pink text-white font-bold py-2 px-4 rounded" >+</button>
    
    
    </section>
    </div>

    );
  }
};

export default ProductsView;
