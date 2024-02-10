import React from 'react'
import logo from '../assets/images/PNG/logo.png'
import line from '../assets/images/PNG/button-line.png'
import colorline from '../assets/images/PNG/color-line-btn.png'
const Header = () => {
    return (
        <>
            <header className=' bg-hero min-vh-100 bg-dark'>
                <div className='nav-box d-flex justify-content-center align-items-center '>
                    <div className="container">
                        <nav className=' d-flex align-items-center justify-content-between '>
                            <img src={logo} alt="logo" className=' cursor-pointer' />
                            <div className="position-relative">
                                <button className='d-none d-sm-block d-lg-none font-inter fw-700 color-white text-16 lh-25 nav-btn'>Acceso</button>
                                <div className="position-absolute-line d-none d-sm-block d-lg-none"><img src={line} alt="btn-line" /></div>
                            </div>
                            <label for="icon" class="icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="icon" hidden />
                            <ul className=' d-flex gap-4 align-items-center  mobile-view'>
                                <li><a href="#home" className='color-white font-inter fw-500 text-16 lh-25 opacity-8'>Hogar</a></li>
                                <li><a href="#mission" className='color-white font-inter fw-500 text-16 lh-25 opacity-8'>Misión</a></li>
                                <li><a href="#slots" className='color-white font-inter fw-500 text-16 lh-25 opacity-8'>Tragamonedas</a></li>
                                <li><a href="#por" className='color-white font-inter fw-500 text-16 lh-25 opacity-8'>Por qué elegirnos</a></li>
                                <li><a href="#offer" className='color-white font-inter fw-500 text-16 lh-25 opacity-8'>Ofertas</a></li>
                                <li><button className=' d-block d-sm-none font-inter fw-700 color-white text-16 lh-25 nav-btn'>Acceso</button></li>
                            </ul>
                            <div className="position-relative">
                                <button className='d-none d-lg-block font-inter fw-700 color-white text-16 lh-25 nav-btn'>Acceso</button>
                                <div className="position-absolute-line d-none d-lg-block"><img src={line} alt="btn-line" /></div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container d-flex flex-column align-items-center pt-140 " id="home">
                    <h2 className=' font-anton color-white fw-400 text-72 lh-86 max-w-505 mb-0 text-center text-uppercase'>Exclusive Games. Pasión por ganar</h2>
                    <p className=' font-inter fw-500 text-16 lh-25 color-white text-center max-w-727 opacity-8 pt-3 mb-0 '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                    <div className="position-relative">
                        <button className=' font-inter color-black fw-700 text-16 lh-25 sec-btn mt-40'>Empezar</button>
                        <div className="position-absolute colorline-post">
                            <img src={colorline} alt="colorline" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header