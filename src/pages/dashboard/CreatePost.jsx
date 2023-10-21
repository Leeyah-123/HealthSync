import { Spinner, useToast } from '@chakra-ui/react';
import { todayDate } from "../../utils/helper";
import fatMan from "/assets/fatMan.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HEALTHSYNC_AUTH_TOKEN_KEY } from "../../utils/constants/cookie.constants";
import CookiesService from "../../services/Cookies.service";
import { postRequests } from "../../utils/apiRequests/post.requests";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate()
  const toast = useToast();
  const {user} = useContext(AuthContext)
  let token = CookiesService.getter(HEALTHSYNC_AUTH_TOKEN_KEY)

  const initialState = {
    title: '',
    content: ''
  }

  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const request = await postRequests().createPost(token, form)
    setLoading(false)
    
    if (!request.success)
      return toast({
        status: 'error',
        title: request.message,
      });

      toast({
      status: 'success',
      title: request.message,
    });

    navigate('/dashboard/posts')

  };

  return (
    <main className="mt-12 lg:mt-10 pb-8 px-4 lg:px-0 lg:ml-16 w-full">
      <h1 className="font-bold text-lg lg:text-2xl">Create Post</h1>

      <div className="flex gap-4 mt-8">
        <div>
          <img
            src={fatMan}
            alt="profile-pic"
            className="w-[30px] h-[30px] rounded-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-green">{user.firstName} {user.lastName}</h2>
          <p>published {todayDate()}</p>
        </div>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full md:w-[70%] mt-12"
      >
        <input
          className="outline-none w-full rounded-md border-[1px] border-lemon p-4 h-[60px]"
          type="text"
          placeholder="Post Title"
          value={form.title}
          onChange={e => setForm({...form, title: e.target.value})}
        />
        <textarea
          className="mt-4 outline-none w-full rounded-md border-[1px] border-lemon p-4 h-[190px] lg:h-[260px]"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="post content"
          value={form.value}
          onChange={e => setForm({...form, content: e.target.value})}
        ></textarea>

        <button
          type="submit"
          className="bg-green text-white p-2 w-[110px] rounded-md mt-2 hover:opacity-90"
        >
          {loading ? <Spinner marginTop={1} /> : 'Post'}
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
