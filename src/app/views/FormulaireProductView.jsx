import React, {useEffect} from 'react'
import { useFormik } from 'formik';
import { postProduct } from '../api/backend/product';
import * as Yup from 'yup'


const FormProduct = () =>{

  
      const formik= useFormik({

          initialValues: {
            name:"",
            price:1,
            description:"",
            quantity: 1,
            image:""
          },

          validationSchema: Yup.object().shape({

            name:Yup.string().min(3,"minimum 3 lettres").required('Nom requis'),
            price:Yup.number().min(1,"minimum 1").required('minimum 1'),
            description:Yup.string().min(10,"minimum 10 lettres").required('description requis'),
            quantity: Yup.number().min(1,"minimum 1").required('texte non autorisé dans quantité'),
            image:Yup.string().required('image requis')
          }),

          onSubmit: values => {

            console.log(formik.values)
  
              postProduct(formik.values)
            }, 
        }
          ); 

          console.log(formik.errors)
        

        useEffect(() => {

            //console.log(formik.values)
     
          },[formik]);

          return (
              <div  className="bg-light-yellow flex h-full flex-col items-center justify-center">
                <form onSubmit={formik.handleSubmit} className="bg-light-pink shadow-xl rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-2 flex justify-center">
                <label className='font-bold text-light-yellow text-xl'>Créer un produit</label>
                </div>
               
                <div className="mb-4">
               <input
                 id="name"
                 name="name"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 placeholder="Nom"
                 className={formik.errors.name ? "input-error":""} 
               />
               {formik.errors.name && <p  className= "error text-xs text-red-600">{formik.errors.name}</p>}
               </div>

               <div className="mb-4">
               <input
                 id="description"
                 name="description"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.description}
                 placeholder="Description"
                 className={formik.errors.description ? "input-error":""}
               />
               {formik.errors.description && <p  className= "error text-xs text-red-600">{formik.errors.description}</p>}
               </div>

               <div className="mb-8">
               <input
                 id="image"
                 name="image"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.image}
                 placeholder="lien image"
                 className={formik.errors.image ? "input-error":""}
                 />
                 {formik.errors.image && <p className= "error text-xs text-red-600">{formik.errors.image}</p>}

                </div>

               <div className="mb-2 flex justify-center">
               <label htmlFor="price" className='font-bold text-light-yellow'>Prix</label>
               </div>

               <div className="mb-4">
               <input
                 id="price"
                 name="price"
                 type="number"
                 onChange={formik.handleChange}
                 value={formik.values.price}
                 className={formik.errors.price ? "input-error":""}
               />
               {formik.errors.price && <p  className= "error text-xs text-red-600">{formik.errors.price}</p>}
               </div>

               <div className="mb-2 flex justify-center">
                <label htmlFor="quantity" className='font-bold text-light-yellow'>Quantité ajouté</label>
                </div>

                <div className="mb-4">
               <input
                 id="quantity"
                 name="quantity"
                 type="number"
                 onChange={formik.handleChange}
                 value={formik.values.quantity}
                 className={formik.errors.quantity ? "input-error":""}
               />
               {formik.errors.quantity && <p  className= "error text-xs text-red-600">{formik.errors.quantity}</p>}
               </div>

                <div className='flex justify-center'>
               <button  className=" connect-button bg-light-yellow text-dark-pink btn group relative w-full" type="submit">Créer</button>
               </div>
             
             </form>
  
  
             </div>
        
        
        
          )
          }

          export default FormProduct