import React from 'react'

const NavBar = ({tasks}) => {
  return (
    <>
        <header className={`w-full p-4 px-8 flex flex-row justify-around items-center  bg-neutral-900 shadow-sm shadow-stone-900`}>
            <nav className={`w-full flex flex-row justify-between items-center `}>
                <span>
                    <a href="#"><h3 className={`text-yellow-400 text-3xl`}>Tasks</h3></a>
                </span>
                {/* <ul className={`inline`}>
                    <li className={`inline-block mx-4`}>
                        <a href="#" className={`text-white`}>Add a Task</a>
                    </li>
                    
                </ul> */}
                <span>
                    <h4 className={`text-yellow-400 text-2xl`}>{tasks.length}</h4>
                </span>


            </nav>
        </header>
    </>
  )
}

export default NavBar