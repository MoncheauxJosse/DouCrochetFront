import React, {useEffect,useState} from 'react'
import { useFormik, FieldArray,Field } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import {selectUser,selectToken} from '../redux-store/authenticationSlice'
import { supportOrder,postReturn } from '../api/backend/support';
//import { getAllCategory , postCategory} from '../api/backend/category';

const ReturnView = () => {

    const token = useSelector(selectToken);
    const [preview, setPreview] = useState();
    const [facture, setFacture] = useState({data: []});
    const formik= useFormik({

        initialValues: {
          nameProduct:"",
          description:"",
          image:null,
          userId:"",
          factureId:""
        },

        validationSchema: Yup.object().shape({

          nameProduct:Yup.string().min(3,"minimum 3 lettres").required('Nom requis'),
          description:Yup.string().min(10,"minimum 10 lettres").required('description requis'),
          
        }),

        onSubmit: values => {

          console.log("facture : "+formik.values.factureId)

          let formData = new FormData();
          formData.append('image',formik.values.image)
          formData.append('nameProduct',formik.values.nameProduct)
          formData.append('description',formik.values.description)
          formData.append('facture',formik.values.factureId)

          postReturn(formData)
            alert("message envoyé !")
            
          }, 
      }
        ); 

        const loadImage = (e) => {
            const objectUrl = URL.createObjectURL(e)          
            setPreview(objectUrl)
            return e
          }

          useEffect(() => {   

            console.log("active getOrderUser")
            const fetchData = async () => {
              const OrderDataUser = await supportOrder(token);

              console.log(OrderDataUser)
              setFacture(OrderDataUser)


             
            };
               /*if(data.data.length==0||data.data.length!==count){
            
              fetchData();
              setCount(data.data.length)
  
              }*/
              fetchData();
  
          },[])

    return (

        <div  className="mt-2 bg-light-yellow flex h-full flex-col items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="bg-light-pink shadow-xl rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-2 flex justify-center">
        <label className='font-bold text-light-yellow text-xl'>Retour Produit</label>
        </div>
       
        <div className="mb-4">
        <div className="mb-2 flex justify-center">
       <input
         id="nameProduct"
         name="nameProduct"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.nameProduct}
         placeholder="Nom du produit"
         className={formik.errors.name ? "input-error":""} 
       />
       
       </div>
       <div className=" flex justify-center">
       {formik.errors.name && <p  className= "error text-xs text-red-600">{formik.errors.name}</p>}
       </div>
       </div>

       <div className="mb-4">
       <div className="mb-2 flex justify-center">
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
         placeholder="Raison du renvoi"
         className={formik.errors.description ? "input-error":""}
       />
       
       </div>
       <div className=" flex justify-center">
       {formik.errors.description && <p  className= "error text-xs text-red-600">{formik.errors.description}</p>}
       </div>
       </div>
        


       <div className="mb-8 flex gap-20">
        <label htmlFor="image" className={formik.errors.image ? "input-error btn bg-light-yellow":"btn h-10 bg-light-yellow"}>Ajouter une image</label>
        <img className="w-40 "src={preview} />
       </div>
       
       <input
         id="image"
         name="image"
         type="file"
         accept='image/*'
         onChange={(e) =>
          formik.setFieldValue('image', loadImage(e.currentTarget.files[0]))}
         className='invisible'
         />
         <div className=" flex justify-center">
         {formik.errors.image && <p className= "error text-xs text-red-600">{formik.errors.image}</p>}
         </div>

         

        <div className="mb-2 flex justify-center">
       <label htmlFor="Id" className='font-bold text-light-yellow'>Date de l'achat :</label>

       <div className="mb-4">

       <select id="factureId" name="factureId" onChange={(e) => {    
        formik.setFieldValue("factureId",facture.data[e.target.value]._id)
        }}>
          <option value="">Aucun</option>
          {facture.data?.map((obj, index) => {
            return (
            <option key={index} id={index} value={index} >{facture.data[index].order_bill}</option>
            )
            })}
        </select>
       </div>

       </div>



        <div className='flex justify-center'>
       <button  className=" connect-button bg-light-yellow text-dark-pink btn group relative w-full" type="submit">Envoyer</button>
       </div>
     
     </form>


     </div>



    )




}
export default ReturnView