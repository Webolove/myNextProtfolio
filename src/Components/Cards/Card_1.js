import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";

export default function Card_1({ theme, title, desc, href, github, imgSrc, imgAlt }) {
    const text_color = !theme ? 'text-dark_text_inverse' : 'text-light_text_inverse';
    return (
        <div className={`m-auto rounded-xl w-11/12 custom-sm:w-full h-[140px] custom-sm:h-[100px] flex overflow-hidden`} data-aos="zoom-in" style={{ "backgroundImage": `${!theme ? "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)" : "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)"}`, "fontFamily": "monospace" }}>
            <div className='w-1/5 min-w-[160px] h-full'>

                <Image src={`${imgSrc}`} width={100} height={100} className='w-full h-full' alt={`${imgAlt}`} ></Image>
            </div>
            <div className='p-2 w-4/5 flex flex-col justify-between'>
                <h2 className='text-xl custom-sm:text-base'>{title}</h2>
                <p className={`custom-sm:hidden text-[13px] ${text_color}`}>{desc}</p>
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
