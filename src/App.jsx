import { useState } from 'react'

const App = () => {
  const [isHover, setIsHover] = useState({
    width: false,
    height: false
  })

  const message = 'Notificacion Efectiva y tal! aaassasdaad dsakasd kls snjjhkasj ajsjasw sas asdas'

  // transition-x-10
  // const dir = {
  //   top: false,
  //   bottom: false,
  //   right: false,
  //   left: false,
  //   center: false
  // }

  const handleMouseEnter = () => {
    if (message.length > 28) {
      setIsHover({
        height: true,
        width: message.length > 72
      })
    }
  }
  const handleMouseLeave = () => setIsHover({ height: false, width: false })

  return (
    <div
      className={`
        h-${isHover.height ? '28' : '14'} w-${isHover.width ? '96' : '72'}
        overflow-hidden cursor-pointer pe-3 flex items-center gap-3
        bg-gray-800 rounded-md transition-all duration-500
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='bg-green-500 w-5 h-full' />
      <ul className='overflow-hidden w-full h-full flex items-center justify-between'>
        <li className='overflow-hidden py-3 w-5/6 h-full flex items-center justify-center'>
          <span
            className={`
              h-full text-white text-lg
              ${isHover.height ? 'overflow-hidden flex items-center' : 'truncate'}
            `}
          >
            {message}
          </span>
        </li>
        <li className='text-red-400 font-bold'>
          X
        </li>
      </ul>
    </div>
  )
}

export default App
