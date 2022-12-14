import React from 'react'
import { Link } from 'react-router-dom'
import { URL_HOME } from '../constants/urls/urlFrontEnd'

export default function NotFoundView() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
	<h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
	<div className="bg-dark-pink px-2 text-sm rounded rotate-12 absolute">
		Page Introuvable
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-dark-pink group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-light-pink text-white border border-current">
          <Link to={URL_HOME}>Retourner à l'accueil</Link>
        </span>
      </a>
    </button>
</main>
  )
}
