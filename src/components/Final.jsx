import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typist from 'react-typist';
import "../App.css";

const Final = (props) => {
  return (
    <>
      {props.convo.map((conv, index) => (
        <div key={index} className='flex flex-col gap-4 border-slate-500 max-h-full overflow-y-auto border rounded-lg'>
          <div className='m-2 p-2 rounded-lg bg-inherit text-white min-w-xl'>
            <p className='font-bold'>You:</p>
            <p className='bg-white text-black p-2 text-md rounded-lg max-h-full min-w-full'>{conv.You}</p>
          </div>

          <div className='m-2 p-2 rounded-lg bg-inherit text-white max-w-xl '>
            <p className='font-bold'>Einstein:</p>
            {
              conv.Einstein ?
                <ReactMarkdown className='bg-white single text-black p-2 text-md rounded-lg max-h-full min-w-full'>{conv.Einstein}</ReactMarkdown>
                :
                <Typist className='bg-white text-black p-2 text-md rounded-lg min-w-full '>Thinking...</Typist>
            }
          </div>
        </div>
      ))}
      </>
  );
  
}

export default Final;