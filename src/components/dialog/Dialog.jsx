import React from 'react'

const Dialog = ({ setIsAppear, isAppear, register, handleFormSubmit, handleSubmit }) => {
    return (
        <>
            <div className={`w-full h-full z-50 absolute top-0 flex flex-col justify-center items-center text-white `}>

                <div className='px-1 py-6 flex flex-col justify-center items-center rounded-3xl  bg-black opacity-80 '>
                    <div className='w-full z-10 px-4 flex flex-row justify-between items-center'>
                        <span className='font-semibold text-xl'>
                            Add a Task
                        </span>
                        <button className='flex' onClick={() => setIsAppear(false)}>
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" strokeWidth="4" />
                            </svg>
                        </button>

                    </div>


                    <form className='flex flex-col p-4 ' onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className='flex justify-between'>
                            <label htmlFor="Name">Task Name: </label>
                            <input className='rounded-lg text-black px-2 ml-2' type="text" id='Name' {...register('Name')} />
                        </div>
                        <div className='flex justify-between mt-5'>
                            <label htmlFor="Description">Task Description: </label>
                            <input className='rounded-lg text-black px-2 ml-2' type="text" id='Description' {...register('description')} />
                        </div>
                        <button className={`bg-zinc-600 mt-7 rounded-lg p-1 flex flex-row justify-center items-center`} type="submit">Submit</button>
                    </form>

                </div>

            </div>

        </>
    )
}

export default Dialog