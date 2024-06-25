import React from 'react'
import "./future.css"

export default function Future({ theme }) {
    const h_color = !theme ? 'text-light_text_primary' : 'text-dark_text_primary';
    const item_color = !theme ? 'bg-light_surface_bg' : 'bg-dark_surface_bg';
    const text_color = !theme ? 'text-dark_text_inverse' : 'text-light_text_inverse';
    const box_shadow = !theme ? '10px 10px 10px -1px rgba(0, 0, 0, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)' : '10px 10px 10px -1px rgba(0, 0, 0, 0.16), -10px -10px 10px -1px rgba(0, 0, 0, 0.46)';

    return (
        <section className={`future Container`} id="Future">
            <h2 className={`future__title ${h_color}`}>What I&apos;m Doing</h2>
            <div className="future_container">
                <div className={`future_item ${item_color}`} style={{ "boxShadow": `${box_shadow}` }} data-aos="fade-up" data-aos-duration="900">
                    <h3 className={`item__title ${h_color}`}>Building Projects</h3>
                    <p className={`item__info ${text_color}`}>Experienced and passionate web developer skilled in crafting visually appealing
                        and user-friendly websites and applications using cutting-edge technologies.</p>
                </div>
                <div className={`future_item ${item_color}`} style={{ "boxShadow": `${box_shadow}` }} data-aos="fade-up" data-aos-duration="500">
                    <h3 className={`item__title ${h_color}`}>Web 3.0</h3>
                    <p className={`item__info ${text_color}`}>A driven learner constantly seeking to expand my own knowledge and skills in the
                        rapidly evolving world of Web 3.0 and decentralized technologies.</p>
                </div>
                <div className={`future_item ${item_color}`} style={{ "boxShadow": `${box_shadow}` }} data-aos="fade-up" data-aos-duration="900">
                    <h3 className={`item__title ${h_color}`}>Programmer</h3>
                    <p className={`item__info ${text_color}`}>A creative and analytical problem solver who leverages their extensive coding
                        knowledge to design elegant solutions for complex software problems.</p>
                </div>

            </div>
        </section>
    )
}
