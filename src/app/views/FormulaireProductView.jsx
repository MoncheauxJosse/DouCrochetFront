import React, {useEffect,useState} from 'react'
import { useFormik } from 'formik';
import { postProduct } from '../api/backend/product';
import * as Yup from 'yup'
import { getAllCategory } from '../api/backend/category';


const FormProduct = () =>{

  const [data, setData] = useState({data: []});
  //const [tabCategory,setTab]= useState([]);
      const formik= useFormik({

          initialValues: {
            name:"",
            price:1,
            description:"",
            quantity: 1,
            image:null,
            categoryId:[],
            createCategory:""
          },

          validationSchema: Yup.object().shape({

            name:Yup.string().min(3,"minimum 3 lettres").required('Nom requis'),
            price:Yup.number().min(0.01,"minimum 0,01 ").required('minimum 1'),
            description:Yup.string().min(10,"minimum 10 lettres").required('description requis'),
            quantity: Yup.number().integer().min(1,"minimum 1").required('texte non autorisé dans quantité'),
            //image:Yup.object().required('image requis')
          }),

          onSubmit: values => {

            let formData = new FormData();
            formData.append('image',formik.values.image)
            formData.append('name',formik.values.name)
            formData.append('price',formik.values.price)
            formData.append('description',formik.values.description)
            formData.append('quantity',formik.values.quantity)

              postProduct(formData)
              alert("Produit créé !")
              
            }, 
        }
          ); 

        useEffect(() => {

          const fetchData = async () => {
            const CategoryData = await getAllCategory();
            setData(CategoryData);         
          };

          let long = data.data.length
          console.log(long)
      
          if(data.data.length==0){
            console.log("sa passe")
            fetchData();
          }
          
          //console.log(data.data)
          console.log(formik.values);
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









               <div className="mb-2 flex justify-center">
               <label htmlFor="price" className='font-bold text-light-yellow'>Catégorie</label>
               </div>
               <div className="mb-4">
               <select id="categoryId" name="categoryId" onChange={(e) => {
                //setTab([...tabCategory,e])
                formik.handleChange(...formik.values.categoryId,e)
                }}>
               <option value="">Aucun</option>
               {data.data?.map((obj, index) => {
                  return (
                      <option key={index} id={index} value={data.data[index]._id}>{data.data[index].name}</option>
                    )
                  })} 
                  </select>

                  <input
                 id="createCategory"
                 name="createCategory"
                 type="text"
                 onChange={formik.handleChange}
                 placeholder="creer Categorie"
                 value={formik.values.createCategory}
                 className={formik.values.categoryId == "" ? "":"invisible"}
                 />
                </div>









               <div className="mb-8">
               <label for="image" className={formik.errors.image ? "input-error btn":"btn"}>Choisir image</label>
               <input
                 id="image"
                 name="image"
                 type="file"
                 accept='image/*'
                 onChange={(e) =>
                  formik.setFieldValue('image', e.currentTarget.files[0])}
                 className='invisible'
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