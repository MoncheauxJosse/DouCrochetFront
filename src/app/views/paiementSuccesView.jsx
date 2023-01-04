import React from 'react';
import {  useParams } from 'react-router-dom';
import { supportOrder } from '../api/backend/support';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux-store/authenticationSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_HOME } from '../constants/urls/urlFrontEnd';
import { addOrders } from '../api/backend/orders';
import { useDispatch } from 'react-redux';

const PaymentSuccess = () => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => state.cart)
  console.log(cartItems[0].quantity);
  // Ajoutez une variable loading à l'état de votre composant
  const [loading, setLoading] = useState(false);
  // Récupérer le paramètre de la commande à partir de l'URL
  const token = useSelector(selectToken);
  const { OrderDataUser } = useParams();
  const [facture, setFacture] = useState({data: []});
  // Utilisez useNavigate pour obtenir une référence à la fonction navigate
  const navigate = useNavigate();

  useEffect(() => {   
    // Mettez loading à true avant de démarrer le chargement des données
    setLoading(true);

    const fetchData = async () => {
      console.log("active getOrderUser")
      const OrderDataUser = await supportOrder(token);
      setFacture(OrderDataUser) 
      console.log(OrderDataUser);
      
      // Une fois que les données ont été chargées, mettez loading à false
      setLoading(false);
    };
    fetchData()
    addOrders({price_ht: cartItems[0].price, quantity: cartItems[0].quantity, product: cartItems[0].id})
    
  },[])
  // const test = facture.data[0];

  // const testText = JSON.stringify(test);

  // console.log(testText);
  console.log(facture?.data[0]?._id);

  // testText = object.
  return (
        <div>
          {/* Si les données sont en cours de chargement, affichez un message ou une animation de chargement */}
          {loading ? (
            <div>Chargement en cours...</div>
          ) : (
            <>
              <div className="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                  <path fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                  </path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Paiement effectué</h3>
                  <p className="text-gray-600 my-2">Votre commande numéro {facture?.data[0]?._id} a été réussie</p>
                  <p> Merci pour votre commande !  </p>
                  <div className="py-10 text-center">
                    <button onClick={() => navigate(URL_HOME)} className="px-12 bg-dark-pink hover:bg-light-pink text-white font-semibold py-3">
                      Retour à l'accueil
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      );
    };
    
    export default PaymentSuccess;
    






// import React from 'react';
// import {  useParams } from 'react-router-dom';
// import { supportOrder } from '../api/backend/support';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../redux-store/authenticationSlice';
// import { useState } from 'react';

// const PaymentSuccess = () => {
//   // Ajoutez une variable loading à l'état de votre composant
//   const [loading, setLoading] = useState(false);
//   // Récupérer le paramètre de la commande à partir de l'URL
//   const token = useSelector(selectToken);
//   const { OrderDataUser } = useParams();
//   const [facture, setFacture] = useState({data: []});

//   useEffect(() => {   
//     // Mettez loading à true avant de démarrer le chargement des données
//     setLoading(true);

//     const fetchData = async () => {
//       console.log("active getOrderUser")
//       const OrderDataUser = await supportOrder(token);
//       setFacture(OrderDataUser) 
//       console.log(OrderDataUser);
      
//       // Une fois que les données ont été chargées, mettez loading à false
//       setLoading(false);
//     };
//     fetchData()
//     // console.log("je suis data",Data);
    
    
//   },[])
//   // const test = facture.data[0];

//   // const testText = JSON.stringify(test);

//   // console.log(testText);
//   console.log(facture?.data[0]?._id);

//   // testText = object.values(testText);


//   return (
//     <div>
//       {/* Si les données sont en cours de chargement, affichez un message ou une animation de chargement */}
//       {loading ? (
//         <div>Chargement en cours...</div>
//       ) : (
//         <div>
//           <h1>Félicitations ! Votre paiement a réussi !</h1>
//           <p>Votre commande avec l'ID {facture?.data[0]?._id} a été réussie</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentSuccess;







// import React from 'react';
// import {  useParams } from 'react-router-dom';
// import { supportOrder } from '../api/backend/support';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../redux-store/authenticationSlice';
// import { useState } from 'react';


// const PaymentSuccess = () => {
//     // Récupérer le paramètre de la commande à partir de l'URL
//     const token = useSelector(selectToken);
//   const { OrderDataUser } = useParams();
//   const [facture, setFacture] = useState({data: []});

//   useEffect(() => {   

//     const fetchData = async () => {
//       console.log("active getOrderUser")
//       const OrderDataUser = await supportOrder(token);
//       setFacture(OrderDataUser) 
//       console.log(OrderDataUser);
      
//     };
//     fetchData()
//     // console.log("je suis data",Data);
    
    
// },[])
// const test = facture.data[0];

// // const testText = JSON.stringify(test);

// // console.log(testText);
// console.log(facture?.data[0]?._id);

// // testText = object.values(testText);


//   return (
//     <div>
//       <h1>Félicitations ! Votre paiement a réussi !</h1>
//       <p>Votre commande avec l'ID {facture?.data[0]?._id} a été réussie</p>
//     </div>
//   );
// };

// export default PaymentSuccess;