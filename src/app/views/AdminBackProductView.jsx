import { useState, useEffect } from "react"
import { supportReturns } from "../api/backend/support"
import { configureStore } from '@reduxjs/toolkit';
import { supportState } from "../api/backend/support";
import { toast } from "react-toastify";
import { SelectComp } from "../components/lib/utils-components/select.jsx";

const AdminBackProductView = () => {
    const [returnProdcuts, setReturnProducts] = useState()
    const [loader, setLoader] = useState(false);
    const [reload, setReload] = useState(false);
    const [valeurSelectionnee, setValeurSelectionnee] = useState('option1');
    const handleChange = valeur => {
        setValeurSelectionnee(valeur);
      };

    useEffect(()=>{
        const fetchdata= async()=>{
            const getAll =await supportReturns()
            return getAll.data
        }

        fetchdata().then(data => {
            setReturnProducts(data)
        })
        setLoader(true)
    },[])

    const editReturn = (id, index)=>{
        const orderSelect = document.getElementById(index).value
        supportState(id, {orderSelect}).then( response => {
            setReload(prevState => !prevState);
            toast.success("Etat support modifier", {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          }).catch(err => {
            console.log(err);
            toast.error("Erreur dans la modification de l'état", {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          });
    }

    if(!loader){
        return (<>Chargement des données en cours </>)
    }
    else if(loader){
    return (
        <table className="min-w-full border text-center">
        <thead className="bg-gray-50">
             <tr>
          <th
            scope="col"
            className="text-sm font-medium text-black-900 px-6 py-4 border-r "
            >
            Nom du retour
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
            description du retour
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
           email
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
           N° commande
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
           photo
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
          Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
            {returnProdcuts?.map((item, index) => (
                <tr key={index} className="users-list">
                    <td className="text-center border-b border-gray-200 ...">
                    {item.name}
                    </td>
                    <td className="text-center border-b border-gray-200 ...">
                    {item.description}
                    </td>
                    <td className="text-center border-b border-gray-200 ...">
                    {item.order.user.email}
                    </td>
                    <td className="text-center border-b border-gray-200 ...">
                    {item.order._id}
                    </td>
                    <td className="text-center border-b border-gray-200 ...">
                        <img src={item.image} className='h-20'/>
                    </td>
                    <td>
                        <SelectComp prop={item.etat} id={index}/>
                    </td>
                    <td>

                      <button className="align-items: bg-blue-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                      onClick ={() => {
                       editReturn(item._id, index);
                      }}
                    >
                        confirmer
                    </button>
                    </td>
                </tr> 
    ))}
            </tbody>
        </table>
    )
}
}
export default AdminBackProductView