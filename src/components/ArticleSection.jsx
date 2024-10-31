import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

export function BlogCard({
  title,
  image,
  category,
  description,
  author,
  date,
  id,
}) {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <div onClick={handleView} className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md cursor-pointer"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <h2
          onClick={handleView}
          className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline cursor-pointer"
        >
          {title}
        </h2>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 text-start">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="Tomson P."
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export function ArticleSection() {
  const [getBlogPost, setGetBlogPost] = useState([]);
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [input, setInput] = useState("");
  const [resultInput, setResultInput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          category === "Highlight"
            ? `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6&keyword=${input}`
            : `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6&category=${category}&keyword=${input}`
        );
        setLoading(false);
        setResultInput(response.data.posts);
        if (page === 1) {
          setGetBlogPost(response.data.posts);
        } else {
          setGetBlogPost((prev) => [...prev, ...response.data.posts]);
        }
        if (response.data.currentPage >= response.data.totalPages) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [page, category, input]);

  const buttonElements = categories.map((cat) => {
    return (
      <button
        key={cat}
        onClick={() => {
          setCategory(cat);
          setGetBlogPost([]);
          setPage(1);
          setHasMore(true);
        }}
        className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
          category === cat ? "bg-[#DAD6D1]" : "bg-none"
        }`}
      >
        {cat}
      </button>
    );
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleSearchClick = (postId) => {
    navigate(`/post/${postId}`)
    setInput("");
  }

  return (
    <section className="latest-article gap-[80px] flex bg-[#F9F8F6] flex-col justify-center items-center">
      <div className="article-header gap-[32px] h-[144px] flex flex-col w-full">
        <h3 className="text-header text-[24px] text-left">Latest articles</h3>
        <div className="article-tabbar flex w-full h-[80px] justify-between items-center bg-[#EFEEEB] rounded-xl px-10">
          <div className="hidden md:flex space-x-2">{buttonElements}</div>
          <div className="input-search relative w-[360px]">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Search
              className="absolute left-[325px] top-1/4 text-gray-400"
              size={20}
            />
            {input && resultInput.length > 0 && (
              <div className="search-list absolute bg-white w-full mt-5 rounded-md shadow-lg z-50 text-start">
                <ul>
                  {resultInput.map((post) => (
                    <li
                      key={post.id}
                      onClick={() => handleSearchClick(post.id)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {post.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="blog-card-content grid grid-cols-2 gap-x-4 gap-y-4 max-w-[1200px]">
        {getBlogPost.map((key, index) => {
          return (
            <BlogCard
              key={index}
              image={key.image}
              title={key.title}
              category={key.category}
              description={key.description}
              date={formatDate(key.date)}
              author={key.author}
              id={key.id}
            />
          );
        })}
      </div>
      {hasMore && (
        <button onClick={() => setPage(page + 1)} className="viewmore">
          {loading ? (
            <div className="flex flex-col gap-2">
              <div>
                <ClipLoader />
              </div>
              ...Loading
            </div>
          ) : (
            <p className="hover:underline">View more</p>
          )}
        </button>
      )}
    </section>
  );
}
