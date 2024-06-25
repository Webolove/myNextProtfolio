import React from 'react'
import Hero from './Hero';
import Qualification from './Qualification';
import Future from './Future';
import Tech_profile from './Tech_profile';
import Skills from './Skills';

export default function About({ showSkill, theme }) {
    return (
        <>
            <Hero theme={theme} />
            <Qualification theme={theme} />
            <Future theme={theme} />
            <Tech_profile theme={theme} />
            <Skills theme={theme} />
        </>
    )
}
