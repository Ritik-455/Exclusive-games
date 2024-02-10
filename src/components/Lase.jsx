import React from 'react'
import colorline from '../assets/images/PNG/color-line-btn.png'

function Lase() {
    return (
        <div>
            <section className=' bg-grey mt-neg-2'>
                <div className="container d-flex justify-content-center pb-57">
                    <div className="lase-box d-flex flex-column align-items-center justify-content-center">
                        <h4 className=' font-anton fw-400 text-32 lh-41 color-white mb-0 text-center'>Lanza tu propia plataforma en sólo 2 semanas</h4>
                        <div className="position-relative">
                            <button className=' font-inter color-black fw-700 text-16 lh-25 sec-btn mt-40'>Leer más</button>
                            <div className="position-absolute colorline-post">
                                <img src={colorline} alt="colorline" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lase