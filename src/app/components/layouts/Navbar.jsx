import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { URL_ADMIN_HOME, URL_CART, URL_HOME, URL_LOGIN, URL_PROFILE, URL_REGISTER } from '../../constants/urls/urlFrontEnd';
import { isAdmin, selectIsLogged, signOut } from './../../redux-store/authenticationSlice';
import { ToastContainer, toast } from 'react-toastify';
import {BsCartFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

const Navbar = () => {
    const {cartItems} = useSelector((state) => state.cart)
    return (
        <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-light-pink">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="flex items-center py-6 md:justify-start md:space-x-10">
                            <div>
                                <Link to={URL_HOME}>
                                    <img
                                        className="h-8 w-auto cursor-pointer sm:h-10"
                                        src="https://media.discordapp.net/attachments/1022448911543189504/1036559044544045136/logoDC_Noir.png"
                                        alt=""
                                        width={200}
                                        height={60}
                                    />
                                </Link>
                            </div>
                            
                            <div className="hidden flex-1 items-center justify-end md:flex lg:w-0">
                                {/* <Link to={}> */}
                                <div className='flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                                        <button class="btn bg-light-yellow hover:bg-light-yellow-hover mr-8">
                                            <FaUserAlt />
                                            <span class="mx-2">Profil</span>
                                        </button>
                                    </div>
                                {/* </Link> */}
                                <Link to={URL_CART}>
                                    <div className='flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4'>
                                        <button class="btn rounded bg-light-yellow hover:bg-light-yellow-hover mr-8">
                                            <BsCartFill />
                                            <span className="mx-2">Panier</span>
                                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none w-6 h-6 text-red-100 bg-red-600 rounded-full">{cartItems.length}</span>
                                        </button>
                                    </div>
                                </Link>
                                <ConnectionBtn />
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex transform items-center justify-center rounded-md p-2 text-primary hover:bg-primary 
                                    hover:text-white focus:outline-none active:scale-95 active:ring-2 active:ring-primary active:ring-offset-2 "
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
                                {/* <Link to={}> */}
                                <div className='mb-5'>
                                        <button class="btn bg-light-yellow hover:bg-light-yellow-hover mr-8">
                                            <FaUserAlt />
                                            <span class="mx-2">Profil</span>
                                        </button>
                                    </div>
                                {/* </Link> */}
                                    <Link to={URL_CART}>
                                        <div className='mb-5'>
                                            <button class="btn bg-light-yellow hover:bg-light-yellow-hover mr-8">
                                                <BsCartFill />
                                                <span class="mx-2">Panier</span>
                                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartItems.length}</span>
                                            </button>
                                        </div>
                                    </Link>
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
            {role === "admin" ?<Link to={URL_ADMIN_HOME}><button className='btn bg-light-yellow hover:bg-light-yellow-hover'>Admin</button></Link>: ''}
            {role === "admin" ? <Link to={URL_LOGIN}>
                <button className="btn bg-light-yellow hover:bg-light-yellow-hover ml-8" onClick={() => {dispatch(signOut()); showToastMessage()}}>
                    Se déconnecter
                </button>
            </Link>: 
            <Link to={URL_HOME}>
            <button className="btn rounded bg-light-yellow hover:bg-light-yellow-hover" onClick={() => {dispatch(signOut()); showToastMessage()}}>
                Se déconnecter
            </button>
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
