import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
  const initialState = { name: '', email: '', message: '', topic: 'workout' };
  const [form, setForm] = useState(initialState);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.topic)
      return toast({
        title: 'Please fill in all required fields',
        status: 'error',
      });

    toast({
      title:
        'Form submitted successfully. We will reach back to you as soon as possible.',
      status: 'success',
    });
  };

  return (
    <form
      className="w-3/4 mx-auto space-y-5 pt-8 sm:pt-12 font-semibold text-lightblack"
      onSubmit={handleSubmit}
    >
      <div className="sm:flex capitalize sm:space-x-10">
        <div className="grid">
          <label htmlFor="name">name:</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="name"
            type="text"
            className="border-b-2 outline-none border-lightblack p-3"
            required
          />
        </div>
        <div className="grid w-full">
          <label htmlFor="email">email:</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="email"
            type="email"
            className="border-b-2 outline-none border-lightblack p-3"
            required
          />
        </div>
      </div>
      <div className="grid gap-2 capitalize">
        <label htmlFor="topic">topic</label>
        <select
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          id="topic"
          className="border-b-2 outline-none border-lightblack capitalize p-3"
          required
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
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          id="message"
          rows={3}
          className="border-b-2 outline-none border-lightblack"
          required
        />
      </div>

      <button
        className="transition-all capitalize text-sm flex space-x-2 py-2.5 px-2 relative before:absolute before:content-[''] before:w-1/2 before:inset-0 before:bg-lemon hover:before:w-full before:transition-all"
        type="submit"
      >
        <span className="z-10">send message</span>
        <FaArrowRight className="self-center z-10" />
      </button>
    </form>
  );
};

export default ContactForm;
