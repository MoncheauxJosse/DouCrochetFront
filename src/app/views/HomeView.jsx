import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll,getAllNouveau } from "../api/backend/product";

import  '../css/carroucel.css'

const HomeView = () => {

    const [products, setProducts] = useState({data:[]}); 
    const [productsPopulaire, setProductsPopulaire] = useState({data:[]}); 

    const [slideIndex, setSlideIndex] = useState(5)
    const [afficheFin, setAfficheFin] = useState(5)
    const [afficheDebut, setAfficheDebut] = useState(0)


    const [slideIndexPopulaire, setSlideIndexPopulaire] = useState(5)
    const [afficheFinPopulaire, setAfficheFinPopulaire] = useState(5)
    const [afficheDebutPopulaire, setAfficheDebutPopulaire] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          const productsData = await getAll();
          setProductsPopulaire(productsData);
         
          const productsNouveauxData = await getAllNouveau();
          setProducts(productsNouveauxData);
         
         
        };
    
        fetchData();
        
      },[]);


      //caroucel populaire
      const nextSlidePopulaire = () => {

        console.log("sa passe")
        console.log("le slide index "+slideIndexPopulaire)
        
        if(slideIndexPopulaire !== productsPopulaire.data.length){

            console.log("longuer tableaux "+productsPopulaire.data.length)
            setProductsPopulaire(productsPopulaire)
            setSlideIndexPopulaire(slideIndexPopulaire + 1)
            setAfficheFinPopulaire(afficheFinPopulaire +1)
            setAfficheDebutPopulaire(afficheDebutPopulaire +1)

        } 
        else if (slideIndexPopulaire === productsPopulaire.data.length){

            console.log("slide a la fin")
            setProductsPopulaire(productsPopulaire)
            setSlideIndexPopulaire(5)
            setAfficheFinPopulaire(5)
            setAfficheDebutPopulaire(0)
            
        }
    }

    const prevSlidePopulaire = () => {
           
        console.log("en arriere !")

        if(slideIndexPopulaire !== 5){
            setProductsPopulaire(productsPopulaire)
            setSlideIndexPopulaire(slideIndexPopulaire - 1)
            setAfficheFinPopulaire(afficheFinPopulaire -1)
            setAfficheDebutPopulaire(afficheDebutPopulaire -1)
        }
        else if (slideIndexPopulaire === 1){
            setProductsPopulaire(productsPopulaire)
            setSlideIndexPopulaire(productsPopulaire.length)
        }
    }


    // Nouveauté
    const nextSlide = () => {
        
        if(slideIndex !== products.data.length){

            setProducts(products)
            setSlideIndex(slideIndex + 1)
            setAfficheFin(afficheFin +1)
            setAfficheDebut(afficheDebut +1)

        } 
        else if (slideIndex === products.data.length){

            console.log("slide a la fin")
            setProducts(products)
            setSlideIndex(5)
            setAfficheFin(5)
            setAfficheDebut(0)
            
        }
    }

    const prevSlide = () => {
           
        console.log("en arriere !")

        if(slideIndex !== 5){
            setProducts(products)
            setSlideIndex(slideIndex - 1)
            setAfficheFin(afficheFin -1)
            setAfficheDebut(afficheDebut -1)
        }
        else if (slideIndex === 1){
            setProducts(products)
            setSlideIndex(products.length)
        }
    }
    return (
        <div className="text-center">
            <h2 className='font-bold text-light-pink text-xl mt-4'>Nouveautés</h2>
        <div className="caroucel">
            <button className="left" onClick={prevSlide}> {"<"} </button>

            
            {products.data?.map((obj, index) => {

                if( index<afficheFin && index>=afficheDebut ){ 
                    {console.log(products.data[index].image                        )}
                    return (
                    <div id={index} className="m-2 h-90 rounded overflow-hidden shadow-xl bg-light-pink hover:scale-150 duration-200">
                        <img src={products.data[index].image} className="w-80 m-auto rounded" alt={"img"+(index)} /> 
                    </div>
                             )
                    }       
               
            })}
            <button  className="right" onClick={nextSlide} >{">"}</button>
           
        </div>

        <h2 className='font-bold text-light-pink text-xl mt-6'>Populaires</h2>
        <div className="caroucel">
            <button className="left" onClick={prevSlidePopulaire}> {"<"} </button>

            
            {productsPopulaire.data?.map((obj, index) => {

                if( index<afficheFinPopulaire && index>=afficheDebutPopulaire ){ 
                    {console.log(productsPopulaire.data[index].image                        )}
                    return (
                    <div id={index} className="m-2 h-90 rounded overflow-hidden shadow-xl bg-light-pink hover:scale-150 duration-200">
                        <img src={productsPopulaire.data[index].image} className="w-80 m-auto rounded" alt={"img"+(index)} /> 
                    </div>
                             )
                    }       
               
            })}
            <button  className="right" onClick={nextSlidePopulaire} >{">"}</button>
           
        </div>
        </div>
    );
};

export default HomeView;
