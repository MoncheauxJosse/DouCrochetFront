import React, { useEffect, useState } from "react";
import { anonymizeUser, getAll } from "../api/backend/users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [loader, setloader] = useState({ state: false });

  useEffect(() => {
       getAll().then(userdata =>{
        setUsers(userdata.data);
      });

    setloader({state:true}) 
  }, []);

  if (loader.state == false) {
    return (<div>LOADING...</div>);
  } 
  else if (loader.state == true) {
 
  const deleteUser = (id) => {
    anonymizeUser(id) 
    console.log("Utilisateur anonymisé")
  }
  const showToastMessage = () => {
    toast.success('Utilisateur anonymisé', {
        position: toast.POSITION.BOTTOM_LEFT
    });
};

  return (
    <table className="border-separate border-spacing-0">
      <thead className="bg-gray-50">
        <tr>
          <th className="sticky top-0 z-10 border-b border-gray-300 ...">
            Name
          </th>
          <th className="sticky top-0 z-10 border-b border-gray-300 ...">
            Email
          </th>
          <th className="sticky top-0 z-10 border-b border-gray-300 ...">
            Role
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
          {users.map(user =>(
        <>{user.role.role === 'admin' ? '' : <tr key={user._id} className="users-list">
            <td className="text-center border-b border-gray-200 ...">{user.firstname + " " + user.lastname}</td>
            <td className="text-center border-b border-gray-200 ...">{user.email}</td>
            <td className="text-center border-b border-gray-200 ...">{user.role.role}</td>
            <td className="flex justify-center"><button onClick={() => {deleteUser(user._id); showToastMessage()}} className="delete-button border-b bg-red-500 rounded-md p-3">Supprimer</button></td>
          </tr>}
        </>
          ))}
      </tbody>
    </table>
  );
};
}

export default UsersView;

