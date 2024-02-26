import React from 'react'
import '../service/service.css'
import goal from '../../assets/images/goal__img.png'

const Service = () => {
  return (
    <>
        <section id="goal">
        <div class="container">
            <div class="goal_wrapper">
                <div class="goal_image">
                    <picture>
                        <img src={goal} alt="not found"/>
                    </picture>
                </div>
                <div class="goal_content goalmessi">
                    <h2 class="h2_heading ">Join with any business tasks and any goals</h2>
                    <p class="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                    <a href="#" class="commonbtn">sign up</a>
                </div>
            </div>
        </div>
        </section>
        <section id="more">
        <div class="container">
            <div class="more_button_wrapper">
                <button class="button_item active">Artificial Intelligence </button>
                <button class="button_item">Header Builder </button>
                <button class="button_item">Safe and Private </button>
                <button class="button_item">Mobility Solutions </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service