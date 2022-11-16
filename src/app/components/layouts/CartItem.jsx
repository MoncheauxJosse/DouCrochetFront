import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {detailProduct} from '../../api/backend/product'
import {increment, decrement} from '../../redux-store/cartSlice'

function CartItem({id, quantity}) {
  const dispatch = useDispatch()
  const [product, setProduct] = useState()
  useEffect(()=>{
    detailProduct(id).then((res)=>{
      setProduct(res.data)
    })
  }, [id])

  const navigate = useNavigate();

  if(!product){
    return(<div>LOADING</div>)
    
  }
  return (
    <div className="mx-auto">
      <div className="flex shadow-md">
        <div className="w-full px-10 py-10">
          <div className="flex items-center -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-32">
                <img className="w-32 h-32 xs:h-16 xs:w-16" src={product.image} alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{product.name}</span>
                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Supprimer</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <button onClick={()=> {
                dispatch(increment(product.id))
              }} className='text-xl'>+</button>
              <input className="mx-2 border text-center w-8" type="text" defaultValue={product.quantity}/>
              <button onClick={()=>{
                dispatch(decrement(product.id))
              }} className='text-xl'>-</button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}€</span>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}€</span>
          </div>
        </div>
      </div>
    </div>
  )
  }
export default CartItem
