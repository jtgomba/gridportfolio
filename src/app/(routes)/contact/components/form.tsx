import React from 'react';

const Form = () => {
  return (
    <form className='mt-3 px-6'>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-6'>
          {/* <h2 className='text-base font-semibold leading-7 text-white'>
            Profile
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>
            This information will be displayed publicly so be careful what you
            share.
          </p> */}

          <div className=' grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Your name
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md bg-black shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='John Doe *'
                  />
                </div>
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-white'
              >
                Your email
              </label>
              <div className='mt-2'>
                <div className='flex rounded-md bg-black shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='john@doe.com *'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-white'
              >
                Your message
              </label>
              <div className='mt-2'>
                <textarea
                  id='about'
                  name='about'
                  rows={3}
                  className='block w-full rounded-md border-0 bg-black py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                  placeholder='Hello Joel, can you help me with ... *'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end gap-x-6'>
        <button
          type='reset'
          value='Reset'
          className='text-sm font-semibold leading-6 text-white'
        >
          Reset
        </button>
        <button
          type='submit'
          className='rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
