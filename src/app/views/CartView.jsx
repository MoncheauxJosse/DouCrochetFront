import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/layouts/CartItem'

export default function CartView() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => state.cart)

  if(cartItems !== undefined && cartItems.length > 0){
    return (
        <div>
          <h2 className='lead-mb-0 mt-2'>Votre panier</h2>
          {cartItems.map(item => <CartItem key={item.id} id={item.id} quantity={item.quantity}/>)}
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
