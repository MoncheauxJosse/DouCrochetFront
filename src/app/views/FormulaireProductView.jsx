import React, {useEffect,useState} from 'react'
import { useFormik, FieldArray,Field } from 'formik';
import { postProduct } from '../api/backend/product';
import * as Yup from 'yup'
import { getAllCategory , postCategory} from '../api/backend/category';


const FormProduct = () =>{

  const [preview, setPreview] = useState();
  const [data, setData] = useState({data: []});

 const [count,setCount]= useState(0);
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
            
          }),

          onSubmit: values => {

            let formData = new FormData();
            formData.append('image',formik.values.image)
            formData.append('name',formik.values.name)
            formData.append('price',formik.values.price)
            formData.append('description',formik.values.description)
            formData.append('quantity',formik.values.quantity)
            // transformer en string ?
            let TabId = formik.values.categoryId.map(category => category.id)
            formData.append('categoryId',JSON.stringify(TabId))

              postProduct(formData)
              alert("Produit créé !")
              
            }, 
        }
          ); 

          const createCategoryClick= ()=>{

           
            postCategory({'name':formik.values.createCategory})
            setCount(data.data.length+1)
            
          }


          const antiDuplicateCategory=(e)=>{

            const searchId =formik.values.categoryId.map(category => category.id);
            const duplicateId = searchId.includes( data.data[e.target.value]._id)

            if(duplicateId==true){

              return [...formik.values.categoryId]
            }else{

              return [...formik.values.categoryId,{id :data.data[e.target.value]._id,name :data.data[e.target.value].name}]
            }
           

        };

        const deleteChoice = (index)=>{

          // delete la category selectioné (l'index, objet a suprimer a partir de la, si "2", aurait suprimer l'objet index plus le suivant)
          
          const tabDelete = formik.values.categoryId.splice(index,1)

          return formik.values.categoryId
          
        }
         
        const loadImage = (e) => {
          const objectUrl = URL.createObjectURL(e)          
          setPreview(objectUrl)
          return e
        }

        useEffect(() => {

          const fetchData = async () => {
            const CategoryData = await getAllCategory();
            setData(CategoryData);    
           
          };
             if(data.data.length==0||data.data.length!==count){
          
            fetchData();
            setCount(data.data.length)

            }


          },[formik,count]);

          return (
              <div  className="bg-light-yellow flex h-full flex-col items-center justify-center">
                <form onSubmit={formik.handleSubmit} className="bg-light-pink shadow-xl rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-2 flex justify-center">
                <label className='font-bold text-light-yellow text-xl'>Créer un produit</label>
                </div>
               
                <div className="mb-4">
                <div className="mb-2 flex justify-center">
               <input
                 id="name"
                 name="name"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 placeholder="Nom"
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
                 placeholder="Description"
                 className={formik.errors.description ? "input-error":""}
               />
               
               </div>
               <div className=" flex justify-center">
               {formik.errors.description && <p  className= "error text-xs text-red-600">{formik.errors.description}</p>}
               </div>
               </div>


               <div className="mb-2 flex justify-center">
               <label htmlFor="price" className='font-bold text-light-yellow'>Créer une catégorie</label>
               </div>
               <div className="mb-4">
               <div className="mb-2 flex justify-center">
               <input
                 id="createCategory"
                 name="createCategory"
                 type="text"
                 onChange={formik.handleChange}
                 placeholder="Créer categorie"
                 value={formik.values.createCategory}
                 />
                 <div name="Button-Create-Category" className='btn bg-light-yellow' onClick={createCategoryClick}>Valider</div>
                 </div>
                 </div>

               <div className="mb-2 flex justify-center">
               <label htmlFor="price" className='font-bold text-light-yellow'>Catégorie</label>
               </div>
               <div className="mb-4">
               <div className="mb-2 flex justify-center">

               <select id="categoryId" name="categoryId" onChange={(e) => {

                formik.setFieldValue("categoryId",antiDuplicateCategory(e))
                }}>
               <option value="">Aucun</option>
               {data.data?.map((obj, index) => {
                  return (
                      <option key={index} id={index} value={index} >{data.data[index].name}</option>
                    )
                  })} 
                  </select>
                  </div>


                  <div className="mb-2 flex justify-center">
               <label htmlFor="price" className='font-bold text-light-yellow'>Vos choix</label>
               </div>

               <div  className="bg-light-yellow">
                  {formik.values.categoryId?.map((obj, index) => {
                  return (
                    <div className="mb-2 flex justify-center">
                      <div key={index} id={index}>{formik.values.categoryId[index].name} 
                      <div className='btn p-1 h-6 w-6 rounded-full text-white bg-light-pink hover:bg-dark-pink ml-5 cursor-pointer' onClick={()=>{formik.setFieldValue("categoryId",deleteChoice(index))}}>X</div></div>
                      </div>
                    )
                  })} 
                  </div>
                  
                </div>
                


               <div className="mb-8 flex gap-20">
                <label htmlFor="image" className={formik.errors.image ? "input-error btn bg-light-yellow":"btn h-10 bg-light-yellow"}>Choisir image</label>
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


               <label htmlFor="price" className='font-bold text-light-yellow'>Prix :</label>


               
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

               
                <label htmlFor="quantity" className='font-bold text-light-yellow'>Quantité :</label>
                


                <div className="mb-4">
               <input
                 id="quantity"
                 name="quantity"
                 type="number"
                 onChange={formik.handleChange}
                 value={formik.values.quantity}
                 className={formik.errors.quantity ? "input-error":""}
               />
                <div className=" flex justify-center">
                  {formik.errors.quantity && <p  className= "error text-xs text-red-600">{formik.errors.quantity}</p>}
                </div>
               </div>
               </div>

                <div className='flex justify-center'>
               <button  className=" connect-button bg-light-yellow text-dark-pink btn group relative w-full" type="submit">Créer</button>
               </div>
             
             </form>
  
  
             </div>
        
        
        
          )
          }

          export default FormProduct

