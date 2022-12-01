import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { URL_ADMIN_HOME, URL_CART, URL_HOME, URL_LOGIN, URL_PRODUCTS, URL_PROFILE, URL_REGISTER } from '../../constants/urls/urlFrontEnd';
import { isAdmin, selectIsLogged, signOut } from './../../redux-store/authenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import {BsCartFill} from 'react-icons/bs'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiLogOut,BiSearchAlt} from 'react-icons/bi'
import logo from '../../assets/images/logo.png'
import Searchbar from './Searchbar';


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
                    <div className=" px-2 sm:px-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <Link to={URL_HOME}>
                                    <img
                                        className="h-16 w-auto cursor-pointer"
                                        src={logo}
                                        alt=""
                                        
                                    />
                                </Link>
                            </div>
                            <div className='hidden lg:flex'>
                            <Searchbar />
                            </div>
                            <div className="hidden md:flex items-center">
                           {isLogged && role === "admin" && <Link to={URL_ADMIN_HOME}><button className='btn bg-light-yellow hover:bg-light-yellow-hover mr-8'>Admin</button></Link>}
                            <Link to={URL_PRODUCTS}>
                                <div className='flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                                    <button className="btn rounded bg-light-yellow hover:bg-light-yellow-hover mr-8">
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

                            <div className="flex md:hidden">
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
                            <div className="p-4 flex flex-col space-y-3">
                                    <Link to={URL_CART}>
                                        <div className='flex flex-col justify-center mx-2 text-2xl hover:text-light-yellow'>
                                            <FaUserAlt />
                                        </div>
                                    </Link>
                                    {isLogged ? <Link to={URL_PROFILE}>
                                    <div className='relative space-y-4 mx-2 text-2xl hover:text-light-yellow'>
                                        <BsCartFill />
                                        <span className="absolute bottom-3 left-3 text-center text-sm font-bold leading-none w-4 h-4 text-red-100 bg-red-600 rounded-full">{cartItems.length}</span>
                                    </div>
                                </Link> : ''}
                                <ConnectionBtn />
                                {isLogged && role === "admin" && <Link to={URL_ADMIN_HOME}><button className='btn bg-light-yellow hover:bg-light-yellow-hover mr-8'>Admin</button></Link>}
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
                <div className=" hover:text-red-500 text-3xl" onClick={() => {dispatch(signOut()); showToastMessage()}} title="Déconnexion">
                    <BiLogOut className="" />
                </div>
            </Link>: 
            <Link to={URL_HOME}>
            <div className=" rounded hover:text-red-500" onClick={() => {dispatch(signOut()); showToastMessage()}} title="Déconnexion">
            <BiLogOut className=" text-3xl"/>
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
