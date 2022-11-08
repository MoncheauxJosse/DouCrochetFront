import React, { useEffect, useState } from "react";
import { anonymizeUser, findRole, getAll, modifUser } from "../api/backend/users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
       getAll().then(userdata =>{
        setUsers(userdata.data);
        console.log(userdata)
      });
      
    setLoader(true) 
  }, []);

  useEffect(() => {
    findRole().then(roleID =>{
      console.log(roleID);
   });
  });

  if (loader.state == false) {
  if (!loader) {
    return (<div>LOADING...</div>);
  } 
}
 
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
    <table className="min-w-full border text-center">
      
      <thead className="bg-gray-50">
        <tr>
        
        <th scope="col" className="text-sm font-medium text-black-900 px-6 py-4 border-r ">
            Name
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r">
            Email
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border-r ">
            Role
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
          {users.map(user =>(
        <>{user.role.role === 'admin' ? '' : 
          <tr key={user._id} className="users-list">
            <td className="text-center border-b border-gray-200 ...">{user.firstname + " " + user.lastname}</td>
            <td className="text-center border-b border-gray-200 ...">{user.email}</td>
            <td className="text-center border-b border-gray-200 ...">{user.role.role}</td>
            <td className="flex justify-center"><button onClick={() => {deleteUser(user._id); showToastMessage()}} className="delete-button border-b bg-red-500 rounded-md p-3">Supprimer</button></td>
            <td className="flex justify-center">
           

              <tbody className="bg-white">
                <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Modifier  Role</label>
                <select  id="role" class="bg-blue-50 border border-gray-300 text-pink-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option onClick={() => {editUser(role._id); showToastMessage()}} value="client">Client</option>
                  <option onSelect={() => {editUser(role._id); showToastMessage()}} value="commercial">Commercial</option>
                </select>
                <button onClick={() => {editUser(user._id); showToastMessage()}} >confirmer</button>
            </tbody>
             
            </td>
            <td>
            </td>   
          </tr>}
        </>
          ))}
      </tbody>
    </table>
  );
};

export default UsersView;

