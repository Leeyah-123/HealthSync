import { Send } from "lucide-react";
import fatMan from "/assets/fatMan.jpg";
import { useEffect, useRef } from "react";

const Comments = ({ textAreaFocus }) => {
  const textAreaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (textAreaFocus) textAreaRef.current.focus();
  }, [textAreaFocus]);

  return (
    <section>
      <div className="mt-4 w-full lg:w-[70%]  border-[1px] rounded-md border-lemon bg-lightGreen shadow-md py-6 px-4 lg:px-8 relative">
        <h2 className="font-bold text-lg">Comments</h2>

        <form onSubmit={(e) => handleSubmit(e)} className="mt-6">
          <textarea
            ref={textAreaRef}
            className="p-4 h-[60px] outline-none w-full rounded-md border-[1px] border-lemon"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add to the discussion"
          ></textarea>
          <button
            aria-label="comment"
            role="button"
            className="text-green"
            type="submit"
          >
            <Send />
          </button>
        </form>

        <div className="flex gap-2 mt-4">
          <div>
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={fatMan}
              alt="profile pic"
            />
          </div>
          <div className="p-4  outline-none w-full md:w-[80%] rounded-md border-[1px] border-l-[4px] border-l-green border-r-lemon border-y-lemon">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates magni distinctio minima harum alias placeat iusto nobis
              iste facilis molestiae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
