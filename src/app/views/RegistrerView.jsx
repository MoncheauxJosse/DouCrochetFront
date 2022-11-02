import Register from "../components/account/Register";
import { useNavigate } from "react-router-dom";
import { URL_HOME } from "../constants/urls/urlFrontEnd";
const RegisterView = ()=>{

    return (
        <div class="flex justify-center bg-beige-light">
            <Register/>
        </div>
    )
}
export default RegisterView;