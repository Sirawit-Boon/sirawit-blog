import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { blogPosts } from "../data/blogPost";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <section className="latest-article gap-[80px] flex bg-[#F9F8F6] flex-col justify-center items-center">
      <div className="article-header gap-[32px] h-[144px] flex flex-col w-full">
        <h3 className="text-header text-[24px] text-left">Latest articles</h3>
        <div className="article-tabbar flex w-full h-[80px] justify-between items-center bg-[#EFEEEB] rounded-xl px-10">
          <div className="hidden md:flex space-x-2">
            <button className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[#DAD6D1]">
              Highlight
            </button>
            {categories.slice(1).map((categorie, index) => {
              return <button key={index} className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]">
                {categorie}
              </button>;
            })}
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
        {/* <div>
          <BlogCard
            title={blogPosts[0].title}
            image={blogPosts[0].image}
            category={blogPosts[0].category}
            description={blogPosts[0].description}
            author={blogPosts[0].author}
            date={blogPosts[0].date}
          />
        </div>
        <BlogCard
          title={blogPosts[1].title}
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <div>
          <BlogCard
            title={blogPosts[2].title}
            image={blogPosts[2].image}
            category={blogPosts[2].category}
            description={blogPosts[2].description}
            author={blogPosts[2].author}
            date={blogPosts[2].date}
          />
        </div>
        <BlogCard
          title={blogPosts[3].title}
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <div>
          <BlogCard
            title={blogPosts[4].title}
            image={blogPosts[4].image}
            category={blogPosts[4].category}
            description={blogPosts[4].description}
            author={blogPosts[4].author}
            date={blogPosts[4].date}
          />
        </div>
        <div>
          <BlogCard
            title={blogPosts[5].title}
            image={blogPosts[5].image}
            category={blogPosts[5].category}
            description={blogPosts[5].description}
            author={blogPosts[5].author}
            date={blogPosts[5].date}
          />
        </div> */}
        {blogPosts.map((key, index) => {
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
