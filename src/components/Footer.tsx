import { TiSocialGithub } from 'react-icons/ti'

export default function Footer() {
  return (
    <div className="mt-10 h-48 flex-1 bg-[#006daf] text-center">
      <p className="py-5 text-orange-50">Jack Ho copyright &copy;</p>
      <div className="flex justify-center">
        <a
          href="http://github.com/jack-214"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-4xl text-white transition-transform duration-300 hover:scale-125"
        >
          <TiSocialGithub />
        </a>
      </div>
    </div>
  )
}
