import React from 'react'

const Task = ({task}) => {
  return (
    <>
        <div className={`p-2 py-2 flex flex-row rounded-lg bg-stone-700 my-3 hover:bg-neutral-900`}>
            <div className='flex justify-center items-center'>
                <button
                 className={`
                    rounded-full h-3 w-3 bg-yellow-200
                    hover:bg-yellow-600 hover:ring-2 hover:ring-white focus:ring-slate-300
                    `}
                >
                </button>
            </div>
            <div className={`inline ml-2 `}>
                <h3 className={`text-neutral-200 text-xl font-semibold`}>{task.Name}</h3>
                <p className={`text-neutral-300`}>{task.description}</p>

            </div>
            

        </div>
    </>
  )
}

export default Task