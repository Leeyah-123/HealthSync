import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <form className="w-3/4 mx-auto space-y-5 pt-8 sm:pt-12 font-semibold text-lightblack">
      <div className="sm:flex capitalize sm:space-x-10">
        <div className="grid">
          <label htmlFor="name">name:</label>
          <input
            id="name"
            type="text"
            className="border-b-2 outline-none border-lightblack p-3"
          />
        </div>
        <div className="grid w-full">
          <label htmlFor="email">email:</label>
          <input
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
          id="message"
          rows={3}
          className="border-b-2 outline-none border-lightblack"
        />
      </div>

      <button
        className="transition-all capitalize text-sm flex space-x-2 py-2.5 px-2 relative before:absolute before:content-[''] before:w-1/2 before:inset-0 before:bg-lemon hover:before:w-full before:transition-all"
        type="submit"
        onClick={(e) => e.preventDefault()}
      >
        <span className="z-10">send message</span>
        <FaArrowRight className="self-center z-10" />
      </button>
    </form>
  );
};

export default ContactForm;
