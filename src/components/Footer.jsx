import React from 'react'
import logo from '../assets/images/PNG/logo.png'
import bottomellips from '../assets/images/PNG/footer-ellips-bottom-left.png'
import rightellips from '../assets/images/PNG/footer-right-ellips.png'
import { Facebook, Indeed, Instagram } from '../components/Icon'

function Footer() {
    return (
        <>
            <footer className='bg-black mt-neg-2 position-relative overflow-hidden'>
                <div className="container">
                    <div className="row pt-64">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={logo} alt="logo" className=' cursor-pointer' />
                            <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 pt-3 opacity-8'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                            <div className="d-flex gap-12 mt-4">
                                <a href="https://www.instagram.com/?hl=en" target=' _blank'>
                                    <div className="social-box d-flex justify-content-center align-items-center">
                                        <Instagram />
                                    </div>
                                </a>
                                <a href=" https://www.facebook.com/" target='_blank'>
                                    <div className="social-box d-flex justify-content-center align-items-center">
                                        <Facebook />
                                    </div>
                                </a>
                                <a href="https://in.indeed.com/" target='_blank'>
                                    <div className="social-box d-flex justify-content-center align-items-center">
                                        <Indeed />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3 d-lg-flex justify-content-center pt-4 pt-md-0 pt-lg-4 pt-xl-3">
                            <div>
                                <li className='font-inter fw-700 text-16 lh-25 color-white'>Menú principal</li>
                                <li className='mt-3'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Hogar</a></li>
                                <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Misión</a></li>
                                <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Tragamonedas</a></li>
                                <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Por qué elegirnos</a></li>
                                <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Ofertas</a></li>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-2 pt-4 pt-xl-3">
                            <li className='font-inter fw-700 text-16 lh-25 color-white'>Atención al cliente</li>
                            <li className='mt-3'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>¿Necesitas ayuda?</a></li>
                            <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>política de privacidad</a></li>
                            <li className='mt-12'><a href="" className=' font-inter fw-500 text-16 lh-25 color-white opacity-8'>Términos de servicios</a></li>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pt-4 pt-xl-3">
                            <li className='font-inter fw-700 text-16 lh-25 color-white'>Ponerse en contacto</li>
                            <div className="d-flex align-items-center gap-9 pt-3 cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.668 3.33301H3.33464C2.41797 3.33301 1.6763 4.08301 1.6763 4.99967L1.66797 14.9997C1.66797 15.9163 2.41797 16.6663 3.33464 16.6663H16.668C17.5846 16.6663 18.3346 15.9163 18.3346 14.9997V4.99967C18.3346 4.08301 17.5846 3.33301 16.668 3.33301ZM16.3346 6.87467L10.443 10.558C10.1763 10.7247 9.8263 10.7247 9.55964 10.558L3.66797 6.87467C3.58441 6.82777 3.51123 6.76439 3.45288 6.68839C3.39452 6.61238 3.35219 6.52532 3.32845 6.43248C3.30471 6.33964 3.30005 6.24295 3.31477 6.14826C3.32948 6.05357 3.36325 5.96285 3.41404 5.88159C3.46482 5.80033 3.53157 5.73022 3.61024 5.6755C3.68891 5.62079 3.77786 5.5826 3.87171 5.56326C3.96557 5.54391 4.06237 5.54381 4.15626 5.56296C4.25016 5.58212 4.33919 5.62012 4.41797 5.67467L10.0013 9.16634L15.5846 5.67467C15.6634 5.62012 15.7524 5.58212 15.8463 5.56296C15.9402 5.54381 16.037 5.54391 16.1309 5.56326C16.2247 5.5826 16.3137 5.62079 16.3924 5.6755C16.471 5.73022 16.5378 5.80033 16.5886 5.88159C16.6394 5.96285 16.6731 6.05357 16.6878 6.14826C16.7025 6.24295 16.6979 6.33964 16.6742 6.43248C16.6504 6.52532 16.6081 6.61238 16.5497 6.68839C16.4914 6.76439 16.4182 6.82777 16.3346 6.87467Z" fill="white" />
                                </svg>
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>juegosexclusivos@gmail.com</p>
                            </div>
                            <div className="d-flex align-items-center gap-9 pt-2 cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.2492 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.5001 13.5801 17.5 13.6833Z" fill="white" />
                                </svg>
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>(101)342-7873</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_line mt-40"></div>
                <p className=' font-inter fw-500 text-16 lh-25 color-white text-center opacity-50 mb-0 py-20'>© Juegos exclusivos - Todos los derechos reservados 2024</p>
                <div className="d-none d-xl-block position-absolute ellips-footer-position-bottom">
                    <img src={bottomellips} alt="bottomellips" />
                </div>
                <div className="d-none d-xl-block position-absolute ellips-footer-position-right">
                    <img src={rightellips} alt="rightellips" />
                </div>

            </footer>
        </>
    )
}

export default Footer