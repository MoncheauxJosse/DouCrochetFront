import React,{useState,useEffect} from 'react';
import ContacterView from './ContacterView'
import ReturnView from './ReturnView'
import Complaint from './ComplaintView'

const ChoiceView = (choice) => {

    if(choice.change==1){
    return (

        <div><ContacterView/></div>
    )
}else if(choice.change==2){
    return (

        <div><ReturnView/></div>
    )

}else if(choice.change==3){

    return (

        <div><Complaint/></div>
    )
}else{
    return(<div></div>)
}





}
export default ChoiceView