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
                className="fixed top-0 left-0 right-0 bottom-0 z-50 flex h-screen w-full
            flex-col items-center justify-center overflow-hidden bg-gray-800 opacity-50"
            >
                <div className="flex items-center justify-center space-x-2 rounded-full bg-white p-3">
                    <div className="point anim-delay-100 animate-bounce bg-blue-600">
                        &nbsp;
                    </div>
                    <div className="point anim-delay-300 animate-bounce bg-green-600">
                        &nbsp;
                    </div>
                    <div className="point anim-delay-600 animate-bounce bg-red-600">
                        &nbsp;
                    </div>
                </div>

                <h2 className="text-center text-xl font-semibold text-white">
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
