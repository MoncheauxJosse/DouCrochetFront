import React from 'react'
import * as URL from '../../constants/urls/urlFrontEnd';
import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate= useNavigate()

    const click=(e)=>{

        navigate(URL.URL_SUPPORT);

    };

    return (
        <div>
        <div className='bg-light-pink flex'>

            <div className='flex justify-start mx-auto sm:px-6 ' > 

                <div onClick={click} className="cursor-pointer py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    Contacter support. 

                </div>
                <div className=" py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    FAQ

                </div>
                <div className=" py-2 px-6 text-white hover:text-light-yellow-hover underline ">
                    Conditions générales de vente


                </div>
            </div>
        </div>
        
        </div>






    )

}
export default Footer;