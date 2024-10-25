import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export function ArticleSection() {
  const [getBlogPost, setGetBlogPoset] = useState([]);
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [filteredCategories, setFilteredCategories] = useState("Highlight");

  useEffect(() => {
    getData();
  }, [filteredCategories]);

  const getData = async () => {
    try {
      let url = `https://blog-post-project-api.vercel.app/posts`;
      if (filteredCategories !== "Highlight") {
        url = `${url}?category=${filteredCategories}`;
      }
      const response = await axios.get(url);
      setGetBlogPoset(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonElements = categories.map((category) => {
    return (
      <button
        key={category}
        onClick={() => {
          setFilteredCategories(category);
          setGetBlogPoset([]);
        }}
        className={`px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium ${
          filteredCategories === category ? "bg-[#DAD6D1]" : "bg-none"
        }`}
      >
        {category}
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
            />
            <Search
              className="absolute left-[325px] top-1/4 text-gray-400"
              size={20}
            />
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
            />
          );
        })}
      </div>
    </section>
  );
}

export function BlogCard({
  title,
  image,
  category,
  description,
  author,
  date,
}) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
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
