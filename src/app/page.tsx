'use client'
import { useState } from 'react';
import Task from "../components/Task";

export default function Home() {
    const [inputValue, setInputValue] = useState<string | null>(null)

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Todo-next.js</h1>
      <Task />
      <form
        onSubmit={() => console.log('ADD')}
        className='flex items-center mt-4'
      >
        <input
          type='text'
          className='border border-gray-400 px-4 py-2 mr-2 rounded text-black'
          value={inputValue || ''}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Input your TODO'
        />
        <button
          type='submit'
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
        >
          Add
        </button>
      </form>
    </div>
  );
}