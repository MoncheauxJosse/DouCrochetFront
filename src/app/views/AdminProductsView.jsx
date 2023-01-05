import React, { useEffect, useState } from "react";
import { getAll } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";
import { deleteProduct } from "../api/backend/product";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { URL_ADMIN_DETAIL_PRODUCT } from "../constants/urls/urlFrontEnd";

const AdminProductsView = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getAll().then((productsData) => {
      setProducts(productsData.data);
    });
    setLoader({ state: true });
  }, [reload]);

  const deleteOneProduct = (productid) => {
    deleteProduct(productid)
      .then((res) => {
        setReload(!reload);
        if (res.status === 200) {
          toast.success("Produit supprimé", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  const navigate = useNavigate();
  const updateOneProduct = (id) => {
    sessionStorage.setItem("detailProduct", id);

    navigate(URL_ADMIN_DETAIL_PRODUCT);
  };

  if (!loader) {
    return <Loader />;
  }
  return (
    <div className="p-10 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 bg-light-yellow h-max">
      {products.map((product) => {
        return (
          <div>
            <div
              className="m-2 h-90 rounded overflow-hidden shadow-xl bg-light-pink "
              key={product._id}
            >
              <img
                className="w-80 h-64 m-auto rounded"
                src={product.image}
                alt="lorem picture"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.price}€</p>
                <div className="flex flex-col justify-between mt-3">
                  <button
                    onClick={() => {
                      updateOneProduct(product._id);
                    }}
                    className=" hover:bg-dark-pink transition duration-1000 hover:text-white border-b bg-green-500 rounded-md p-3"
                  >
                    Modifier
                  </button>
                  <button 
                    onClick={() => {
                      deleteOneProduct(product._id);
                      showDeleteMessage();
                    }}
                    className=" hover:bg-dark-pink transition duration-1000 hover:text-white border-b bg-red-500 rounded-md p-3"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminProductsView;
