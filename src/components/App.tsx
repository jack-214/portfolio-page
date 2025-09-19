import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import ProjectGrid from './ProjectGrid'
import { BackgroundBeams } from './ui/BackgroundBeams'

import PlantBaseThumbnail from '../assets/plant_base_thumbnail.png'
import NorthcodersNewsThumbnail from '../assets/northcoders_thumbnail.png'
import LumoThumbnail from '../assets/lumo_thumbnail.png'

const projectList = [
  {
    name: 'Plant Base',
    link: 'https://github.com/Emiltps/plantBase-Frontend.git',
    image: PlantBaseThumbnail,
    description:
      'A plant care app to help you keep track of your plants and their needs.',
    technologies: [
      'React Native',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express',
      'PostgreSQL'
    ]
  },
  {
    name: 'Northcoders News',
    link: 'https://github.com/jack-214/nc-news-frontend',
    image: NorthcodersNewsThumbnail,
    description:
      'A news aggregation site where users can read and post articles, comment on them, and vote them up or down.',
    technologies: [
      'React',
      'TypeScript',
      'CSS Modules',
      'Node.js',
      'Express',
      'PostgreSQL'
    ]
  },
  {
    name: 'Lumo',
    link: 'https://github.com/jack-214/ai-learning-companion',
    image: LumoThumbnail,
    description:
      'An AI-powered learning companion that helps users learn new topics through interactive conversations and personalised voice assistants.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vapi',
      'Supabase'
    ]
  }
]

function App() {
  return (
    <div className="relative min-h-screen flex-1 bg-orange-50 text-[#0b2131]">
      <Header />

      <HomePage />
      <ProjectGrid projectList={projectList} />
      <BackgroundBeams />
      <Footer />
    </div>
  )
}

export default App
