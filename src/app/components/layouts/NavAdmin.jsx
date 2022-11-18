import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { URL_ADMIN_PRODUCTS, URL_CREATE_PRODUCT, URL_USERS } from '../../constants/urls/urlFrontEnd';

export default function NavAdmin() {
  return (
    <div className='mt-8 grid lg:grid-cols-5 gap-4 md:grid-cols-4 sm:grid-cols-3'>  
      <Link to={URL_USERS}>
        <div className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
            <div className='p-8 text-5xl'><FaUserAlt className='text-light-yellow'/></div>
            <span className='font-bold pb-8'>Utilisateurs</span>
        </div>
      </Link>
      <Link to={URL_ADMIN_PRODUCTS}>
        <div className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
            <div className='p-8 text-5xl'><BsFillBagCheckFill className='text-light-yellow'/></div>
            <span className='font-bold pb-8'>Produits</span>
        </div>
      </Link>
      <Link to={URL_CREATE_PRODUCT}>
        <div className='bg-light-pink rounded flex flex-col items-center transition hover:scale-110'>
            <div className='p-8 text-5xl'><BsFillBagPlusFill className='text-light-yellow'/></div>
            <span className='font-bold pb-8'>Ajouter un produit</span>
        </div>
      </Link>
    </div>
  )
}
