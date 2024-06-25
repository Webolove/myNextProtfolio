import React, { useState } from 'react'
import './timeliner.css'
import './Qualification.css'
import './Underline.css'
import './skills.css'
import { RiGraduationCapLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

export default function Qualification({ theme }) {
    const [activeTab, setActiveTab] = useState("Education");

    const h_and_title = !theme ? 'text-light_text_primary text-xl' : 'text-dark_text_primary text-xl';
    const timeline_icon_color = !theme ? 'bg-light_profile_bg' : 'bg-dark_profile_bg';
    const timeline_after_color = !theme ? 'after:bg-light_profile_bg' : 'after:bg-dark_profile_bg';
    const timeline_info_color = !theme ? 'bg-light_surface_bg' : 'bg-dark_surface_bg';
    const qualification_text_color = !theme ? 'text-black' : 'text-white';

    return (
        <section className={`qualification section`} id="Qualifications">
            <h2 className={`section__title ${h_and_title}`}>Qualifications</h2>
            <span className={`section__subtitle ${!theme ? 'text-light_text_secondary' : 'text-dark_text_secondary'}`}>My Journey</span>

            <div className="qualification__container ">
                <div className="qualification__tabs">
                    <div className={`qualification__button flex gap-1 place-items-center justify-between border border-[2px] border-transparent rounded-[12px] ${activeTab == "Education" ? 'active_tab' : 'Underline'} ${!theme ? 'text-light_text_secondary' : 'text-dark_text_secondary'} transition duration-200`} id="education" onClick={() => setActiveTab("Education")}>
                        <RiGraduationCapLine className='qualification__icon' />
                        <span>Education</span>
                    </div>

                    <div className={`qualification__button flex gap-1 place-items-center justify-between border border-[2px] border-transparent rounded-[12px] ${activeTab == "Work" ? 'active_tab' : 'Underline'} ${!theme ? 'text-light_text_secondary' : 'text-dark_text_secondary'} transition duration-200`} id="work" onClick={() => setActiveTab("Work")}>
                        <MdWorkOutline className='qualification__icon' />
                        <span>Work</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={`qualification__content ${activeTab == "Education" && 'qualification__active'}`} id="Education">
                        <div className={`timeline ${timeline_after_color}`} id="Achievements">
                            <div className="timeline_item">
                                <div className={`timeline_icon ${timeline_icon_color}`}>
                                    <div className="skill__circle"></div>
                                </div>
                                <div className={`timeline_info ${timeline_info_color}`}>
                                    <h3 className={`timeline_name ${h_and_title}`}>B.Tech</h3>
                                    <span className={`qualification__subtitle ${qualification_text_color}`}>CSE (AI)</span>
                                    <p className={`marks ${qualification_text_color}`}><b>Current CGPA : 9.44</b></p>
                                    <p className={`qualification__from ${qualification_text_color}`}>Institute of Enginnering <br />and Management, Kolkata.</p>
                                    <div className='inline-block'>
                                        <div className="qualification__calendar">
                                            <IoCalendarOutline className='inline-block' />
                                            <span>2021 - Present.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="timeline_item">
                                <div className={`timeline_icon ${timeline_icon_color}`}>
                                    <div className="skill__circle"></div>
                                </div>
                                <div className={`timeline_info ${timeline_info_color}`}>
                                    <h3 className={`timeline_name ${h_and_title}`}>Class 12&apos;th</h3>
                                    <p className={`marks ${qualification_text_color}`}><b>93.67 %</b></p>
                                    <p className={`qualification__from ${qualification_text_color}`}>Kendriya Vidyalaya<br />Saharsa.</p>

                                    <div className='inline-block'>
                                        <div className="qualification__calendar">
                                            <IoCalendarOutline className='inline-block' />
                                            <span>2018 - 2020.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline_item">
                                <div className={`timeline_icon ${timeline_icon_color}`}>
                                    <div className="skill__circle"></div>
                                </div>
                                <div className={`timeline_info ${timeline_info_color}`}>
                                    <h3 className={`timeline_name ${h_and_title}`}>Class 10&apos;th</h3>
                                    <p className={`marks ${qualification_text_color}`}><b>88 %</b></p>
                                    <p className={`qualification__from ${qualification_text_color}`}>Buddha Public School<br />Saharsa.</p>
                                    <div className='inline-block'>
                                        <div className="qualification__calendar">
                                            <IoCalendarOutline className='inline-block' />
                                            <span>2007 - 2018.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`qualification__content  ${activeTab == "Work" && 'qualification__active'}`} id="Work" >
                        <div className={`timeline ${timeline_after_color}`} id="Achievements">
                            <div className="timeline_item">
                                <div className={`timeline_icon ${timeline_icon_color}`}>
                                    <div className="skill__circle"></div>
                                </div>
                                <div className={`timeline_info ${timeline_info_color}`}>
                                    <h3 className={`timeline_name ${h_and_title}`}>Web Dev Co-lead</h3>
                                    <p className={`qualification__from ${qualification_text_color}`}>IEMCC<br />Kolkata.</p>
                                    <div className='inline-block'>
                                        <div className="qualification__calendar">
                                            <IoCalendarOutline className='inline-block' />
                                            <span>2022 - Present.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
