import React from 'react'
import './footer.css'

export default function Footer({ theme }) {

    return (
        <footer className={`footer ${theme ? 'bg-[#303030]': 'bg-[#f1f2f4]'}`}>
            <p className={`footer_title ${theme && 'text-[#f1f2f4]'}`}>Mudit Anand.</p>
            <p className={`footer_desc ${theme && 'text-[#f1f2f4]'}`}>Inspired by the world, driven by creativity.</p>
            <p className={`footer_info ${theme && 'text-[#f1f2f4]'}`}>@copyright 2023. All Rights Reserved.</p>
        </footer>
    )
}
