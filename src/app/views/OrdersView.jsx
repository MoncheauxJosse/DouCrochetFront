import React, { useEffect, useState } from 'react'
import {getAll} from "../api/backend/orders";
import {format} from "date-fns";

export default function OrdersView() {
    const [orders, setOrders] = useState([]);
  // const [reload, setReload] = useState(false);
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
            Etat
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
        </tr>
      </thead>
      <tbody className="bg-white">
        {orders.map((order, index) => (
          <>
              <tr key={order._id} className="users-list">
                <td className="text-center border-b border-gray-200 ...">
                  {order.user.firstname + " " + order.user.lastname}
                </td>
                <td className="text-center border-b border-gray-200 ...">
                  {order.order_state}
                </td>
                <td className="text-center border-b border-gray-200 ...">
                  {order.productLine[0].product}
                </td>
                <td className="text-center border-b border-gray-200 ...">
                  {date}
                </td>
              </tr>
          </>
        ))}
      </tbody>
    </table>
  )
}

}