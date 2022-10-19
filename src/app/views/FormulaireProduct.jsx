import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { postProduct } from '../api/backend/product';


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
              alert(JSON.stringify(values, null, 2));
  
              postProduct(formik.values)
            },}
          ); 
        

        useEffect(() => {

            console.log(formik.values)
     
          },[formik]);

          return (
            <div>
              <div  class="bg-blue-300 grid h-screen place-items-center">
                <form onSubmit={formik.handleSubmit} className="bg-blue-200 shadow-md flex flex-col justify-center items-center rounded-md text-2xl">
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

                

               <button class="bg-green-500 mt-4 rounded-md shadow-md" type="submit">Créer Carte</button>
             </form>
  
  
             </div>
        
            </div>
        
        
        
        
          )
          }

          export default FormProduct