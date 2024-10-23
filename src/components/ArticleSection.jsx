import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { blogPosts } from "../data/blogPost";
import { useState } from "react";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [filteredCategories, setFilteredCategories] = useState(blogPosts);
  const filteredCat = (category) => {
    const newItems = blogPosts.filter((data) => data.category === category)
    setFilteredCategories(newItems);
  };

  const buttonElements = categories.slice(1).map((categorie, index) => {
    return (
      <button
        key={index}
        onClick={() => {
          filteredCat(categorie)
          className=""
        }}
        className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]"
      >
        {categorie}
      </button>
    );
  });

  const buttonAllElements = () => {
    setFilteredCategories(blogPosts)
  }

  return (
    <section className="latest-article gap-[80px] flex bg-[#F9F8F6] flex-col justify-center items-center">
      <div className="article-header gap-[32px] h-[144px] flex flex-col w-full">
        <h3 className="text-header text-[24px] text-left">Latest articles</h3>
        <div className="article-tabbar flex w-full h-[80px] justify-between items-center bg-[#EFEEEB] rounded-xl px-10">
          <div className="hidden md:flex space-x-2">
            <button onClick={buttonAllElements} className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[#DAD6D1]">
              Highlight
            </button>
            {buttonElements}
          </div>
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
        {filteredCategories.map((key, index) => {
          return (
            <BlogCard
              key={index}
              image={key.image}
              title={key.title}
              category={key.category}
              description={key.description}
              date={key.date}
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
