import React from 'react'
import Homepage from './Homepage'
import Nav from './Nav'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'

const Home = () => {
  return (
    <div className='flex font-[ClashDisplay] h-screen overflow-x-auto overflow-hidden items-center text-zinc-700 bg-gradient-to-b from-[#EDE9C9] to-white'>
      <Nav/>
      <Homepage/>
      <SkillsPage/>
      <ProjectPage/>
    </div>
  )
}

export default Home