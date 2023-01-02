import React from 'react';
import {  useParams } from 'react-router-dom';
import { supportOrder } from '../api/backend/support';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux-store/authenticationSlice';
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
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
    // console.log("je suis data",Data);
    
    
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
            <div>
              <h1>Félicitations ! Votre paiement a réussi !</h1>
              <p>Votre commande avec l'ID {facture?.data[0]?._id} a été réussie</p>
              <button onClick={() => navigate('/Home')}>Retour à l'accueil</button>
            </div>
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