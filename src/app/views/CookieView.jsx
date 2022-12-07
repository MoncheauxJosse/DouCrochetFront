import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCookie, setCookie } from '../api/backend/users';

export default function CookieView() {  
    const [cookie, setcookie] = useState();
    useEffect(() => {
      getCookie().then((res)=>{
        setcookie(res.data)
      });  
    }, [])
    const acceptCookies = () => {
        setCookie().then((res)=> {
            setcookie(res.data)
        });
    }
  return (
    cookie ? null : <div className="container mx-auto fixed left-2 bottom-2">
        <div className='bg-white w-72'>
            <div className="w-72 bg-white rounded-lg shadow-md p-6">
                <div className="w-16 mx-auto relative -mt-10 mb-3">
                    <img className="-mt-1" src="https://www.svgrepo.com/show/30963/cookie.svg" alt="Cookie Icon SVG"/>
                </div>
                <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">Nous utilisons les cookies pour vous fournir une meilleure expérience</span>
                <div className="flex items-center justify-between">
                    <a className="text-xs text-gray-400 mr-1 hover:text-gray-800" href="#">Politique de confidentialité</a>
                    <div className="w-1/2">
                        <button onClick={()=>{acceptCookies()}} type="button" className="py-2 px-4  bg-light-pink hover:bg-dark-pink focus:ring-light-pink focus:ring-offset-dark-pink text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Accepter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
