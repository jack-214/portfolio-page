import Particles from 'react-tsparticles'

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%'
      }}
      options={{
        fullScreen: { enable: false },
        background: {
          color: '#fff7ed' // bg-orange-50
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: '#0b2131'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: {
              default: 'bounce'
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            }
          }
        }
      }}
    />
  )
}

export default ParticleBackground
