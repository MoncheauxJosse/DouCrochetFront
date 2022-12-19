import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import IdleTimerCustom from './components/account/IdleTimerCustom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Loader from './components/lib/utils-components/Loader';
import { selectIsLogged, signIn } from './redux-store/authenticationSlice';
import Routes from './routes/Routes';
import { getToken } from './services/tokenServices';
import Searchbar from './components/layouts/Searchbar';

import CookieView from './views/CookieView';

const contextClass = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-500',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
};

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const App = () => {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (token) dispatch(signIn(token));
        setIsLogin(false);
    }, []);

    if (isLogin) return <Loader />;

   

    return (
        <BrowserRouter>
            <div className="flex cursor-default min-h-screen flex-col bg-light-yellow ">
                {isLogged}
                <Navbar />
                <div className='lg:hidden flex mt-20 justify-center'>
                    <Searchbar />
                    </div>
                <main className="lg:mt-16 flex flex-grow flex-col overflow-y-hidden bg-light-yellow">
                    <Routes />
                
                </main>
                <ToastContainer
                    toastClassName={({ type }) =>
                        contextClass[type || 'default'] +
                        ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
                    }
                    bodyClassName={() => 'text-sm font-white font-med block p-3'}
                    position="bottom-left"
                    autoClose={3000}
                />
                <div className='mt-4'>
                <CookieView />
                    <Footer/>
                </div>
            </div>
            
            
        </BrowserRouter>
    );
};

export default App;
