const App = () => {
  return (
    <div className='w-64 h-12 bg-gray-800 rounded-sm flex items-center'>
      <div className='w-4 h-full bg-green-500' />
      <div className='p-3 w-full h-full overflow-hidden flex items-center justify-between gap-3'>
        <span className='w-11/12 text-white font-semibold truncate'>
          Hola, este es un mensaje! saddddasdddddddd aaaaaaaaaaaaaaaaaaaaa dasda
        </span>
        <div className='w-1/12 text-red-500 font-bold flex justify-center'>
          x
        </div>
      </div>
    </div>
  )
}

export default App
