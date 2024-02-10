import React from 'react'
import casinonight from '../assets/images/PNG/casino-night.png'
import triple7 from '../assets/images/PNG/777-img.png'
import penblub from '../assets/images/PNG/pen-blub.png'
import client from '../assets/images/PNG/Client.png'
import currency from '../assets/images/PNG/currency.png'
import sevenellips from '../assets/images/PNG/777-img-ellips.png'
import colorline from '../assets/images/PNG/color-line-btn.png'

function Casino() {
    return (
        <div>
            <div className=" position-relative" id="por">
                <div className='bg-change bg-img-white mt-neg-2 pb-55 pb-md-0'>
                    <div className="container pt-40">
                        <div className="row">
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-xl-center">
                                <div>
                                    <h5 className=' color-black fw-400 font-anton text-48 lh-57 mb-0'>Por qué elegirnos</h5>
                                    <p className=' font-inter fw-500 text-16 lh-25 color-black mt-3 mb-0 max-w-526'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                                    <div className="position-relative">
                                        <button className=' font-inter color-black fw-700 text-16 lh-25 sec-btn mt-40'>Aprende más</button>
                                        <div className="position-absolute colorline-post2">
                                            <img src={colorline} alt="colorline" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                                <img src={casinonight} alt="casinonight" className='w_100 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-grey mt-neg-2">
                    <div className="container">
                        <div className="row py-55">
                            <div className="col-12 col-md-6 d-flex justify-content-center">
                                <img src={triple7} alt="777-img" className='w_100 max-w-558 fit-contain cursor-pointer' />
                            </div>
                            <div className="col-12 col-md-6 mt-5 mt-lg-0">
                                <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0'>Más razones para elegirnos</p>
                                <div className="mas-box py-24 pl-56 mt-30">
                                    <div className="d-flex gap-37">
                                        <div className="mas-circle d-flex justify-content-center align-items-center">
                                            <img src={penblub} alt="penblub" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className=' font-anton fw-400 text-32 lh-41 mb-0 color-white mb-0'>200</p>
                                            <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0'>Páginas creadas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mas-box py-24 pl-56 mt-4">
                                    <div className="d-flex gap-37">
                                        <div className="mas-circle d-flex justify-content-center align-items-center">
                                            <img src={client} alt="penblub" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className=' font-anton fw-400 text-32 lh-41 mb-0 color-white mb-0'>98%</p>
                                            <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0'>Clientes Satisfechas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mas-box py-24 pl-56 mt-4">
                                    <div className="d-flex gap-37">
                                        <div className="mas-circle d-flex justify-content-center align-items-center">
                                            <img src={currency} alt="currency" />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className=' font-anton fw-400 text-32 lh-41 mb-0 color-white mb-0'>200</p>
                                            <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0'>Divisas Disponibles</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute seven-ellips-pos d-none d-xl-block">
                    <img src={sevenellips} alt="sevenellips" />
                </div>
                <div className="position-absolute seven-top-ellips d-none d-xl-block">
                    <div className="green-ellips"></div>
                </div>
            </div>
        </div>
    )
}

export default Casino