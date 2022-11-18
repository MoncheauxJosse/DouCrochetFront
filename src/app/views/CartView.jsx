import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/layouts/CartItem'
import {URL_PRODUCTS} from '../constants/urls/urlFrontEnd'

export default function CartView() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => state.cart)
  const cartlength = cartItems.length;
  let oneProduct = 'produit'
  let multipleProduct = 'produits'

  if(cartItems !== undefined && cartItems.length > 0){
    return (
      <div>
        <div className='flex shadow-md my-10 xs:block'>
          <div className='w-3/4 xs:w-full'>
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Votre panier</h1>
              <h2 className="font-semibold text-2xl">{cartlength} {cartlength === 1 ? oneProduct : multipleProduct}</h2>
            </div>
            <div className="flex px-10 pt-10 ml-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Détails du produit</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantité</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Prix</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>
            {cartItems.map(item => <CartItem key={item.id} id={item.id} quantity={item.quantity}/>)}
          </div>
          <div>
            <div className="px-8 py-10 fixed xs:relative">
              <h1 className="font-semibold text-2xl border-b pb-8">Ma commande</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">{cartlength} {cartlength === 1 ? oneProduct : multipleProduct}</span>
                <span className="font-semibold text-sm">(total des produits)</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Livraison</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard - 10.00€</option>
                </select>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Prix au total</span>
                  <span>(total)</span>
                </div>
                <button className="bg-light-pink font-semibold hover:bg-dark-pink py-3 text-sm text-white uppercase w-full">Commander</button>
              </div>
            </div>
          </div>
        </div>    
          
          <Link to={URL_PRODUCTS}>
            <a href="#" className="flex font-semibold text-light-pink text-sm mt-10">
              <svg className="fill-current mr-2 text-dark-pink w-4 pb-10 ml-5" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              Continuer mon shopping
            </a>
          </Link>
        
        </div>
      )
  }else{
    return(
      <div className="w-100 alert alert-warning mt-5">
        <h2 className="h4 text-center mb-3">Votre panier est vide</h2>
        <p className="text-center">
          Vous n'avez rien ajouté à votre panier, continuez votre shopping !
        </p>
        <div className="text-center">
          <Link to="/produits" className="btn btn-danger">
            Voir tous les produits
          </Link>
        </div>
      </div>
    )
    
  }
  
}
