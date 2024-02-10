import React from 'react'
import poker from '../assets/images/PNG/poker-img.png'
import aviator from '../assets/images/PNG/Aviation.png'
import blub from '../assets/images/SVG/blub-img.svg'
import protect from '../assets/images/SVG/protect-img.svg'
import mix from '../assets/images/SVG/mix-img.svg'
import arrow1 from '../assets/images/SVG/arrow-1.svg'
import arrow2 from '../assets/images/SVG/arrow-2.svg'
import jetx from '../assets/images/PNG/jetx.png'
import joker from '../assets/images/PNG/joker.png'
import teddy from '../assets/images/PNG/teddy.png'
import lucky from '../assets/images/PNG/lucky.png'
import delight from '../assets/images/PNG/delight.png'
import casino from '../assets/images/PNG/casino.png'
import line from '../assets/images/PNG/button-line.png'
import colorline from '../assets/images/PNG/color-line-btn.png'

function Nuestra() {
    return (
        <div>
            <div className="bg-grey mt-neg-2 position-relative overflow-hidden" id="mission">
                <div className="container pb-100 pt-74">
                    <div className="row">
                        <div className="col-12 col-md-6 d-xxl-flex justify-content-center">
                            <div>
                                <img src={poker} alt="poker-img" className='cursor-pointer w-100 max-w-538 position-relative z-2' />
                                <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0 pt-30'>Nuestra Visión</p>
                                <p className='color-white opacity-8 font-inter fw-500 text-16 lh-25 mb-0 max-w-444 mt-3'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                                <p className=' font-inter fw-700 text-16 lh-25 color-green mb-0 mt-4'>Aprende más ⟶</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column-reverse flex-md-column">
                            <div className="flex flex-column-reverse flex-md-column">
                                <p className=' font-anton fw-400 text-48 lh-57 color-white mb-0 pt-4'>Nuestra Visión</p>
                                <p className='color-white opacity-8 font-inter fw-500 text-16 lh-25 mb-0 max-w-444 mt-3'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                <p className=' font-inter fw-700 text-16 lh-25 color-green mb-0 mt-4'>Aprende más ⟶</p>
                            </div>
                            <img src={aviator} alt="aviation-img" className='pt-30 cursor-pointer w-100 max-w-538 position-relative z-2' />
                        </div>
                    </div>
                    <div className="green-ellips position-absolute1 d-none d-xl-block"></div>
                    <div className="green-ellips position-absolute2 d-none d-xl-block"></div>
                    <div className="green-ellips2 position-absolute3 d-none d-xl-block"></div>
                </div>
                <div className="bg-white-layer bg-change  mt-neg-2">
                    <div className="container position-relative">
                        <p className=' font-anton fw-400 text-48 lh-57 color-black mb-0 pt-70 text-center'>Nuestros Atributos de Marca</p>
                        <div className="row pt-32 ">
                            <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                                <div className="max-w-263 d-flex flex-column align-items-center">
                                    <div className="nuestros-circle d-flex justify-content-center align-items-center">
                                        <img src={blub} alt="blub" />
                                    </div>
                                    <p className='font-anton fw-400 text-20 color-black lh-26 mb-0 mt-3'>Inteligencia</p>
                                    <p className=' font-inter fw-500 text-16 lh-25 color-black text-center mb-0 max-w-263 mt-10'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-sm-0 mt-md-0 d-flex justify-content-center">
                                <div className="max-w-263 d-flex flex-column align-items-center">
                                    <div className="nuestros-circle d-flex justify-content-center align-items-center">
                                        <img src={protect} alt="protect" />
                                    </div>
                                    <p className='font-anton fw-400 text-20 color-black lh-26 mb-0 mt-3'>Proactividad</p>
                                    <p className=' font-inter fw-500 text-16 lh-25 color-black text-center mb-0 max-w-263 mt-10'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mt-5 mt-lg-0 d-flex justify-content-center">
                                <div className="max-w-263 d-flex flex-column align-items-center">
                                    <div className="nuestros-circle d-flex justify-content-center align-items-center">
                                        <img src={mix} alt="mix" />
                                    </div>
                                    <p className='font-anton fw-400 text-20 color-black lh-26 mb-0 mt-3'>Innovación</p>
                                    <p className=' font-inter fw-500 text-16 lh-25 color-black text-center mb-0 max-w-263 mt-10'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute4">
                            <img src={arrow1} alt="arrow1" className=' arrow-width d-none d-lg-block' />
                        </div>
                        <div className="position-absolute5">
                            <img src={arrow2} alt="arrow2" className=' arrow-width d-none d-lg-block' />
                        </div>
                    </div>
                    <div className="container pt-65 pb-50" id="slots">
                        <h3 className=' font-anton fw-400 text-48 lh-57 text-center color-black mb-0'>Slots</h3>
                        <div className="d-flex justify-content-center">
                            <p className=' font-inter fw-500 text-16 lh-25 color-black mb-0 text-center opacity-8 max-w-904 mt-3 '>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                        </div>
                        <div className="row pt-32">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className=" position-relative hover_layer w-100 cursor-pointer ">
                                    <img src={jetx} alt="jetx-img" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line "><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-sm-0">
                                <div className="position-relative hover_layer  w-100 cursor-pointer  ">
                                    <img src={joker} alt="joker" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-0">
                                <div className="position-relative hover_layer cursor-pointer "><img src={teddy} alt="teddy" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-4">
                                <div className="position-relative hover_layer cursor-pointer "><img src={lucky} alt="lucky" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-4">
                                <div className="position-relative hover_layer cursor-pointer "><img src={delight} alt="delight" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line "><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-4">
                                <div className="position-relative hover_layer cursor-pointer "><img src={casino} alt="casino" className='w-100' />
                                    <div className="layer_img d-flex justify-content-center align-items-center position-absolute layer_position">
                                        <div className="position-relative">
                                            <button className=' font-inter fw-700 color-white text-16 lh-25 nav-btn'>Jugar</button>
                                            <div className="position-absolute-line"><img src={line} alt="btn-line" /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="position-relative">
                                <button className=' font-inter color-black fw-700 text-16 lh-25 sec-btn mt-40'>Mostrar más</button>
                                <div className="position-absolute colorline-post">
                                    <img src={colorline} alt="colorline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nuestra