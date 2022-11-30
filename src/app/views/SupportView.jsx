import React,{useEffect,useState} from 'react';
  
//import NavSupport from '../components/layouts/NavSupport';
import ChoiceView from '../views/ChoiceSupportView'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineContainer,AiOutlineMessage } from 'react-icons/ai';

const Support = () => {

    const [change,setChange]= useState()


    const choice=(e)=>{
        setChange(event.target.id)
    }


    useEffect(() => {   
    },[change])

    
    return (
      <div className='ml-5'>
        <div>
          <h2>Support</h2>
        </div>
        
        <div>
        <div className='mt-8 grid lg:grid-cols-5 gap-4 md:grid-cols-4 sm:grid-cols-3'>

<div onClick={choice} id={1} className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
   <div id={1} className='p-8 text-5xl'><BsFillTelephoneFill id={1} className='text-light-yellow'/>
   </div>
   <span id={1} className='font-bold pb-8'>Nous contacter</span>
</div>

<div onClick={choice} id={2} className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
   <div id={2} className='p-8 text-5xl'><AiOutlineContainer id={2} className='text-light-yellow'/>
   </div>
   <span id={2} className='font-bold pb-8'>Retourner un produit</span>
</div>

<div onClick={choice} id={3} className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
   <div id={3} className='p-8 text-5xl'><AiOutlineMessage id={3} className='text-light-yellow'/>
   </div>
   <span id={3} className='font-bold pb-8'>Réclamation</span>
</div>
</div>
        </div>
        <div>
        <ChoiceView  change={change}/>
        </div>
      </div>
    );
  };

  export default Support;