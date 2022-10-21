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
        <tr key = {user._id}>
            
          <td className="border-b border-gray-200 ...">{user.firstname +" " + user.lastname}</td>
          <td className="border-b border-gray-200 ...">{user.email}</td>
          <td className="border-b border-gray-200 ...">{user.role.role}</td>
        </tr>
          ))}
      </tbody>
    </table>
  );
};
}

export default UsersView;

