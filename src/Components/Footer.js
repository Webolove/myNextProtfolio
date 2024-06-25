import React from 'react'
import './footer.css'

export default function Footer({ theme }) {

    return (
        <footer className={`footer ${theme ? 'bg-dark_text_inverse': 'bg-light_text_inverse'}`}>
            <p className={`footer_title ${theme && 'text-light_text_inverse'}`}>Mudit Anand.</p>
            <p className={`footer_desc ${theme && 'text-light_text_inverse'}`}>Inspired by the world, driven by creativity.</p>
            <p className={`footer_info ${theme && 'text-light_text_inverse'}`}>@copyright 2023. All Rights Reserved.</p>
        </footer>
    )
}
