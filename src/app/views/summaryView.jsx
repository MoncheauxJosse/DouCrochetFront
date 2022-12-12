import { URL_PROFILE } from "../constants/urls/urlFrontEnd";
import { getPayloadToken } from "../services/tokenServices";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItemValid from '../components/layouts/CartItemValid';

const SummaryView = ()=>{
    const token = getPayloadToken(localStorage.token)
    const {cartItems} = useSelector((state) => state.cart)

    const getTotal = (cart) => {
        console.log("ca passe ", cart)
        let somme = 0
        for(let i = 0; i < cart.length; i++){
          somme = somme + (cart[i].quantity * cart[i].price)
        }
        return somme.toFixed(2)
    }

    return (
        <div className="p-2 ml-40 mr-40">
            <div className="text-center text-3xl font-bold">
            recapitulatif de votre commande
            </div>
            <div className="pl-2 mt-5">
                <div className="flex flex-row">
                <div className='font-bold text-xl'>
                    1 - Adresse de facturation
                </div>
                    <div className="ml-10 w-80">
                        <div>
                            {token.firstname} {token.lastname}
                        </div>
                        <div>
                            {token.adresse.number} rue {token.adresse.street}
                        </div>
                        <div>
                            {token.adresse.cityCode}
                        </div>
                        <div>
                            {token.adresse.city}
                        </div>
                    </div>
                    <div className="ml-10">
                        <Link to={URL_PROFILE}><button>modifier</button></Link>

                    </div>
                </div>
            </div>
            <div className="bg-slate-300 w-full h-px mt-5"></div>
            <div>
            <div className='font-bold'>
                Mode de payement
            </div>
            <button>Ajouter</button>
            <button>modifier</button>
            </div>
            <div className="bg-slate-300 w-full h-px mt-5"></div>
                <div className='font-bold text-center'>
                    verification et validation de la commande
                </div>
            <div className="border border-slate-700 rounded-xl p-5 mt-2 overflow-scroll h-96">
                {cartItems?.map((item)=>{
                    console.log(item)
                    return(
                        <div>
                            <CartItemValid key={item.id} id={item.id} quantity={item.quantity}/>
                        </div>
                    )
                })}
            </div>
            <div>
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Prix au total</span>
                  <span>{getTotal(cartItems)}€</span>
                </div>
            <button>Procéder au payement</button>
            </div>
        </div>
    )
}
export default SummaryView;