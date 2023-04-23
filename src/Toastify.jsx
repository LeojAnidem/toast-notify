export const Toastify = ({ message }) => {
  const handlerMouseEnter = () => {
    
  }

  const handlerMouseLeave = () => {

  }

  return (
    <div
      className='w-64 h-12 bg-gray-800 rounded-sm flex items-center'
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div className='w-4 h-full bg-green-500' />
      <div className='p-3 w-full h-full overflow-hidden flex items-center justify-between gap-3'>
        <span className='w-11/12 text-white font-semibold truncate'>
          {message}
        </span>
        <div className='w-1/12 text-red-500 font-bold flex justify-center'>
          x
        </div>
      </div>
    </div>
  )
}
