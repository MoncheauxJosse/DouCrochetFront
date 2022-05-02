import React, { useEffect, useState } from 'react';

/**
 * Component Loader
 *
 * Display a loading indication
 * After 15 sec, display an error message
 *
 *
 * @author Peter Mollet
 */
const Loader = () => {
    const [err, setErr] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setErr(true), 15000);
        return () => clearInterval(interval);
    }, []);

    return !err ? (
        <div className="">
            <div
                className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden
            bg-gray-800 opacity-50 flex flex-col items-center justify-center">
                <div className="bg-white flex space-x-2 p-3 rounded-full justify-center items-center">
                    <div className="bg-blue-600 point animate-bounce anim-delay-100">
                        &nbsp;
                    </div>
                    <div className="bg-green-600 point animate-bounce anim-delay-300">
                        &nbsp;
                    </div>
                    <div className="bg-red-600 point animate-bounce anim-delay-600">
                        &nbsp;
                    </div>
                </div>

                <h2 className="text-center text-white text-xl font-semibold">
                    Chargement...
                </h2>
                <p className="w-1/3 text-center text-white">Veuillez patienter</p>
            </div>
        </div>
    ) : (
        <div className="alert alert-danger" role="alert">
            Erreur lors du chargement !
        </div>
    );
};

export default Loader;
