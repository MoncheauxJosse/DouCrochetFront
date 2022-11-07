import React from 'react';
import { useSelector } from 'react-redux';
import NavAdmin from '../components/layouts/NavAdmin';
import {selectUser} from './../redux-store/authenticationSlice'


// const AdminHomeView = () => {
//     return (
//     <div className="">ADMIN Test</div>

    
       
const AdminHomeView = () => {
  const user = useSelector(selectUser);
  console.log(user)
  return (
    <div className='ml-5'>
      <div>
        <h2>Bienvenue sur l'admin</h2>
      </div>
      <div>
        <NavAdmin />
      </div>
    </div>
  );
};
    

    



export default AdminHomeView;
