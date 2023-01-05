import { useState, useEffect } from "react";
import { detailProduct } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../redux-store/cartSlice";
import { toast } from "react-toastify";

const DetailProductView = () => {
    const [detail, setDetail] = useState({ detail: [] })
    const [loader, setLoader] = useState({state : false})
    const dispatch = useDispatch();

    const id = sessionStorage.getItem('detailStorage')
    const cartProduct = useSelector((state) => state.cart.cartItems.find(item => item.id == id))
    useEffect(() => {     
        const fetchDetail = async () => {
            let detail = await detailProduct(id);

            setDetail({
                detail: detail.data,   
            })
            setLoader({
                state : true
            }) 
        }
        fetchDetail()
    },[]);

      const addToCart = (detail) => {
        dispatch(addCartProduct(detail))
    }

if(loader.state==false)
    return (
        <Loader/>
    )
    else if(loader.state==true){
        return (
        <div className="">
            <div className="flex justify-center m-5">
                <div className="flex flex-col text-white w-full">
                    <div className="flex justify-center">
                        <div className="w-96 h-96 overflow-hidden">
                            <img className="w-full" src={detail.detail.image}/>
                        </div>
                    </div>
                    <div className="bg-light-pink mt-2 p-2">
                        <div className="text-center text-xl font-bold p-2 border-b-2"> 
                            {detail.detail.name} 
                        </div>
                        <div className="pl-2 mt-2"> 
                            {detail.detail.description}
                        </div>
                        <div className="text-xl font-bold text-end pr-3 mt-5 "> 
                            {detail.detail.price} €
                        </div>
                        <div className="flex flex-row items-center justify-end p-1">
                            <div className="pr-2">
                                Quantité en stock
                            </div>
                            <div>
                                {detail.detail.quantity - (cartProduct?.quantity || 0)}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button 
                            onClick={() => {
                            addToCart(detail);
                            }} disabled = {detail.detail.quantity <= cartProduct?.quantity}
                            className={`rounded-full p-3 ${detail.detail.quantity <= cartProduct?.quantity? 'bg-gray-500': 'bg-dark-pink'} `}> Ajouter au panier </button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default DetailProductView;