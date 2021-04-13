import React, { useEffect } from 'react'
import './Style.scss'

const Services = () => {
    const accordion = React.createRef()

    useEffect(
        () => {
            let acc = accordion.current.children;

            //recorro todos los botones y les agrego un evento, que al hacer click agrege una clase a los bloques que nos servira para mostrar
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    //le agrego la clase "active" al boton que oprimo.
                    this.children[0].classList.toggle("active")
                    let panel = this.children[1]
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        }
    )



    return (
        <div className="section4" id="services">
            <div className="content-s4">
                <div ref={accordion} className="container-accordion">
                    <div className="item">
                        <button className="accordion">Section 1</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="item">
                        <button className="accordion">Section 2</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="item">
                        <button className="accordion">Section 3</button>
                        <div className="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services