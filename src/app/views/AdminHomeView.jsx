import React from 'react';
import { useSelector } from 'react-redux';
import NavAdmin from '../components/layouts/NavAdmin';
import {selectUser} from './../redux-store/authenticationSlice'  
       
const AdminHomeView = () => {
  const user = useSelector(selectUser);
  console.log(user)
  return (
    <div className='mx-5 mt-2'>
      <div>
        <h2 className='text-5xl text-bold'>Bienvenue sur l'admin</h2>
      </div>
      <div>
        <NavAdmin />
      </div>
    </div>
  );
};

export default AdminHomeView;
