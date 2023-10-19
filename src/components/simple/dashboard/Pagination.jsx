const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="flex gap-2">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`rounded-full h-[50px] w-[50px] flex justify-center items-center ${
            currentPage == number ? "bg-lemon" : "hover:bg-lightGreen"
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
