import React from 'react'
import '../about/about.css'

const About = () => {
  return (
    <>
      <section id="tool">
        <div className="container">
            <div className="tool_heading">
                <h2 className="h2_heading">The best solutions in one tool</h2>
                <p className="paragraph effect">
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, , 
                </p>
            </div>
            <div className="tool_menu">
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h4>Set Daily Alarms</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <h4>Advanced Search</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-brands fa-telegram"></i>
                        </div>
                        <h4>Share Blog Posts</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-solid fa-book"></i>
                        </div>
                        <h4>Archive Content</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-solid fa-stroopwafel"></i>
                        </div>
                        <h4>Secure Checkout</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="tool_menu_item">
                    <div className="tool_menu_icon">
                        <div className="tool_icon_box">
                            <i className="fa-solid fa-chess-rook"></i>
                        </div>
                        <h4>Faster Response Time</h4>
                    </div>
                    <div className="tool_menu_cont">
                        <p className="paragraph">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About