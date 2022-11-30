import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//className="w-5 h-5 text-gray-500 dark:text-gray-400"
import { URL_ADMIN_HOME, URL_CART, URL_HOME, URL_LOGIN, URL_PRODUCTS, URL_PROFILE, URL_REGISTER } from '../../constants/urls/urlFrontEnd';
import { isAdmin, selectIsLogged, signOut } from './../../redux-store/authenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import {BsCartFill} from 'react-icons/bs'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiLogOut,BiSearchAlt} from 'react-icons/bi'
import logo from '../../assets/images/logo.png'


const Navbar = () => {
    const {cartItems} = useSelector((state) => state.cart)
    const isLogged = useSelector(selectIsLogged);
    const [input ,setInput]= useState({searchData:''})
    const role = useSelector(isAdmin);
    const navigate= useNavigate()

    const search= ()=>{

        navigate(URL_PRODUCTS,{
            state:{
                search:input
            },
        });
        
      }
    return (
        <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-light-pink">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6">
                        <div className="flex items-center py-2 ">
                            <div>
                                <Link to={URL_HOME}>
                                    <img
                                        className="h-16 w-auto cursor-pointer"
                                        src={logo}
                                        alt=""
                                        
                                    />
                                </Link>
                            </div>
                            <div>
                            <div class="flex justify-center items-center">
                                <div class=" xl:w-96 justify-center items-center ">
                                    <div class="input-group relative flex items-center w-full ">
                                        <input type="search" onChange={(e)=> setInput({searchData: e.target.value})} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                        <button onClick={search} className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2" >
                                            <BiSearchAlt/>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="hidden flex-1 items-center justify-end md:flex lg:w-0">
                           {isLogged && role === "admin" && <Link to={URL_ADMIN_HOME}><button className='btn bg-light-yellow hover:bg-light-yellow-hover mr-8'>Admin</button></Link>}
                            <Link to={URL_PRODUCTS}>
                                <div className='flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                                    <button class="btn rounded bg-light-yellow hover:bg-light-yellow-hover mr-8">
                                        <BsFillBagCheckFill />
                                        <span className="mx-2">Produits</span>
                                    </button>
                                </div>
                            </Link>
                                
                                {isLogged ? <Link to={URL_PROFILE} title="Voir le profil">
                                    <div className='flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 mx-2 text-2xl hover:text-light-yellow'>
                                        <FaUserAlt />
                                    </div>
                                </Link>
                                : ''}
                                <Link to={URL_CART} title="Voir le panier">
                                    <div className='flex relative space-y-4 md:flex-row md:items-center md:space-y-0 mx-2 text-2xl hover:text-light-yellow'>
                                            <BsCartFill />
                                            <span className="absolute -top-1 -right-1 text-center text-sm font-bold leading-none w-4 h-4 text-red-100 bg-red-600 rounded-full">{cartItems.length}</span>
                                    </div>
                                </Link>
                                <ConnectionBtn />
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex transform items-center justify-center rounded-md p-2 text-light-yellow hover:light-yellow 
                                    hover:text-white focus:outline-none active:scale-95 active:ring-2 active:ring-offset-2 "
                                >
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            
                        </div>
                    </div>

                    <Transition
                        enter="transition"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="p-4 md:hidden ">
                            <hr />
                            <div className="p-4">
                                    <Link to={URL_CART}>
                                        <div className='mb-5 flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 mx-2 text-2xl hover:text-light-yellow'>
                                            <FaUserAlt />
                                        </div>
                                    </Link>
                                    {isLogged ? <Link to={URL_PROFILE}>
                                    <div className='flex relative space-y-4 md:flex-row md:items-center md:space-y-0 mx-2 text-2xl hover:text-light-yellow'>
                                        <BsCartFill />
                                        <span className="absolute -top-1 -right-1 text-center text-sm font-bold leading-none w-4 h-4 text-red-100 bg-red-600 rounded-full">{cartItems.length}</span>
                                    </div>
                                </Link> : ''}
                                    
                                <ConnectionBtn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged);
    const role = useSelector(isAdmin);
    console.log(role)
    const dispatch = useDispatch();
    const showToastMessage = () => {
        toast.success('Déconnexion réussie', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if (isLogged)
        return (
            <>
            {role === "admin" ? <Link to={URL_LOGIN}>
                <div className=" hover:text-red-500 text-2xl ml-8 mr-8" onClick={() => {dispatch(signOut()); showToastMessage()}} title="Déconnexion">
                    <BiLogOut className="mr-2 text-3xl" />
                </div>
            </Link>: 
            <Link to={URL_HOME}>
            <div className=" rounded hover:text-red-500 text-2xl mr-8" onClick={() => {dispatch(signOut()); showToastMessage()}} title="Déconnexion">
            <BiLogOut className="mr-2 text-3xl"/>
            </div>
            </Link>
            
            }
            </>
        );
    else
        return (
            <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 ">
                <Link to={URL_LOGIN}>
                    <div className="link rounded hover:text-dark-pink">Se connecter</div>
                </Link>
                <Link to={URL_REGISTER}>
                    <button className="btn rounded bg-light-yellow hover:bg-light-yellow-hover">S'inscrire</button>
                </Link>
            </div>
        );
};
