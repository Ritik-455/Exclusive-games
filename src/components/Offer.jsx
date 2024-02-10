import React from 'react'
import cardimg from '../assets/images/PNG/silver-card-img.png'
import shadow from '../assets/images/PNG/silver-img-shadow.png'
import doubletick from '../assets/images/SVG/double-tick.svg'
import line from '../assets/images/PNG/button-line.png'
import dice from '../assets/images/PNG/dice.png'
import bendcard from '../assets/images/PNG/one-of-heart-bend.png'
import straightcard from '../assets/images/PNG/one-of-heart-strainght.png'
import play from '../assets/images/PNG/play-currency.png'
import playcard from '../assets/images/PNG/platinum-card-img.png'
import wheel from '../assets/images/PNG/wheel-of-spin.png'
import todo from '../assets/images/PNG/todos.png'
import happyhours from '../assets/images/PNG/happy-hours-img.png'
import innerellips from '../assets/images/PNG/3rd-card-inner-ellips.png'
import wheelellips from '../assets/images/PNG/wheel-inner-ellips.png'
import colorline from '../assets/images/PNG/color-line-btn.png'

function Offer() {
    return (
        <>
            <section className="bg-grey mt-neg-2 position-relative overflow-hidden" id="offer">
                <div className="container d-flex flex-column align-items-center pb-57">
                    <h6 className=' font-anton fw-400 text-48 lh-57 color-white text-center mb-0'>Nuestras ofertas</h6>
                    <p className=' font-inter fw-500 text-16 lh-25 color-white text-center color-white mb-0 mt-18'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                    <div className="silver-card pl-12 mt-60 pb-28">
                        <div className="row mt-lg-57">
                            <div className="col-12 col-lg-7 pt-22 d-lg-flex flex-column justify-content-evenly">
                                <img src={cardimg} alt="card-img" className='w-100 cursor-pointer position-relative z-2' />
                                <img src={shadow} alt="shadow" className='mix-blend-multiply mt-4 w-100' />
                            </div>
                            <div className="col-12 col-lg-5 pt-22 pt-lg-0">
                                <p className=' font-anton fw-400 lh-41 color-white text-32 mb-0'>Silver</p>
                                <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 mt-3 max-w-401'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                <p className=' font-anton fw-400 text-48 lh-57 color-white mt-32 mb-0'>$5000</p>
                                <div className="d-flex gap-8 align-items-baseline pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </div>
                                <div className="d-flex gap-8 align-items-baseline pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className="d-flex gap-8 align-items-baseline pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </div>
                                <div className="d-flex gap-8 align-items-baseline pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Aplicación para Android y Windows de regalo.</p>
                                </div>
                                <div className="d-flex gap-8 align-items-baseline pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Tiempo de creación 2 a 3 semanas</p>
                                </div>
                                <div className="position-relative pt-41">
                                    <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Comprar ahora</button>
                                    <div className="position-absolute-buynow"><img src={line} alt="btn-line" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="luxury-box bg-box-img mt-38 position-relative">
                        <div className="container d-flex flex-column align-items-center ">
                            <p className=' font-anton fw-400 lh-41 color-white text-32 mb-0'>Luxury</p>
                            <p className=' font-inter fw-500 text-16 lh-25 text-center color-white max-w-391 mb-0 pt-3 opacity-8'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                            <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0 mt-32'>$9000</p>
                            <div className="d-flex justify-content-center">
                                <div className="d-flex flex-column ">
                                    <div className="d-flex gap-8 align-items-baseline pt-3">
                                        <img src={doubletick} alt="doubletick" />
                                        <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 max-w-387 text-xl-center'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-baseline pt-3">
                                        <img src={doubletick} alt="doubletick" />
                                        <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Control de RTP (controlás qué porcentaje pagar)</p>
                                    </div>
                                    <div className="d-flex gap-8 align-items-baseline pt-3">
                                        <img src={doubletick} alt="doubletick" />
                                        <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 text-xl-center max-w-387'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                    </div>
                                    <div className="d-flex gap-3 align-items-baseline pt-3">
                                        <img src={doubletick} alt="doubletick" />
                                        <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Aplicación para Android y Windows de regalo.</p>
                                    </div>
                                    <div className="d-flex gap-2 gap-xl-5 align-items-baseline pt-3">
                                        <img src={doubletick} alt="doubletick" />
                                        <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 text-center max-w-387'>Tiempo de creación 2 a 3 semanas</p>
                                    </div>
                                    <div className=' d-flex justify-content-center'>
                                        <div className="position-relative">
                                            <button className=' font-inter color-black fw-700 text-16 lh-25 sec-btn mt-40'>Comprar ahora</button>
                                            <div className="position-absolute colorline-post">
                                                <img src={colorline} alt="colorline" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-block position-absolute dice-position">
                            <img src={dice} alt="dice" />
                        </div>
                        <div className="d-none d-lg-block position-absolute bend-card-position">
                            <img src={bendcard} alt="card" />
                        </div>
                        <div className="d-none d-lg-block position-absolute straight-card-position">
                            <img src={straightcard} alt="card" />
                        </div>
                        <div className="d-none d-lg-block position-absolute play-position">
                            <img src={play} alt="play" />
                        </div>
                    </div>
                    <div className="platinum-box mt-38">
                        <div className="row py-78">
                            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
                                <p className=' font-anton fw-400 lh-41 color-white text-32 mb-0'>Platinum</p>
                                <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8 pt-3'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                                <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0 mt-32'>Consultar precio</p>
                                <div className="d-flex gap-10 pt-3">
                                    <img src={doubletick} alt="doubletick" />
                                    <p className=' font-inter fw-500 text-16 lh-25 color-white mb-0 opacity-8'>Personalizable</p>
                                </div>
                                <div className="position-relative pt-41">
                                    <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Comprar ahora</button>
                                    <div className="position-absolute-buynow">
                                        <img src={line} alt="btn-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 mt-4 mt-lg-0">
                                <img src={playcard} alt="playcard-big-img" className='w-100 cursor-pointer position-relative z-2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-57">
                    <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0 text-center'>Ellos eligieron apostar con nosotros</p>
                    <div className="row pt-20 d-sm-flex justify-content-center justify-content-md-start">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="position-relative hover_layer cursor-pointer">
                                <img src={wheel} alt="casino" className='w-100' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Rcasinovip</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 mt-lg-0">
                            <div className="position-relative hover_layer cursor-pointer"><img src={todo} alt="todo" className='w-100' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Rcasinovip</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0 mt-lg-0">
                            <div className="position-relative hover_layer cursor-pointer"><img src={happyhours} alt="happyhours" className='w-100' />
                                <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                    <div className="position-relative">
                                        <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Rcasinovip</button>
                                        <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className='font-inter fw-600 text-16 lh-25 color-white text-center pt-38 mb-0 max-w-883'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                            Ahora, la próxima apuesta está en tus manos.
                            Elige ganar. Elige exclusive game.</p>
                    </div>
                </div>

                {/***************************************************** accordian-section ************************************/}
                <div className="container pb-57">
                    <p className=' font-anton fw-400 text-48 lh-57 color-white text-center text-uppercase'>Preguntas más frecuentes</p>
                    <div className="d-flex justify-content-center">
                        <div class="accordion accordion-flush pt-60 d-flex flex-column gap-32 max-w-970 w-100" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        ¿Cuáles son las opciones de juego disponibles en las versiones Silver, Luxury y Platinum?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingfour">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                                        ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
                                    </button>
                                </h2>
                                <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingfive">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                                        ¿Qué métodos de pago aceptan?
                                    </button>
                                </h2>
                                <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingsix">
                                    <button class="accordion-button collapsed font-anton fw-400 text-20 lh-26 color-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                                        ¿Puedo probar sus juegos antes de comprometerme?
                                    </button>
                                </h2>
                                <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body font-inter fw-500 text-16 lh-25 color-white opacity-8">En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute accordian-ellips d-none d-xl-block">
                    <div className="green-ellips"></div>
                </div>
                <div className="position-absolute card-outer-ellips d-none d-xl-block">
                    <div className="green-ellips"></div>
                </div>
                <div className="position-absolute card-top d-none d-xl-block">
                    <div className="green-ellips"></div>
                </div>
                <div className="position-absolute card-inner-ellips d-none d-xl-block">
                    <img src={innerellips} alt="innerellips" />
                </div>
                <div className="position-absolute wheel-inner-ellips d-none d-xl-block">
                    <img src={wheelellips} alt="wheelellips" />
                </div>
            </section>
        </>
    )
}

export default Offer