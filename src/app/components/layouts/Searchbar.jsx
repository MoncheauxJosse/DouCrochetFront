import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import { URL_PRODUCTS } from '../../constants/urls/urlFrontEnd';

export default function Searchbar() {
    const navigate= useNavigate()
    const [input ,setInput]= useState({searchData:''})
    const search= ()=>{

        navigate(URL_PRODUCTS,{
            state:{
                search:input
            },
        });
        
      }
  return (
    <div>
      <div className=" xl:w-96 justify-center items-center ">
          <div className="input-group relative flex items-center w-full ">
              <input type="search" onChange={(e)=> setInput({searchData: e.target.value})} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-light-pink focus:bg-white focus:border-dark-pink focus:outline-none" placeholder="Rechercher..." aria-label="Search" aria-describedby="button-addon2"/>
              <button onClick={search} className="btn px-6 py-2 bg-dark-pink text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" >
                  <BiSearchAlt className='text-xl'/>
              </button>
          </div>
      </div>
    </div>
  )
}
