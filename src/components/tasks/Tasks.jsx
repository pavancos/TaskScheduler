import React from 'react'
import Task from '../task/Task'



function Tasks({tasks , setTasks}) {
    
  return (
    <>
        <div className='w-full px-8 pt-2 bg-stone-800'  >
            {
                tasks.map((task) => {
                    return <Task key={task.id} task={task} setTasks={setTasks} tasks={tasks}></Task>
                })
            }


        </div>
    </>
  )
}

export default Tasks