import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import ProjectGrid from './ProjectGrid'
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
    <div className="flex-1 bg-orange-50 text-[#0b2131]">
      <Header />
      <HomePage />
      <ProjectGrid projectList={projectList} />
      <Footer />
    </div>
  )
}

export default App
