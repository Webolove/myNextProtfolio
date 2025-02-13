import React, { useState } from 'react'
import "./contact.css"
import { PiPaperPlaneRight } from "react-icons/pi";
import { MdOutlineLocationOn, MdCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import Link from 'next/link';
import { firestore } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function Contact({ theme }) {
    const [sending, setSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '', number: '', email: '', message: ''
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            let data = { ...formData, Service: service, Date: new Date().toLocaleString() }
            const msgRef = doc(firestore, "messages", formData.email);
            await setDoc(msgRef, data);
            toast.success("Thanks for reaching out! 😊")
        } catch (e) {
            toast.error("Oops !! Looks like an error occured. 🥹")
        }
        setSending(false);
    }

    const [service, setService] = useState("Full-stack");
    const wrapper_col = !theme ? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' : '10px 10px 10px -1px rgba(0, 0, 0, 0.16), -10px -10px 10px -1px rgba(0, 0, 0, 0.46)';

    const service_border = !theme ? 'border-light_border_color' : 'border-dark_border_color';
    const active_service_color = !theme ? '3px 3px 12px orange' : "3px 3px 12px purple";

    const h_color = !theme ? 'text-light_text_primary' : 'text-dark_text_primary';
    const text_color = !theme ? 'text-dark_text_inverse' : 'text-light_text_inverse';

    const bg_image = !theme ? `bg-gradient-to-br from-[#dfe9f3] to-[#ffffff]` : 'bg-gradient-to-tl from-[#09203f] to-[#537895]';

    return (
        <section className="Container contact" id="Contact" data-aos="zoom-in-up">
            <div className="contact_info">
                <h1 className={`contact_title ${h_color}`}>Get in touch !!</h1>
                <p className={`contact_desc ${text_color}`}>Contact me for increasing your online presence.</p>
            </div>
            <div className="contact_details">
                <div className={`contact_type ${text_color}`}>
                    <div>

                        <MdOutlineLocationOn className='contact_icon' />
                    </div>
                    <span className='mt-[19px] custom-sm2:mt-0'>Bihar, India</span>
                </div>
                <div className={`contact_type ${text_color}`}>
                    <div>

                        <MdCall className="contact_icon" />
                    </div>
                    <span className='mt-[19px] custom-sm2:mt-0'>+91-8920-432242</span>
                </div>
                <Link href="mailto:muditanand2003@gmail.com" className={`contact_type ${text_color}`}>
                    <div>
                        <IoMailOutline className="contact_icon" />
                    </div>
                    <span className='mt-[19px] custom-sm2:mt-0'>muditanand2003
                        <br />@gmail.com</span>
                </Link>
            </div>
            <div className={`contact_wrapper ${bg_image}`} style={{ "boxShadow": `${wrapper_col}` }}>
                <div className="contact_upbox">
                    <span className={`text-light_text_primary text-3xl ${text_color}`}>Contact</span>
                    <div className="form">
                        <form style={{ "position": "relative", "zIndex": "10" }} onSubmit={submitHandler}>
                            <div className="form_data">
                                <div className="left">
                                    <div className="form_group" id="Name">
                                        <label htmlFor="Name" className={`text-dark_text_inverse ${text_color}`}>Your name</label>
                                        <input type="text" name="name" placeholder="Name.." value={formData.name} id='name' onChange={changeHandler} required />
                                    </div>
                                    <div className="form_group" id="Number">
                                        <label htmlFor="phone" className={`text-dark_text_inverse ${text_color}`}>Phone number</label>
                                        <input type="text" name="number" placeholder="Phone No..." value={formData.number} id='number' onChange={changeHandler} required />
                                    </div>
                                    <div className="form_group" id="Email">
                                        <label htmlFor="mail" className={`text-dark_text_inverse ${text_color}`}>E-mail</label>
                                        <input type="text" name="email" placeholder="E-mail Id.." value={formData.email} id='email' onChange={changeHandler} required />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="form_group">
                                        <label htmlFor="message" className={`text-dark_text_inverse ${text_color}`}>Message</label>
                                        <textarea name="message" id="message" placeholder="Message.." cols="30" rows="4" value={formData.message} onChange={changeHandler}
                                            required></textarea>
                                    </div>
                                    <span className={`service_title text-dark_text_inverse ${text_color}`}>Service</span>
                                    <div className="service_type" style={{ "marginTop": "13px" }}>
                                        <div className={`SERVICE border border-1 ${service_border} ${service == "Front-end" && 'activeService'}`} id="type1" onClick={() => setService("Front-end")} style={{ "boxShadow": `${service == "Front-end" ? active_service_color : ""}` }}>
                                            Front-end
                                        </div>
                                        <div className={`SERVICE border border-1 ${service_border} ${service == "Back-end" && 'activeService'}`} id="type2" onClick={() => setService("Back-end")} style={{ "boxShadow": `${service == "Back-end" ? active_service_color : ""}` }}>
                                            Back-end
                                        </div>
                                        <div className={`SERVICE border border-1 ${service_border} ${service == "Full-stack" && 'activeService'}`} id="type3" onClick={() => setService("Full-stack")} style={{ "boxShadow": `${service == "Full-stack" ? active_service_color : ""}` }}>
                                            Full-stack
                                        </div>
                                        <div className={`SERVICE border border-1 ${service_border} ${service == "Others" && 'activeService'}`} id="type4" onClick={() => setService("Others")} style={{ "boxShadow": `${service == "Others" ? active_service_color : ""}` }}>
                                            Others
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="submit" style={{ "width": "100%", "marginTop": "38px" }}>
                                <button type="submit" className="submit_btn" id="Send">
                                    {sending ? 'Sending..' : 'Send'}
                                    <PiPaperPlaneRight className='sending inline-block' style={{ "marginLeft": "10px" }} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact_downbox">
                    <div className="blob_Box">
                        <div className="blob1 blob"></div>
                        <div className="blob2 blob"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
