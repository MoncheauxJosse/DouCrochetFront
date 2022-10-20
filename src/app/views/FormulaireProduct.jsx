import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { postProduct } from '../api/backend/product';
import * as Yup from 'yup'


const FormProduct = () =>{

  
      const formik = useFormik({
          initialValues: {
            
                name: "",
                price: 0,
                description: "",
                quantity: 1,
                image: '',
                
          },
          onSubmit: values => {
  
              postProduct(formik.values)
            }, 
        }
          ); 
        

        useEffect(() => {

            console.log(formik.values)
     
          },[formik]);

          return (
            <div>
              <div  class="bg-light-yellow grid h-screen place-items-center">
                <form onSubmit={formik.handleSubmit} className="bg-light-pink shadow-md flex flex-col justify-center items-center rounded-md text-2xl">
               <label htmlFor="name">nom</label>
               <input
                 id="name"
                 name="name"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.name}
               />
               <label htmlFor="price">Prix</label>
               <input
                 id="price"
                 name="price"
                 type="number"
                 onChange={formik.handleChange}
                 value={formik.values.price}
               />

                <label htmlFor="description">description</label>
               <input
                 id="description"
                 name="description"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.description}
               />

                <label htmlFor="quantity">Quantité ajouté</label>
               <input
                 id="quantity"
                 name="quantity"
                 type="number"
                 onChange={formik.handleChange}
                 value={formik.values.quantity}
               />

                <label htmlFor="image">image</label>
               <input
                 id="image"
                 name="image"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.image}
                 />

                

               <button class="bg-light-yellow mt-4 rounded-md shadow-md" type="submit">Créer Carte</button>
             </form>
  
  
             </div>
        
            </div>
        
        
        
        
          )
          }

          export default FormProduct