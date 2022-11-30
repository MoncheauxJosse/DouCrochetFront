import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { detailProduct, updateProduct } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";
import * as Yup from "yup";
import Input from "../components/lib/form-and-error-components/Input";
//import axios from "axios";
import {toast} from "react-toastify";



const EditProductView = () => {
    const [products, setProducts] = useState([]);
    const [preview, setPreview] = useState();
    const [loader, setloader] = useState({ state: false });
    const id = sessionStorage.getItem("detailProduct");
    
    console.log("loader", loader);
    
    useEffect(() => {
        const fetchData = async () => {
            const productsData = await detailProduct(id);
            console.log(productsData);
            setProducts(productsData.data);
            setPreview(products.image);
            setloader({ state: true });
        };
        
        fetchData();
    }, []);
    console.log(products._id);
    
    const loadImage = (e) => {
        const objectUrl = URL.createObjectURL(e);
        setPreview(objectUrl);
        return e;
      };

  const handleSubmit = (data) => {
    console.log(data);
    let formdata = new FormData();
    formdata.append('image', data.image);
    formdata.append('name', data.produit);
    formdata.append('price', data.price);
    // formdata.append('categorie', data.categorie);
    formdata.append('quantity', data.quantity);
    updateProduct(formdata, products._id);
    console.log(data.image + " handleSubmit");
    console.log(data);

    console.log("je passe par la");
    console.log(products._id);
  };

  const showChangeProductMessage = () => {
    toast.success("Produit modifié", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const schemaFormLogin = Yup.object().shape({
    produit: Yup.string(),
    description: Yup.string(),
    categorie: Yup.string(),
    image: Yup.string(),
    price: Yup.number(),
    quantity: Yup.number(),
  });
  const defaulValuesProduct = {
    produit: products.name,
    description: products.description,
    categorie: products.categorie,
    image: products.image,
    price: products.price,
    quantity: products.quantity,
    rememberMe: false
  };

  if (loader.state == false) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else if (loader.state == true) {
    return (
        <Formik
        initialValues={defaulValuesProduct}
        onSubmit={handleSubmit}
        validationSchema={schemaFormLogin}
        >
       {({setFieldValue}) =>( <Form className="mb-2 flex justify-center">
          <div className="bg-light-pink rounded-md block w-1/3 p-5 ">
          <label className=" mb-2 flex justify-center font-bold text-light-yellow text-xl">
            Modifier un produit
          </label>
          <label className="font-bold text-light-yellow ">Nom :</label>
            <div>
              <Field
                type="text"
                name="produit"
                placeholder="Produit"
                autoComplete="produit"
                component={Input}
                className="rounded-md text-black"
                noError
              />
              <ErrorMessage
                name="produit"
                component="small"
                className="text-red-500"
              />
            </div>
            <label className="font-bold text-light-yellow ">Description :</label>
            <Field
              type="text"
              name="description"
              placeholder="Description"
              autoComplete="description"
              component={Input}
              className="rounded-md text-black"
              noError
            />
            <ErrorMessage
              name="description"
              component="small"
              className="text-red-500"
            />
            <label className="font-bold text-light-yellow ">Catégorie :</label>
            <Field
              as="select"
              type="Catégorie"
              name="categorie"
              placeholder="Catégorie"
              autoComplete="categorie"
              component={Input}
              className="rounded-md text-black"
              noError
            />
            <ErrorMessage
              name="categorie"
              component="small"
              className="text-red-500"
            />
            <label className="font-bold text-light-yellow ">Photo :</label>
              <Field
              as="image"
              type="image"
              name="image"
              placeholder="Image"
              autoComplete="image"
              component={Input}
              className="rounded-md text-black"
              noError
              
            />
            <ErrorMessage
              name="image"
              component="small"
              className="text-red-500"
            />
            <label className="font-bold text-light-yellow ">Choisir une autre photo :</label>
            <input type="file" name="image" id="image" onChange={(e) => {setFieldValue("image", loadImage(e.currentTarget.files[0])) }} />
            
            <img src={preview} alt=""/>
            <ErrorMessage
              name="image"
              component="small"
              className="text-red-500"
            />
            <label className="font-bold text-light-yellow ">Prix :</label>
            <Field
              type="text"
              name="price"
              placeholder="Prix"
              autoComplete="price"
              component={Input}
              className="rounded-md text-black"
              noError
            />
            <ErrorMessage
              name="price"
              component="small"
              className="text-red-500"
            />
            <label className="font-bold text-light-yellow ">Quantité :</label>
            <Field
              type="text"
              name="quantity"
              placeholder="quantité"
              autoComplete="Quantity"
              component={Input}
              className="rounded-md text-black"
              noError
            />
            <ErrorMessage
              name="quantity"
              component="small"
              className="text-red-500"
            />
            <div className="my-10 flex justify-center">
              <button
                onClick={() => {
                  handleSubmit(products._id);
                  showChangeProductMessage();
                }}
                type="submit"
                className=" mb-2  bg-blue-500 rounded-md p-3 "
              >
                Valider
              </button>
            </div>
          </div>
        </Form>)}
      </Formik>
    );
  }
};

export default EditProductView;
