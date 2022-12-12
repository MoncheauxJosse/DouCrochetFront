import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {detailProduct} from '../../api/backend/product'
import { URL_PRODUCT } from '../../constants/urls/urlFrontEnd'
import {increment, decrement, removeCartItem} from '../../redux-store/cartSlice'

function CartItemValid({id, quantity}) {
  const dispatch = useDispatch()
  const [product, setProduct] = useState()

  useEffect(()=>{
    detailProduct(id, quantity).then((res)=>{
      setProduct(res.data)
    })
  }, [id, quantity])
    
  const navigate = useNavigate();
  const details = (e) => {
        const detailStorage = e
        sessionStorage.setItem("detailStorage", detailStorage)
        navigate(URL_PRODUCT)
  }

  if(!product){
    return(<div>Chargement...</div>)
  }
    return (
    <div className="mx-auto">
        <div className="flex border-b-2">
        <div className="w-full px-10 py-10">
            <div className="flex items-center -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-32 cursor-pointer" onClick={() => details(product._id)} id={product._id}>
                    <img className="w-32 h-32 xs:h-16 xs:w-16" src={product.image} alt=""/>
                </div>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}€</span>
            <span className="text-center w-1/5 font-semibold text-sm">{parseFloat(product.price * quantity).toFixed(2)}€</span>
            </div>
        </div>
        </div>
    </div>
    )
  }
export default CartItemValid
