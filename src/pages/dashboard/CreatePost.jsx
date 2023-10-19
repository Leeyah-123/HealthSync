import { todayDate } from "../../utils/helper";
import fatMan from "/assets/fatMan.jpg";

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h2 className="font-bold text-green">Anthony Gilbert</h2>
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
        />
        <textarea
          className="mt-4 outline-none w-full rounded-md border-[1px] border-lemon p-4 h-[190px] lg:h-[260px]"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="post content"
        ></textarea>

        <button
          type="submit"
          className="bg-green text-white p-2 w-[110px] rounded-md mt-2 hover:opacity-90"
        >
          Post
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
