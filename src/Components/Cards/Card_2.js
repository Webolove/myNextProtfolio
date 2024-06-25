import Link from 'next/link';
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import "../projects.css"
import Image from 'next/image';

export default function Card_2({ theme, title, desc, href, github, imgSrc, imgAlt }) {
    const h_col = 'text-light_text_primary';
    const text_color = !theme ? 'text-dark_text_inverse' : 'text-light_text_inverse';
    return (
        <div className='w-[250px] h-[370px] custom-sm3:h-fit flex flex-col rounded-xl overflow-hidden card_2_box transition transition-all duration-200' style={{ "backgroundImage": `${!theme ? "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)" : "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)"}` }} data-aos="fade-up">
            <div className='w-full h-[140px]'>
                <Image src={`${imgSrc}`} width={100} height={100} className='w-full h-full' alt={`${imgAlt}`} ></Image>
            </div>
            <div className='p-2 custom-sm3:gap-1 flex flex-col content-between justify-between h-full'>
                <div>
                    <h2 className={`${h_col}`}>{title}</h2>
                    <p className={`${text_color} text-sm `} style={{ "fontFamily": "monospace" }}>{desc}</p>
                </div>
                <div className='flex gap-2 w-full place-items-start'>
                    {github != "" && <Link href={`${github}`} target="_blank">
                        <div className='w-[40px] h-[40px] overflow-hidden rounded-full border border-2 border-gray-700 flex place-items-center justify-center transition transition-all duration-200 hover:border-white'>
                            <FiGithub fontSize={19} className={`inline-block ${text_color}`} />
                        </div>
                    </Link>}
                    {href != "" && <Link href={`${href}`} target="_blank">
                        <div className='w-[40px] h-[40px] overflow-hidden rounded-full border border-2 border-gray-700 flex place-items-center justify-center transition transition-all duration-200 hover:border-white'>
                            <IoIosLink fontSize={19} className={`inline-block ${text_color}`} />
                        </div>
                    </Link>}
                </div>
            </div>
        </div>
    )
}
