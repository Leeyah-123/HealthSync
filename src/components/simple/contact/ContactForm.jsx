import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setname] = useState('')
  const [message, setmessage] = useState('')
  const [email, setemail] = useState('')
  const [toast, settoast] = useState(false)
  const change = (e) => (e.target.value)
  return (
    <form className="w-3/4 mx-auto space-y-5 pt-8 sm:pt-12 font-semibold text-lightblack">
      <div className="sm:flex capitalize sm:space-x-10">
        <div className="grid">
          <label htmlFor="name">name:</label>
          <input
            value={name}
            onChange={(e) => setname(change(e))}
            id="name"
            type="text"
            className="border-b-2 outline-none border-lightblack p-3"
          />
        </div>
        <div className="grid w-full">
          <label htmlFor="email">email:</label>
          <input
            value={email}
            onChange={(e) => setemail(change(e))}
            id="email"
            type="email"
            className="border-b-2 outline-none border-lightblack p-3"
          />
        </div>
      </div>
      <div className="grid gap-2 capitalize">
        <label htmlFor="topic">topic</label>
        <select
          id="topic"
          className="border-b-2 outline-none border-lightblack capitalize p-3"
        >
          <option value="workout">workout</option>
          <option value="nutrition">nutrition</option>
          <option value="health">health</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="capitalize">
          your message
        </label>
        <textarea
          value={message}
          onChange={(e) => setmessage(change(e))}
          id="message"
          rows={3}
          className="border-b-2 outline-none border-lightblack"
        />
      </div>

      {toast &&
        <div className=' text-green uppercase font-bold'>
          <p>Thank you for contacting us</p>
          <p>your message has been succeffully submitted.</p>
        </div>
      }
      <button
        className="transition-all capitalize text-sm flex space-x-2 py-2.5 px-2 relative before:absolute before:content-[''] before:w-1/2 before:inset-0 before:bg-lemon hover:before:w-full before:transition-all"
        type="submit"
        onClick={(e) => (
          e.preventDefault(),
          (name && email && message) ? (
            settoast(!toast),
            setmessage(''),
            setname(''),
            setemail('')
          ) : alert('Please Fill The Contact Form',)
        )}
      >
        <span className="z-10">send message</span>
        <FaArrowRight className="self-center z-10" />
      </button>
    </form>
  );
};

export default ContactForm;
