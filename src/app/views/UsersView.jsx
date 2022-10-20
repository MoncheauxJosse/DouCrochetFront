import React, { useEffect, useState } from "react";
import { getAll } from "../api/backend/users";
// import { getAll } from '../../app/api/backend/users';

const UsersView = () => {
  const [allUsers, setUsers] = useState([]);
  const [loader, setloader] = useState({ state: false });

  useEffect(() => {
    // const fetchData = async () => {
      const usersData = getAll();
      setUsers(usersData);
      console.log(usersData);
    // };

    // fetchData();
    setloader({state:true}) 
  }, []);

  console.log(allUsers.data);

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
        <tr>
          <td className="border-b border-gray-200 ...">Johne Doe</td>
          <td className="border-b border-gray-200 ...">Johne.Doe@gmail.com</td>
          <td className="border-b border-gray-200 ...">Client</td>
        </tr>
      </tbody>
    </table>
  );
};
}

export default UsersView;
