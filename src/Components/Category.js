import React from 'react'

const Category = () => {
    
  return (
    <div className=' flex justify-center'>
        {/* All category Items */}
        <ul className='flex overflow-x-auto'>
            <li className='m-2 bg-slate-400 text-black w-fit px-3 rounded cursor-pointer'>All</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>News</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Fun</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Movies</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>songs</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Shots</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Tick</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Games</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Live</li>
            <li className='m-2 bg-slate-400 text-white w-fit px-3 rounded cursor-pointer'>Tv</li>
        </ul>
    </div>
  )
}

export default Category