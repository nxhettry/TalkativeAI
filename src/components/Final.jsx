import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typist from 'react-typist';

const Final = (props) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-3/5 p-4 bg-inherit'>
        <div className='flex flex-col flex-grow space-y-4'>
          {props.convo.map((conv, index) => (
            <div key={index} className='flex flex-col gap-4 border-b border-slate-500'>
              <div className='m-2 p-2 rounded-lg bg-inherit text-white min-w-xl'>
                <p className='font-bold'>You:</p>
                <p className='bg-white text-black p-2 text-md rounded-lg min-w-full'>{conv.You}</p>
              </div>

              <div className='m-2 p-2 rounded-lg bg-inherit text-white max-w-xl'>
                <p className='font-bold'>Einstein:</p>
                {
                  conv.Einstein ?
                    <ReactMarkdown className='bg-white single text-black p-2 text-md rounded-lg min-w-full'>{conv.Einstein}</ReactMarkdown>
                    :
                    <Typist className='bg-white text-black p-2 text-md rounded-lg min-w-full'>Thinking...</Typist>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Final
