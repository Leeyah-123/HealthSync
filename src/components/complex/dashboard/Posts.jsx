import {
  GripHorizontal,
  Heart,
  MessageCircle,
  PenLine,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { posts } from '../../../utils/constants/static.constants';
import Pagination from '../../simple/dashboard/Pagination';

const Posts = () => {
  const navigate = useNavigate();
  const [like, setLike] = useState([]);
  const [isOptionsClicked, setIsOptionsClicked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOptionsClicked = (index) => {
    if (isOptionsClicked.includes(index)) {
      setIsOptionsClicked(isOptionsClicked.filter((i) => i !== index));
    } else {
      setIsOptionsClicked([...isOptionsClicked, index]);
    }
  };

  const handleLike = (index) => {
    if (like.includes(index)) {
      setLike(like.filter((l) => l !== index));
    } else {
      setLike([...like, index]);
    }
  };
  return (
    <div className="flex flex-col gap-4 pb-16">
      {currentPosts.map((post, index) => (
        <div
          key={post.id}
          className="w-full lg:w-[70%]  border-[1px] rounded-md border-lemon bg-lightGreen shadow-md py-6 px-8 relative"
        >
          <div
            className={`bg-white rounded-md py-4 px-6 absolute top-[25%] right-[5%] ${
              isOptionsClicked.includes(index) ? 'block' : 'hidden'
            }`}
          >
            <div className="flex gap-4 cursor-pointer hover:text-lemon">
              <PenLine />
              <p>Edit Post</p>
            </div>
            <div className="flex gap-4 mt-4 cursor-pointer hover:text-lemon">
              <Trash2 />
              <p>Delete Post</p>
            </div>
          </div>

          <div className="flex justify-between">
            <Link to={`${post.id}`}>
              {' '}
              <h2 className="font-bold text-lg lg:text-xl hover:text-green">
                {post.title}
              </h2>
            </Link>
            <button
              aria-label="view-options"
              role="button"
              onClick={() => handleOptionsClicked(index)}
              className={`hover:bg-lemon hover:rounded-full w-[40px] h-[40px] flex justify-center items-center p-1 lg:p-2 ${
                isOptionsClicked.includes(index) ? 'bg-lemon rounded-full' : ''
              }`}
            >
              <GripHorizontal />
            </button>
          </div>

          <div className="mt-8 flex gap-4">
            <img
              src={post.profilePic}
              alt="profile pic"
              className="w-[40px]  h-[40px] rounded-full border-[1px] border-lemon"
            />
            <div>
              <p className="text-green font-bold">{post.author}</p>
              <p>published {post.date}</p>
            </div>
          </div>

          <div className="mt-4 w-[95%] line-clamp-2">
            <p>{post.content}</p>
          </div>

          <div className="mt-4 flex gap-4 text-green">
            <button
              aria-label="make a comment"
              role="button"
              onClick={() => navigate(`${post.id}?comments=true`)}
            >
              <MessageCircle />
            </button>
            <button
              aria-label="like"
              role="button"
              onClick={() => {
                handleLike(index);
              }}
            >
              <Heart fill={like.includes(index) ? 'green' : 'none'} />
            </button>
          </div>
        </div>
      ))}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Posts;
