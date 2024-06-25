import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import "./tech.css"

// Install Swiper modules

import { LiaReact } from "react-icons/lia";

export default function Tech_profile({ theme }) {
    const tech_content_shadow = !theme ? 'inset 13px 13px 13px -1px rgba(0, 0, 0, 0.16), inset -13px -13px 13px -1px rgba(255, 255, 255, 0.70)' : 'inset 13px 13px 13px -1px rgba(0, 0, 0, 0.16), inset -13px -13px 13px -1px rgba(0, 0, 0, 0.46)';
    const platform_shadow = !theme ? '10px 10px 10px -1px rgba(0, 0, 0, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)' : '10px 10px 10px -1px rgba(0, 0, 0, 0.26), -10px -10px 10px -1px rgba(0, 0, 0, 0.56)';
    const platform_bg = !theme ? 'bg-light_surface_bg' : 'bg-dark_surface_bg';

    let myProfile = [{
        imgSrc: '/Gallery/leetcode.png',
        imgAlt: 'LeetCode',
        title: 'LeetCode',
        href: 'https://leetcode.com/mudit_2904/',
        userName: 'mudit_2904'
    }, {
        imgSrc: '/Gallery/gfg-removebg-preview.png',
        imgAlt: 'GFG',
        title: 'GeeksForGeeks',
        href: 'https://auth.geeksforgeeks.org/user/muditanand2003',
        userName: 'muditanand2003'
    }, {
        imgSrc: '/Gallery/codechef.png',
        imgAlt: 'Codechef',
        title: 'Codechef',
        href: 'https://www.codechef.com/users/mudit_2904',
        userName: 'mudit_2904'
    }, {
        imgSrc: '/Gallery/codingNinjas-removebg-preview.png',
        imgAlt: 'CodingNinjas',
        title: 'CodingNinjas',
        href: 'https://www.codingninjas.com/codestudio/profile/60675205-213b-40e4-837f-e6def50b49eb',
        userName: 'Mudit Anand'
    }, {
        imgSrc: '/Gallery/HackerRank.png',
        imgAlt: 'HackerRank',
        title: 'HackerRank',
        href: 'https://www.hackerrank.com/anandmudit2904',
        userName: 'anandmudit2904'
    }]


    return (
        <section className="tech Container" id="tech" style={{ "marginBottom": "6rem" }}>
            <h2 className={`tech_title ${!theme ? 'text-light_text_primary' : 'text-dark_text_primary'}`}>Tech - Pr<LiaReact className='inline-block' />file</h2>
            <p className={`tech_desc ${!theme ? 'text-dark_text_inverse' : 'text-light_text_inverse'}`}>Me on Different Coding Platforms</p>


            <Swiper
                slidesPerView={3}
                spaceBetween={25}
                loop={true}
                freeMode={true}
                centeredSlides={true}
                effect="fade"
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    450: {
                        slidesPerView: 2,
                    },
                    950: {
                        slidesPerView: 3,
                    }
                }}
                modules={[Pagination, Autoplay]}
                className={`mySwiper tech_container tech_content`}
                style={{ "boxShadow": `${tech_content_shadow}` }}
            >

                {
                    myProfile.map((profile, index) =>
                        <SwiperSlide key={index} >
                            <div className={`alignPlatform ${platform_bg}`} style={{ "boxShadow": `${platform_shadow}` }}>
                                <div className="platform_icon">
                                    <Image width={100} height={100} src={`${profile.imgSrc}`} alt={`${profile.imgAlt}`} ></Image>
                                </div>
                                <div className="platform_info">
                                    <h3 className={`platform_name ${!theme ? 'text-light_text_primary' : 'text-dark_text_primary'}`}>{profile.title}</h3>
                                    <p className={`${!theme ? 'text-dark_text_inverse' : 'text-light_text_inverse'}`}>Username : </p>
                                    <div className="Profile-btn">
                                        <a href={`${profile.href}`} target="_blank">{profile.userName}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section >
    )
}
