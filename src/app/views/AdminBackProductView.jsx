import { useState, useEffect } from "react"
import { supportReturns } from "../api/backend/support"
import { configureStore } from '@reduxjs/toolkit';

const AdminBackProductView = () => {
    const [returnProdcuts, setReturnProducts] = useState()
    const [loader, setLoader] = useState(false);

    useEffect(()=>{
        const fetchdata= async()=>{
            const getAll =await supportReturns()
            return getAll.data
        }

        fetchdata().then(data => {
            console.log(data)
            setReturnProducts(data)
        })
        setLoader(true)
    },[])

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
                </tr> 
            ))}
            </tbody>
        </table>
    )
}
}
export default AdminBackProductView