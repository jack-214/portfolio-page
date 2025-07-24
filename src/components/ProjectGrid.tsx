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
    <div>
      <div className="text-center">
        <p className="text-2xl">Some of the stuff I&apos;ve done so far...</p>
      </div>
      <div className="flex min-h-80 items-center justify-center">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectList.map((project: Project, index: number) => {
            return (
              <li key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition duration-300 hover:scale-105"
                >
                  <div className="flex size-64 flex-col justify-center gap-6 rounded-2xl border-2 border-slate-900 bg-white p-4 text-center font-poppins text-[#0b2131]">
                    <img
                      className="mb-1 mt-auto h-auto w-full object-contain"
                      src={project.image}
                      alt={project.name}
                    />

                    <p className="mt-auto">{project.name}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
