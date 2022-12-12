import React from 'react'
import * as URL from '../../constants/urls/urlFrontEnd';
import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate= useNavigate()

    const support=(e)=>{

        navigate(URL.URL_SUPPORT);

    };
    const cgu=()=>{
        navigate(URL.URL_CGU)
    }

    return (
        <div>
        <div className='bg-light-pink flex'>

            <div className='flex justify-start mx-auto sm:px-6 ' > 

                <div onClick={support} className="cursor-pointer py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    Contacter support. 

                </div>
                <div className="cursor-pointer py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    FAQ

                </div>
                <div onClick={cgu} className="cursor-pointer py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    Conditions générales de vente


                </div>
            </div>
        </div>
        
        </div>






    )

}
export default Footer;