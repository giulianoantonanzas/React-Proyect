import React from 'react'
import './Style.scss'

const Contact = () => {
    return (
        <div className="section5" id="contact">
            <div className="content-s5">
                <div className="form-s5 container">
                    <div className="text1-s5">
                        <p>Get in touch <br></br>
                <span>
                                We are hiring!
                </span>
                        </p>
                    </div>

                    <form action="">
                        <div className="form-group row">
                            <input type="text" className="form-control" id="inputName" placeholder="Name" />
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            <input type="tel" className="form-control" id="inputPhone" placeholder="Phone" />
                            <textarea className="form-control" id="inputMessage" placeholder="Message"></textarea>
                        </div>
                        <button type="button" className="btn-read-more rounded-pill"> Send </button>
                    </form>
                </div>


                <div className="img-derecha-s5">
                    <img src="images/contact-image.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Contact