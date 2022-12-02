import React,{useState,useEffect} from 'react';
import { AiFillPhone, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import {RiMailSendLine} from 'react-icons/ri';
import instagram from '../assets/images/icons8-instagram-48.png'
import facebook from '../assets/images/icons8-facebook-48.png'

const ContacterView = () => {

    return (
        <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="map-container-2 w-full h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40903.635849638136!2d3.5806274541591048!3d50.15221058530811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c28f340367d117%3A0x40af13e816472e0!2s59222%20Bousies!5e0!3m2!1sfr!2sfr!4v1669844259767!5m2!1sfr!2sfr" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap pt-12 lg:pt-0">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-light-pink rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <AiFillPhone className='text-white text-2xl' />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Numéro de téléphone</p>
                        <p className="text-gray-500">03.20.20.20.20</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-light-pink rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <RiMailSendLine className='text-white text-2xl' />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Adresse e-mail</p>
                        <p className="text-gray-500">DouCrochet@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="bg-light-pink rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <img src={instagram} className='h-10 w-10'></img>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Instagram</p>
                        <a href='#' className="text-gray-500">Les Dou'Crochets</a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="bg-light-pink rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <img src={facebook} className='h-10 w-10'/>
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1">Facebook</p>
                        <a href='https://www.facebook.com/profile.php?id=100075687324766' target="_blank" className="text-gray-500">Les Dou'Crochets</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    )




}
export default ContacterView