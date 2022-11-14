import { useEffect } from "react";
import { useState } from "react";
import { getprofile} from "../api/backend/users";

const ProfileView = () => {

    const [profile, Setprofile] = useState()
    

    useEffect(()=>{
        const fetchProfile = async ()=>{
            await getprofile(id)
        }

    })

    return(
        <div>

        </div>
    )


}
export default ProfileView;