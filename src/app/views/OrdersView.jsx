import React, { useEffect, useState } from 'react'
import {getAll, modifOrderState} from "../api/backend/orders";
import {format} from "date-fns";
import { toast } from 'react-toastify';

export default function OrdersView() {
    const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);
  const [loader, setLoader] = useState(false);
  const [date, setDate] = useState()

  useEffect(() => {
    const getOrders = async () => {
      const orderdata = await getAll()
      return orderdata.data
    }

    getOrders().then(data => {
      const dateToInput = format(new Date(data[0].order_date), 'dd-MM-yyyy').toString()
      setDate(dateToInput)
      setOrders(data);
    });
    setLoader(true);
  }, []);
console.log(orders)

const editOrderState = (_id, index) => {
  const stateSelect = document.getElementById(index).value
  console.log(stateSelect);
    modifOrderState(_id, {stateSelect}).then( response => {
      console.log(response);
      setReload(prevState => !prevState);
      toast.success("Etat Modifié", {
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
    return (<div>LOADING...</div>)
  }else if(loader) {
    
    return (
      <table className="min-w-full border text-center">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-black-900 px-6 py-4 border-r "
            >
            Nom
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
            Produit
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
            Date de commande
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 border-r "
            >
            Etat
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {orders?.map((order, index) => (
              <tr key={order._id} className="users-list">
                <td className="text-center border-b border-gray-200 ...">
                  {order?.user?.firstname + " " + order?.user?.lastname}
                </td>
                <td className="text-center border-b border-gray-200 ...">
                  {order?.productLine?.product}
                </td>
                <td className="text-center border-b border-gray-200 ...">
                  {date}
                </td>
                <td className=" align-items: flex bg-white ">
                    <select className=" align-items: stretch; block w-2/3 p-1 rounded-md"
                      id = {index}
                      defaultValue={order?.order_state?.state}
                    >
                      <option value="preparation" >
                        En cours de préparation
                      </option>
                      <option value="expedition" >
                        Expédié
                      </option>
                      <option value="livraison" >
                        En cours de livraison
                      </option>
                      <option value="recu">
                        Livré
                      </option>
                    </select>
                    <button className="align-items: bg-blue-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-1.5"
                      onClick ={() => {
                        editOrderState(order._id, index);
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