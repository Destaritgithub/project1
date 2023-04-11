import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className=' w-full h-screen bg-slate-600 flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/b0f80b10-d194-4ea1-b0b6-74280279749d'
        className=' flex flex-col max-w-[600px] w-full'
      >
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-pink-950 text-gray-300'>
            Contact
          </p>
          <p className=' text-gray-300 py-4'>Submit the form below</p>
        </div>
        <input type='text' placeholder='Name' name='name' />
        <input
          className='my-4 p-2 '
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea name='message' rows={10} placeholder='message'></textarea>
        <button className=' text-white border-2 hover:bg-pink-500 hover:border-fuchsia-300 px-4 py-3 my-8 mx-auto flex items-center '>
          {' '}
          send me your comment
        </button>
      </form>
    </div>
  );
};

export default Contact;
