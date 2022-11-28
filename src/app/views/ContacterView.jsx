import React,{useState,useEffect} from 'react';
import { AiFillPhone} from 'react-icons/ai';
import {RiMailSendLine} from 'react-icons/ri';

const ContacterView = () => {

    return (
        <div className='mt-2'>
            <h3>Nous contacter :</h3>

            <i>Pour toute réclamation, veuillez vous reporter sur l'onglé réclamation.
                Le service ci-joint, ne gére pas cela.
            </i>

            <div className='ml-5 mt-2'>
                <div className='flex'>
                    <AiFillPhone className='text-dark'/>
                    <div className='font-semibold'>tel :
                        </div> 
                 
                    03.**.**.**.**
                </div>

                <div className='flex'>
                    <RiMailSendLine className='text-dark'/>
                    <div className='font-semibold'>email :
                    </div> DouCrochet@gmail.com
                </div>
            </div>
        </div>
       
    )




}
export default ContacterView