import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import homeImg from '../public/assets/projects/home.jpg'
import gameImg from '../public/assets/projects/game.jpg'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#4F7942]">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="The Home Of Stories" backgroundImg={homeImg} projectUrl="/home" info="Express.js, Node.js, MongoDB, Javascript, HTML, and CSS"/>
          <ProjectItem title="The Beginning of a New Adventure" backgroundImg={gameImg} projectUrl="/game" info="Javascript, HTLM, CSS"/>
        </div>
      </div>
    </div>
  )
}

export default Projects
