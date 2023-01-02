export const SelectComp = (props) =>{
 
    
    if(props.prop == true){
        return (
            <>
            <select id={props.id}>
                <option value={true}>Terminé</option>
                <option value={false}>En cours</option>
            </select>
           
            </>
        )
    }
    else if(props.prop == false){
        return (
            <>
            <select id={props.id}>
                <option value={false}>En cours</option>
                <option value={true}>Terminé</option>
            </select>
            </>
        )
    }
}