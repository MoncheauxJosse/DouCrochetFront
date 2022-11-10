import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {detailProduct} from '../../api/backend/product'

function CartItem({id, quantity}) {
  const dispatch = useDispatch()
  const [product, setProduct] = useState()
  useEffect(()=>{
    detailProduct(id).then((res)=>{
      setProduct(res.data)
    })
  }, [id])
  if(!product){
    return(<div>LOADING</div>)
    
  }
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={product.image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{product.title}</p>
        <p className="cartItem__price">
          <small>€</small>
          <strong>{product.price}</strong>
        </p>
        <div>
          <p>{quantity}</p>
        </div>
      </div>
    </div>
  )
}
export default CartItem
