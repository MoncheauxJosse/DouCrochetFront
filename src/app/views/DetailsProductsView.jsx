import { useState, useEffect } from "react";
import { detailProduct } from "../api/backend/product";
import Loader from "../components/lib/utils-components/Loader";

const DetailProductView = () => {
    const [detail, setDetail] = useState({ detail: [] })
    const [loader, setloader] = useState({state : false})
    console.log("loader",loader)
    
    const id = sessionStorage.getItem('detailStorage')
    console.log("id detailproduct", id)
    useEffect(() => {     
        const fetchDetail = async () => {

            let detail = await detailProduct(id);

            setDetail({
                detail: detail.data,   
            })
            setloader({
                state : true
            })
            console.log("state true")
        }
        fetchDetail()
    },[]);

console.log(detail)
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
                                Quantité
                            </div>
                            <select className="text-dark-pink" name="quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option> 
                                        <option value="3">3</option> 
                                        <option value="4">4</option> 
                                        <option value="5">5</option> 
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button className="rounded-full p-3 bg-dark-pink"> ajouter au panier </button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default DetailProductView;