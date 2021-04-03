import './Style.scss'
import logo from '../../assets/images/top-logo.svg'



const Navbar = () => {

    const displayMenu= () =>{
        let button= document.getElementsByClassName("mobile-menu")
        button[0].classList.toggle("change");
        let x = document.getElementById("nav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }


    window.onscroll = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("nav").style.marginBottom = "-8px";
            document.getElementById("nav").style.marginTop = "-8px";
            document.getElementById("nav").style.transition = "0.4s";
            document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0.212)";
        } else {
            document.getElementById("nav").style.margin = "0px 0px";
            document.getElementById("nav").style.transition = "0.4s";
            document.getElementById("nav").style.backgroundColor = "transparent";
        }
    }


    return (
        <header>
            <nav className="nav" id="nav">
                <ul className="nav-conteiner">
                    <li className="nav-logo"><a href="#home"><img src={logo} alt='logo 25Watts'/></a></li>
                    <div class="mobile-menu" onClick={()=>displayMenu()}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    <div className="navLinks" id="navLinks">
                        <li className="nav-element"><a href="#home">Home</a></li>
                        <li className="nav-element"><a href="#about">About</a></li>
                        <li className="nav-element"><a href="#product">Products</a></li>
                        <li className="nav-element"><a href="#services">Services</a></li>
                        <li className="nav-element"><a href="#contact">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar