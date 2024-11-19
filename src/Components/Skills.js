import React from 'react'
import './skills.css'
import { MdOutlineWorkOutline } from "react-icons/md";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

export default function Skills({ theme }) {
    const skill_round_sq_line_color = !theme ? 'bg-light_profile_bg' : 'bg-dark_profile_bg';
    const h_color = !theme ? 'text-light_text_primary' : 'text-dark_text_primary';
    const p_color = !theme ? 'text-dark_text_inverse' : 'text-light_text_inverse';

    const skills_arr = [
        {
            title: "Languages",
            content: "C, C++, HTML, CSS, Js, Java, Solidity"
        }, {
            title: "Tech Stacks",
            content: "MongoDB, ExpressJs, ReactJs, NodeJs"
        }, {
            title: "Frameworks",
            content: "Nextjs, Bootstrap, Tailwind"
        }, {
            title: "Platforms",
            content: "Linux, Windows, Mac"
        }, {
            title: "Hobbies",
            content: "To play Badminton, Watch Anime, and Sometimes Chess."
        }

    ];

    return (
        <section className="skills Container">

            <div id="skills" className="skills_left" data-aos="fade-right">

                <div className="skills_heading">
                    <div>
                        <span className={`skill_square ${skill_round_sq_line_color}`}>
                            <MdOutlineWorkOutline className='skill__icon' />
                        </span>
                        <span className={`skill_liner ${skill_round_sq_line_color}`}></span>
                    </div>
                    <div>
                        <h2 className={`skill_title ${h_color}`}>Skills</h2>
                    </div>
                </div>
                {
                    skills_arr.map((mySkill, index) =>
                        <div className={`skill_data ${index == 0 && 'languages'}`} key={index}>
                            <div>
                                <span className={`skill__rounder ${skill_round_sq_line_color}`}>
                                    <div className="skill__circle"></div>
                                </span>
                                {index != skills_arr.length - 1 && <span className={`skill_liner ${skill_round_sq_line_color}`}></span>}
                            </div>

                            <div data-aos="fade-bottom">
                                <h3 className={`skill_subtitle skill_description ${h_color}`}>{mySkill.title}</h3>
                                <p className={`skill_content ${p_color}`} style={{ "fontFamily": `"JetBrains Mono", monospace` }}>({mySkill.content}).</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className={`skills_right ${theme && 'text-light_text_inverse'}`} data-aos="zoom-in">
                <TagCloud
                    
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                    })}
                >
                    {[
                        'HTML', 'CSS', 'JavaScript', 'ReactJs', 'ExpressJs', 'MongoDB', 'NodeJs', 'Bootstrap', 'C/C++', 'Java', 'Nextjs', 'tailwindCss', 'NFT'
                    ]}
                </TagCloud>
            </div>

        </section>
    )
}
