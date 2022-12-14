import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import homeImg from '../public/assets/projects/home.jpg'
import gameImg from '../public/assets/projects/game.jpg'
import mapImg from '../public/assets/projects/map.jpg'

const ProjectItem = ({title, backgroundImg, info, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#4F7942] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wdier text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{info}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
        </Link>
      </div>
    </div>
  )
}
export default ProjectItem
