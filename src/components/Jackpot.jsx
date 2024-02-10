import React from 'react'
import jack from '../assets/images/PNG/jackpot-col-6.png'
import tick from '../assets/images/SVG/double-tick.svg'
import ezugi from '../assets/images/PNG/Ezugi.png'
import roulette from '../assets/images/PNG/roulette.png'
import betting from '../assets/images/PNG/live-betting.png'
import line from '../assets/images/PNG/button-line.png'
function Jackpot() {
    return (
        <div>
            <section className="bg-jackpot-img bg-grey mt-neg-2 position-relative overflow-hidden">
                <div className="container pb-100">
                    <div className="row pt-65">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img src={jack} alt="jackpot" className=' w_100 cursor-pointer' />
                        </div>
                        <div className="col-12 col-lg-6 pt-33">
                            <h2 className=' font-anton fw-400 text-48 lh-57 color-white mb-0'>Potenciando sus elecciones</h2>
                            <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 pt-3'>Con Exclusive Game lo mejor está de tu lado.</p>
                            <div className="d-flex gap-2 align-items-center pt-25">
                                <img src={tick} alt="tick" />
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>Tecnología HTML5</p>
                            </div>
                            <div className="d-flex gap-2 align-items-center pt-12">
                                <img src={tick} alt="tick" />
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>Versión PC y móvil</p>
                            </div>
                            <div className="d-flex gap-2 align-items-center pt-12">
                                <img src={tick} alt="tick" />
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className="d-flex gap-2 align-items-baseline pt-12">
                                <img src={tick} alt="tick" />
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>Bonos editables, happy hours, Jackpots, códigos <span className='d-md-block'> promocionales.</span></p>
                            </div>
                            <div className="d-flex gap-2 align-items-center pt-12">
                                <img src={tick} alt="tick" />
                                <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0'>Aplicación para android y windows de regalo.</p>
                            </div>
                            <p className=' font-inter fw-500 text-16 lh-25 color-white opacity-8 mb-0 pt-4'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-46">
                        <div className="lanza-box d-flex justify-content-center position-relative">
                            <p className='color-white font-anton fw-400 text-48 lh-57 mb-0 max-w-520 text-center'>lanza tu propia plataforma en sólo 2 semanas</p>
                        </div>
                    </div>
                    <p className=' font-anton fw-400 text-48 lh-57 text-center color-white mb-0 pt-46'>Juegos en vivo</p>
                    <div className="row pt-20">
                        <div className="col-12 col-md-4">
                            <div className="position-relative hover_layer cursor-pointer">
                                <img src={ezugi} alt="ezugi" className='w-100' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Reproducir ahora`</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4 mt-md-0">
                            <div className="position-relative hover_layer cursor-pointer">
                                <img src={roulette} alt="roulette" className='w-100 border-radius' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Reproducir ahora`</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4 mt-md-0">
                            <div className="position-relative hover_layer cursor-pointer">
                                <img src={betting} alt="betting" className='w-100' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Reproducir ahora`</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" position-absolute  betting-pos d-none d-xl-block">
                    <div className="green-ellips"></div>
                </div>

            </section>
        </div>
    )
}

export default Jackpot