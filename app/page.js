"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    console.log(e)
    e.preventDefault();
    setMainTask([...mainTask, { title, description }])
    console.log(mainTask);
    setTitle("");
    setDescription("");
  }

  const deleteTask = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  }

  let renderTask = <h3 className='text-white '>No task available</h3>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((item, index) => {
      return (
        <li key={index} className='flex items-center justify-center mb-5'>
          <div className='flex items-center justify-evenly  w-2/3'>
            <h1 className='font-bold'>{item.title}</h1>
            <h6>{item.description}</h6>
          </div>
          <button
            onClick={() => {
              deleteTask(index);
            }}
            className='bg-red-400 text-white px-4 py-2 rounded'>Delete</button>
        </li>
      )
    });
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-2xl'>Reesav's todo list </h1>
      <form className='flex justify-center items-center'>
        <input type="text"
          className='text-m border-zinc-800 border-2 m-8 px-4 py-2'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="text"
          className='text-m border-zinc-800 border-2 m-8 px-4 py-2 '
          placeholder='Enter description here'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className='bg-black text-white px-4 py-3 text-s font-bold rounded h-10 '
          onClick={submitHandler}>
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-5 bg-slate-400 text-l'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
