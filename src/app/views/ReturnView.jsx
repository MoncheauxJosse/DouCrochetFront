import React, {useEffect,useState} from 'react'
import { useFormik, FieldArray,Field } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';
import {selectUser,selectToken} from '../redux-store/authenticationSlice'
import { supportOrder,postReturn,allProductOrder } from '../api/backend/support';

const ReturnView = () => {

    const token = useSelector(selectToken);
    const [preview, setPreview] = useState();
    const [previewChoice, setPreviewChoice] = useState();
    const [facture, setFacture] = useState({data: []});
    const [factureSelect, setFactureSelect] = useState();
    const [products, setProducts] = useState({data: []});
    const [loader, setLoader] = useState(false);
    const formik= useFormik({

        initialValues: {
          nameProduct:"",
          description:"",
          image:null,
          userId:"",
          factureId:"",
          productSelect:{
            image:""}
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

          const loadImage2 = (e) => {
            const objectUrl = URL.createObjectURL(e)          
            setPreviewChoice(objectUrl)
            return e
          }

          useEffect(() => {   

            const fetchData = async () => {
              console.log("active getOrderUser")
              const OrderDataUser = await supportOrder(token);
              setFacture(OrderDataUser) 
              
            };

               if(facture.data.length==0){
                console.log("tableaux vide")
                fetchData();
              }

              console.log(facture.data)

              const fetchDataProduct = async () => {
                console.log("active getAllProductOrder")
                const allProducts = await allProductOrder(formik.values.factureId);
                console.log("ajoute dans product")
                setProducts(allProducts)
                setLoader(true)
              };

              
              console.log("FactureId = ",formik.values.factureId)
              if(formik.values.factureId!="" && (loader!=true || formik.values.factureId != factureSelect ) ){

                setFactureSelect(formik.values.factureId)
                formik.values.productSelect.image = ""
                fetchDataProduct()

                console.log("facture choisie !")
                
              }

              if(!loader){
                setLoader(false)
              }
              
              
              console.log("les produits recuperé", products)

  
          },[formik.values.factureId,loader==true])

          console.log(formik.values)
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
        {preview &&<img className="w-40 "src={preview} />}
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

       <select id="factureId" name="factureId" defaultValue="Choisir ..." onChange={(e) => { 
        if(facture.data[e.target.value]!=undefined){
          formik.setFieldValue("productSelect",{image:""})
          formik.setFieldValue("factureId",facture.data[e.target.value]._id)}  
        
        }}>
          <option value="">Choisir ...</option>
          {facture.data?.map((obj, index) => {
            return (
            <option key={index} id={index} value={index} >{facture.data[index].order_date}</option>
            )
            })}
        </select>
       </div>

       </div>

       <div className="mb-2 flex justify-center">
       <label htmlFor="Id" className='font-bold text-light-yellow'>selection Produit :</label>

       <div className="mb-4">

       <select id="productSelect" name="productSelect" onChange={(e) => { 
        if(products.data[e.target.value]!=undefined){
          formik.setFieldValue("productSelect",products.data[0].productLine[e.target.value].product)
        }  
        
        }}>
          <option value="" selected={!formik.values.productSelect["_id"]}>Choisir ...</option>
          {products.data?.map((obj, index) => {
            return (
            <option key={index} id={index} value={index} >{products.data[0].productLine[index].product.name} </option>
            )
            })}
        </select>
       </div>
       </div>

       <div className='flex justify-center'>
       <img className="w-40" src={formik.values.productSelect.image} />
       </div>

        <div className='flex justify-center'>
       <button  className=" connect-button bg-light-yellow text-dark-pink btn group relative w-full" type="submit">Envoyer</button>
       </div>
     
     </form>


     </div>



    )




}
export default ReturnView