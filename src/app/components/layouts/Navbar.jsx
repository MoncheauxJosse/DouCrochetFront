import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { URL_HOME, URL_LOGIN, URL_REGISTER } from '../../constants/urls/urlFrontEnd';
import { selectIsLogged, signOut } from './../../redux-store/authenticationSlice';

const Navbar = () => {
    return (
        <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-light-pink shadow-md">
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
    const dispatch = useDispatch();
    if (isLogged)
        return (
            <button className="btn btn-green ml-8" onClick={() => dispatch(signOut())}>
                Sign out
            </button>
        );
    else
        return (
            <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
                <Link to={URL_LOGIN}>
                    <div className="link">Sign in</div>
                </Link>
                <Link to={URL_REGISTER}>
                    <button className="btn bg-light-yellow">Sign up</button>
                </Link>
            </div>
        );
};
