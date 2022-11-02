import React, { useEffect, useState } from "react";
import { getAll } from "../api/backend/users";
// import { getAll } from '../../app/api/backend/users';

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [loader, setloader] = useState({ state: false });

  useEffect(() => {
    // const fetchData = async () => {
       getAll().then(userdata =>{

        setUsers(userdata.data);
        console.log(userdata);
      });
    // };

    // fetchData();
    setloader({state:true}) 
  }, []);

  console.log(users);

  if (loader.state == false) {
    console.log(loader.sta)
    return (<div>LOADING...</div>);
  } 
  else if (loader.state == true) {
 

  return (
    <table class="min-w-full border text-center">
      
      <thead className="bg-gray-50">
        <tr>
        
        <th scope="col" class="text-sm font-medium text-black-900 px-6 py-4 border-r bg-blue-700">
            Name
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
            Email
          </th>
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r bg-dark-pink">
            Role
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
          {users.map(user =>(
        <tr key = {user._id}>
             
          <td className="border-b border-black-200 ... bg-blue-700">{user.firstname +" " + user.lastname}</td>
          <td className="border-b border-black-200 ... ">{user.email}</td>
          <td className="border-b border-black-200 ... bg-dark-pink">{user.role.role}</td>
        </tr>
          ))}
      </tbody>
    </table>
  );
};
}

export default UsersView;

