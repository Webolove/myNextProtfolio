import React, { act, useEffect, useState } from 'react'
import './OnScroll.css'
import { FaArrowUp } from "react-icons/fa";

export default function MoveUp({ theme, activeTab }) {
    const col = !theme ? 'radial-gradient(#ff0a45, #ffaf98)' : 'radial-gradient(#b721ff, #21d4fd)';
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 450)
            setShow(true);
        else
            setShow(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let moveTo;
    if(activeTab == "Skills")
        moveTo = "#About";
    else
        moveTo = "#" + activeTab;

    return (
        <a href={`${moveTo}`}>
            <div id="scrollUp" className={`container transition scrollUp right-[10px]`} style={{ "backgroundImage": `${col}`, "display": `${show ? 'flex' : 'none'}`, "width": "43px", "height": "43px"}} onScroll={() => handleScroll()}>

                <div className="scrollArrow">
                    <FaArrowUp fontSize={17} />
                </div>

            </div>
        </a>
    )
}
