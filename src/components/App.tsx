import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import ProjectGrid from './ProjectGrid'
import { BackgroundBeams } from './ui/BackgroundBeams'

import PlantBaseThumbnail from '../assets/plant_base_thumbnail.png'
import NorthcodersNewsThumbnail from '../assets/northcoders_thumbnail.png'

const projectList = [
  {
    name: 'Plant Base',
    link: 'https://github.com/Emiltps/plantBase-Frontend.git',
    image: PlantBaseThumbnail
  },
  {
    name: 'Northcoders News',
    link: 'https://github.com/jack-214/nc-news-frontend',
    image: NorthcodersNewsThumbnail
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
