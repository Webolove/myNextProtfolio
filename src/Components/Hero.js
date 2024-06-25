import React from 'react'
import "./Hero_section.css"
import "./text_animation.css"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { RiGithubLine } from "react-icons/ri";

export default function Hero({ theme }) {

    const social_color = !theme ? 'text-light_text_primary' : 'text-dark_text_primary';

    return (
        <section className="Container" id="About">
            <div className="hero_items" id="hero-items">
                <div className="hero_item_left" id="hero-item-left">
                    <div className="hero_socials" id="hero-socials">
                        <Link href="https://www.github.com/webolove" target='_blank' className={` ${social_color}`}>
                            <RiGithubLine fontSize={32} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mudit-anand-533981220" target='_blank' className={`text-[29px] ${social_color}`}>
                            <SlSocialLinkedin />
                        </Link>
                        <Link href="https://twitter.com/MuditAnand2904" target='_blank' className={`text-[29px] ${social_color}`}>
                            <FiTwitter />
                        </Link>
                    </div>
                    <div className="hero_Info" id="hero-Info">
                        <h2 className={`hero_heading ${social_color} text-3xl`} id="hero_heading">
                            Hello, my name is&nbsp;
                            <span style={{ "color": "crimson" }} className="hero_name">
                                Mudit Anand.
                            </span>
                        </h2>

                        <div className="profession flex">
                            <span className={`text static_text ${!theme ? 'text-ligth_text_secondary' : 'text-dark_text_secondary'}`}>I&apos;m a &nbsp;</span>
                            <span className="text dynamic_text typing">
                                <Typewriter
                                    options={{
                                        strings: ["Web Designer.", "Problem Solver.", "Web Developer."],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 60
                                    }}
                                />
                            </span>
                        </div>

                        <p className="myAbout text-[19px]" id="my-About"
                            style={{ "width": "95%", "color": `${!theme ? 'var(--light_text_secondary)' : 'var(--dark_text_secondary)'}`, "textAlign": "justify" }}>
                            Welcome to my portfolio! I&apos;m glad to have you here. Explore my projects at your leisure, and feel free to reach me out. Thank you for visiting! 😊
                        </p>

                        <div className='mt-2 mb-2'>
                            <Link href="Resume.pdf" className="resume" download="">
                                <button className="button-30" role="button">
                                    <span>Download Resume</span>
                                    <HiOutlineDownload className='text-[#fcfcfd]' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hero_item_right" id="hero-item-right">
                    <div className="hero_profile " id="hero-profile">
                        <svg className={`hero_blob ${!theme ? 'fill-yellow-300' : 'fill-amber-300'}`} viewBox="0 0 200 187" >
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className="hero_blob-img" x="-50" y='-66' href="Gallery/myIMG.png" >
                                </image>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section >
    )
}
