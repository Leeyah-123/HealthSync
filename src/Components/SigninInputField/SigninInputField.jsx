import React from 'react'

const SigninInputField = ({placeholder, label}) => {
  return (
    <div>
        <div className='flex flex-col p-2 text-left'>
            <label className='font-sans text-[.9rem] tracking-widest my-2'>
                {label}
            </label>

            <input className='w-full pl-2 pr-5 rounded-md py-2 border border-slate-400 text-zinc-600 outline-none focus:border focus:border-[#add92b] text-[.9rem] font-mono tracking-wider' type='text' onChange={(e) => setFormData(e.target.value)} placeholder={placeholder}>

            </input>
        </div>
    </div>
  )
}

export default SigninInputField
