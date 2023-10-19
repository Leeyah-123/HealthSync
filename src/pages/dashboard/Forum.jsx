import { Outlet } from "react-router-dom";

const Forum = () => {
  return (
    <div className="mt-12 lg:mt-10 pb-8 px-4 lg:px-0 lg:ml-16 w-full">
      {/* <h2>Forum</h2> */}
      <Outlet />
    </div>
  );
};

export default Forum;
