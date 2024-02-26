import React from 'react'
import "../home/home.css"
import Img from "../../assets/images/banner_image.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"
import logo6 from "../../assets/images/logo6.png"


const Home = () => {
  return (
    <>
    <section id="banner">
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_content">
                    <h1>Professional task manager tool to grow </h1>
                    <p className="paragraph effect">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                    <form action="">
                        <input type="text" placeholder="Join with us using your gmail address"/>
                        <button className="commonbtn">Sign up</button>
                    </form>
                </div>
                <div className="banner_image">
                    <picture>
                        <img src={Img} alt="not found"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>

    {/* =====logo section start here=== */}
    <section id="logo">
        <div class="container">
            <div class="logo_wrapper">
                <div class="logo_item">
                    <picture>
                        <img src={logo1} alt="not found"/>
                    </picture>
                </div>
                <div class="logo_item">
                    <picture>
                        <img src={logo2} alt="not found"/>
                    </picture>
                </div>
                <div class="logo_item">
                    <picture>
                        <img src={logo3} alt="not found"/>
                    </picture>
                </div>
                <div class="logo_item">
                    <picture>
                        <img src={logo4} alt="not found"/>
                    </picture>
                </div>
                <div class="logo_item">
                    <picture>
                        <img src={logo5} alt="not found"/>
                    </picture>
                </div>
                <div class="logo_item">
                    <picture>
                        <img src={logo6} alt="not found"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home