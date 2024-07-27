import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import AboutPage from '../components/AboutPage'
import ContactUs from '../components/ContactUs'
import SkillsPage from '../components/SkillsPage'
import ProjectPage from '../components/ProjectPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/skill" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  )
}

export default MainRoutes