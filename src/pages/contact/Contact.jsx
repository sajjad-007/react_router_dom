import React from 'react'
import '../contact/contact.css'
import more from '../../assets/images/more_img.png'

const Contact = () => {
  return (
    <>
        <section id="more">
        <div class="container">
            <div class="more_wrapper">
                <div class="more_image">
                    <picture>
                        <img src={more} alt="not found"/>
                    </picture>
                </div>
                <div class="more_content goalmessi">
                    <h2 class="h2_heading">No more messy distribution lists.</h2>
                    <p class="paragraph">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos..</p>
                    <a href="#" class="commonbtn">get started</a>
                </div>
            </div>
        </div>
        </section>

        <section id="plan">
        <div class="container">
            <div class="plan_heading">
                <h2 class="h2_heading">Build the right plan for your team.</h2>
                <div class="plan_swap">
                    <h4>monthly</h4>
                    <div class="paln_switch_swap"></div>
                    <h4>yearly</h4>
                </div>
            </div>
            <div class="plan_item">
                <div class="plan_item_box">
                    <h4>Intro</h4>
                   <div class="plan_package">
                    <ul class="plan_package_name">
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Hosting Space</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Emails</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Pricing Feature</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Bonus Plugins</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Exclusive Support</span>
                        </li>
                    </ul>
                    <ul class="plan_package_value">
                        <li>
                            <p>300GB</p>
                        </li>
                        <li>
                            <p>Not Avai.</p>
                        </li>
                        <li>
                            <p>Unlimited</p>
                        </li>
                        <li>
                            <p>Not Avai.</p>
                        </li>
                        <li>
                            <p>Not Avai.</p>
                        </li>
                    </ul>
                    </div>
                    <div class="plan_btn">
                        <a href="#" class="commonbtn">get started</a>
                    </div>
                </div>
                <div class="plan_item_box">
                    <h4>pro</h4>
                   <div class="plan_package">
                    <ul class="plan_package_name">
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Hosting Space</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Emails</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Pricing Feature</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Bonus Plugins</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Exclusive Support</span>
                        </li>
                    </ul>
                    <ul class="plan_package_value">
                        <li>
                            <p>700GB</p>
                        </li>
                        <li>
                            <p>Unlimited</p>
                        </li>
                        <li>
                            <p>Available</p>
                        </li>
                        <li>
                            <p>included</p>
                        </li>
                        <li>
                            <p>Yesß</p>
                        </li>
                    </ul>
                    </div>
                    <div class="plan_btn">
                        <a href="#" class="commonbtn">get started</a>
                    </div>
                </div>
                <div class="plan_item_box">
                    <h4>Exclusive</h4>
                   <div class="plan_package">
                    <ul class="plan_package_name">
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Hosting Space</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Emails</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Pricing Feature</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Bonus Plugins</span>
                        </li>
                        <li>
                            <i class="fa-regular fa-square-check"></i><span>Exclusive Support</span>
                        </li>
                    </ul>
                    <ul class="plan_package_value">
                        <li>
                            <p>900GB</p>
                        </li>
                        <li>
                            <p>Not Avai.</p>
                        </li>
                        <li>
                            <p>Unlimited</p>
                        </li>
                        <li>
                            <p>Available</p>
                        </li>
                        <li>
                            <p>Available</p>
                        </li>
                    </ul>
                    </div>
                    <div class="plan_btn">
                        <a href="#" class="commonbtn">get started</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Contact