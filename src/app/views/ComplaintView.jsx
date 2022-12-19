import React, {useEffect,useState} from 'react'
import { useFormik, FieldArray,Field } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import {selectUser,selectToken} from '../redux-store/authenticationSlice'
import { postComplaint } from '../api/backend/support';

const Complaint = () => {

    const token = useSelector(selectToken);
    const formik= useFormik({

        initialValues: {
          title:"",
          description:"",
          token: token,
        },

        validationSchema: Yup.object().shape({

            title:Yup.string().min(3,"minimum 3 lettres").required('Nom requis'),
          description:Yup.string().min(10,"minimum 10 lettres").required('description requis'),
          
        }),

        onSubmit: values => {

          postComplaint(formik.values)
            alert("message envoyé !")
            
          }, 
      }
        ); 

        useEffect(() => {   

            console.log("active getOrderUser")
            const fetchData = async () => {
              
            };fetchData();
  
        },[])

        return (

            <div  className="mt-2 bg-light-yellow flex h-full flex-col items-center justify-center">
            <form onSubmit={formik.handleSubmit} className="bg-light-pink shadow-xl rounded px-8 pt-6 pb-8 mb-4">
    
            <div className="mb-2 flex justify-center">
            <label className='font-bold text-light-yellow text-xl'>Réclamation</label>
            </div>
           
            <div className="mb-4">
            <div className="mb-2 flex justify-center">
           <input
             id="title"
             name="title"
             type="text"
             onChange={formik.handleChange}
             value={formik.values.title}
             placeholder="titre de la réclamation"
             className={formik.errors.name ? "input-error":""} 
           />
           
           </div>
           <div className=" flex justify-center">
           {formik.errors.name && <p  className= "error text-xs text-red-600">{formik.errors.title}</p>}
           </div>
           </div>
    
           <div className="mb-4">
           <div className="mb-2 flex justify-center">
           <textarea
             id="description"
             name="description"
             type="text"
             onChange={formik.handleChange}
             value={formik.values.description}
             placeholder="Expliquez en détail"
             className={formik.errors.description ? "input-error":"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
           />
           
           </div>
           <div className=" flex justify-center">
           {formik.errors.description && <p  className= "error text-xs text-red-600">{formik.errors.description}</p>}
           </div>
           </div>
    
            <div className='flex justify-center'>
           <button  className=" connect-button bg-light-yellow text-dark-pink btn group relative w-full" type="submit">Envoyer</button>
           </div>
         </form>
    
    
         </div>
    
    
    
        )

}

export default Complaint