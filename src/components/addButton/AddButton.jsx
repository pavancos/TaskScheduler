import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '../dialog/Dialog';

const AddButton = ({ tasks, setTasks }) => {
    const { register, handleSubmit } = useForm();
    const [isAppear, setIsAppear] = useState(false)

    function handleFormSubmit(formData) {
        // console.log('Form Data: ', formData);
        setTasks([...tasks, { id: tasks.length + 1, ...formData }]) 
        setIsAppear(false)
    }
    return (
        <>
            <button onClick={() => setIsAppear(true)}
                className={`rounded-full p-3 bg-yellow-400 bottom-5 right-5 
                 fixed z-50 hover:bg-yellow-500 
                 hover:focus:ring-1 focus:ring-slate-300`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-neutral-900`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
            {
                isAppear && 
                <Dialog isAppear={isAppear} setIsAppear={setIsAppear} register={register} handleFormSubmit={handleFormSubmit} handleSubmit={handleSubmit} />
            }
        </>
    );
}

export default AddButton