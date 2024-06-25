import Link from 'next/link'
import React, { useState } from 'react'
import { GoPerson, GoProject, GoPaperAirplane } from "react-icons/go";
import { MdOutlineWorkOutline, MdOutlineWbSunny } from "react-icons/md";
// import { GiAchievement } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";


import "./nav_section.css"
import "./Underline.css"

export default function Navigation({ theme, setTheme, activeNav, setActiveNav }) {
    const [open, setOpen] = useState(false);

    const nav_nav_menu_sm_color = !theme ? 'custom-sm:bg-light_text_inverse' : 'custom-sm:bg-dark_text_inverse';
    const nav_link_color = (ActiveTab) => {
        return `${!theme ? (activeNav == ActiveTab ? 'text-dark_text_inverse' : 'text-light_text_secondary') : (activeNav == ActiveTab ? 'text-light_text_inverse' : 'text-dark_text_secondary')} ${!theme ? 'after:bg-light_text_secondary hover:text-dark_text_inverse' : 'after:bg-dark_text_secondary hover:text-light_text_inverse'}`
    }
    const nav_open_close_color = !theme ? 'text-light_text_primary hover:text-dark_text_inverse' : 'text-dark_text_primary hover:text-light_text_inverse';

    return (
        <header className='header' id="header">
            <div className={`rmvBG ${open && 'goFullScreen'}`} id="rmvBg" onClick={() => setOpen(false)}></div>
            <nav className={`nav container ${nav_nav_menu_sm_color}`}>
                <a href="#hero" className={`text-[35px] custom-sm:text-[22px] font-semibold ${!theme ? 'text-light_text_primary' : 'text-dark_text_primary'}`}>Mudit</a>

                <div className={`nav__menu ${open && 'show-menu'} ${nav_nav_menu_sm_color}`} id="nav-menu">
                    <ul className="nav__list grid gap-6">
                        <li className="nav__item">
                            <Link href="#About" className={`cursor-pointer nav__link Underline ${nav_link_color("About")}`} onClick={() => { setOpen(false); setActiveNav("About") }}>
                                <GoPerson className="nav__icon" />About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="#Projects" className={`cursor-pointer nav__link Underline ${nav_link_color("Projects")}`} onClick={() => { setOpen(false); setActiveNav("Projects") }}>
                                <GoProject className="nav__icon" />Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href='#skills' className={`cursor-pointer nav__link Underline ${nav_link_color("Skills")}`} onClick={() => { setOpen(false); setActiveNav("Skills") }}>
                                <MdOutlineWorkOutline className="nav__icon" />Skills
                            </Link>
                        </li>
                        {/* <li className="nav__item">
                            <Link href="#Achievements" className={`cursor-pointer nav__link Underline ${nav_link_color("Achievements")}`} onClick={() => { setOpen(false); setActiveNav("Achievements") }}>
                                <GiAchievement className="nav__icon" />Achievements
                            </Link>
                        </li> */}
                        <li className="nav__item">
                            <Link href="#Contact" className={`cursor-pointer nav__link Underline ${nav_link_color("Contact")}`} onClick={() => { setOpen(false); setActiveNav("Contact") }}>
                                <GoPaperAirplane className="nav__icon" />Contact-me
                            </Link>
                        </li>
                    </ul>
                    <IoIosCloseCircleOutline className={`nav__icon nav__close ${nav_open_close_color} transition duration-200 ease-in-out`} id="nav-close" onClick={() => setOpen(false)} />
                </div>

                <div className="specialBox" >
                    <div onClick={() => setTheme(!theme)} className={`w-[21px] h-[21px] cursor-pointer flex place-items-center
                         ${!theme ? 'text-dark_text_inverse' : 'text-light_text_inverse'} `}>
                        {theme ? <MdOutlineWbSunny fontSize={19} /> : <FaRegMoon fontSize={16} />}
                    </div>
                    <div className="Hamburger">
                        <div className={`nav__Open ${nav_open_close_color} transition duration-200 ease-in-out text-[25px]`} id="nav-Open" onClick={() => setOpen(true)}>
                            <GrAppsRounded />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
