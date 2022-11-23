import { useEffect } from "react";
import { useState } from "react";
import {getProfile} from "../api/backend/users";
import { getPayloadToken } from "../services/tokenServices";

const ProfileView = () => {
    const [loader, setLoader] = useState({state : false})
    const [profile, setProfile] = useState([])
    const token = getPayloadToken(localStorage.token)
    console.log(token)

        return (
            <div className="flex justify-center mt-5">
                <div className="flex flex-col">
                    <div className="text-center text-light-yellow bg-light-pink w-96 shadow-xl">
                        <div className="text-center font-bold text-xl">Profil</div>
                        <div className="flex flex-row justify-center">
                            <div className="p-2">Prénom : {token.firstname}</div>
                            <div className="p-2">Nom : {token.lastname}</div>
                        </div>
                        <div>Date de naissance : {token.birthdate}</div>
                        <div>mail : {token.email}</div>
                    </div>
                    
                    <div className="mt-2 bg-light-pink text-light-yellow p-2">
                            <div className="text-center font-bold text-xl">Adresse</div> 
                            <div><strong>Pays :</strong> {token.adresse.country}</div> 
                            <div>Ville : {token.adresse.city}</div> 
                            <div>code postal : {token.adresse.cityCode}</div>
                            <div>N° de rue : {token.adresse.number}</div>
                            <div>Rue : {token.adresse.street}</div> 
                        </div>
                </div>
            </div>
            )
}
export default ProfileView;