import React from 'react'

type Project = {
  name: string
  link: string
  image: string
}

type ProjectGridProps = {
  projectList: Project[]
}

export default function ProjectGrid({ projectList }: ProjectGridProps) {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectList.map((project: Project, index: number) => {
          return (
            <li key={index}>
              <div className="mx-20 size-64 flex-col rounded-2xl border-2 border-slate-900 bg-white p-4 text-center font-poppins text-[#0b2131]">
                <a href={project.link}>
                  <img
                    className="w-56"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                <p className="">{project.name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
