import React, { useEffect, useState } from 'react'
import { MdFormatListBulleted } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import Card_1 from './Cards/Card_1';
import Card_2 from './Cards/Card_2';
import myProj from '@/Projects/myProj';

export default function Projects({ theme }) {
  const [activeProj, setActiveProj] = useState(() => {
    const savedProj = localStorage.getItem('activeProj');
    return savedProj !== null ? JSON.parse(savedProj) : "All";
  });

  useEffect(() => {
    localStorage.setItem('activeProj', JSON.stringify(activeProj));
  }, [activeProj]);


  const [showLike, setShowLike] = useState(() => {
    const savedView = localStorage.getItem('savedView');
    return savedView !== null ? JSON.parse(savedView) : "Menu";
  });

  useEffect(() => {
    localStorage.setItem('savedView', JSON.stringify(showLike));
  }, [showLike]);


  const projTab_col = (ActiveProj) => {
    return `${!theme ? (activeProj == ActiveProj ? 'text-dark_text_inverse font-semibold' : 'text-light_text_secondary') : (activeProj == ActiveProj ? 'text-light_text_inverse font-semibold' : 'text-dark_text_secondary')}`
  }

  const show_css = (type) => {
    return `transition transition-all duration-200 cursor-pointer border border-1 border-gray-600 p-1 ${!theme ? (showLike == type ? 'text-dark_text_inverse' : 'text-light_text_secondary') : (showLike == type ? 'text-light_text_inverse' : 'text-dark_text_secondary')}`
  }
  const common_css_flex = `custom-sm:w-11/12 rounded-xl py-4 custom-sm:py-3 ${!theme ? 'bg-white' : 'bg-gray-800'} shadow-xl`

  const projects = myProj;

  return (
    <section className='max-w-[1000px] mx-auto py-8 flex flex-col place-items-center justify-between gap-8' id='Projects'>
      <div className={`w-4/5 ${common_css_flex}  flex gap-2 place-items-center justify-center`}>
        <span className={`transition transition-all duration-100 w-[30px] text-center cursor-pointer ${projTab_col("All")}`} onClick={() => setActiveProj("All")}>All</span>
        <div className='h-[17px] border border-1 border-gray-500'></div>
        <span className={`transition transition-all duration-100 w-[70px] text-center cursor-pointer ${projTab_col("Web3")}`} onClick={() => setActiveProj("Web3")}>Web 3.0</span>
        <div className='h-[17px] border border-1 border-gray-500'></div>
        <span className={`transition transition-all duration-100 w-[100px] text-center cursor-pointer ${projTab_col("Responsive")}`} onClick={() => setActiveProj("Responsive")}>Responsive</span>
        <div className='h-[17px] border border-1 border-gray-500'></div>
        <span className={`transition transition-all duration-100 w-[60px] text-center cursor-pointer ${projTab_col("NextJs")} `} onClick={() => setActiveProj("NextJs")}>NextJs</span>
      </div>
      <div className={`w-full min-h-[700px] ${common_css_flex} custom-sm:px-4 px-6`}>
        <div className='flex place-items-center justify-between'>
          <h2 className={`${!theme ? 'text-light_text_primary text-xl' : 'text-dark_text_primary text-xl'}`}>Projects</h2>
          <div className='flex'>
            <div className={`${show_css("Menu")}`} style={{ "borderTopLeftRadius": "9px", "borderBottomLeftRadius": "9px" }} onClick={() => setShowLike("Menu")}>
              <MdFormatListBulleted fontSize={19} />
            </div>
            <div className={`${show_css("Grid")}`} style={{ "borderTopRightRadius": "9px", "borderBottomRightRadius": "9px" }} onClick={() => setShowLike("Grid")}>
              <FiGrid fontSize={19} />
            </div>
          </div>
        </div>

        {
          showLike == "Menu" ?
            <div className='py-6 px-4 custom-sm:px-1 flex flex-col gap-3'>
              {projects[activeProj].map((ele, index) => <div key={index}><Card_1 theme={theme} title={ele.title} desc={ele.desc} href={ele.href} github={ele.github} imgSrc={ele.imgSrc} imgAlt={ele.imgAlt} /></div>)}
            </div>
            :

            <div className='py-6 px-4 flex place-items-center justify-center flex-wrap gap-6'>
              {projects[activeProj].map((ele, index) => <div key={index}><Card_2 theme={theme} title={ele.title} desc={ele.desc} href={ele.href} github={ele.github} imgSrc={ele.imgSrc} imgAlt={ele.imgAlt} /></div>)}
            </div>
        }
      </div>
    </section>
  )
}
