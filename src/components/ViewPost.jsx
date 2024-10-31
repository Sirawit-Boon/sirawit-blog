import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { LikeComment } from "./ui/LikeComment";

export function ViewPost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);

  const params = useParams();

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${params.postId}`
      );
      console.log(response.data);
      setTitle(response.data.title);
      setImage(response.data.image);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setAuthor(response.data.author);
      setDate(response.data.date);
      setContent(response.data.content);
      setLikes(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="content flex justify-center h-full bg-[#f9f8f6]">
      <main className="container lg:min-w-[1200px] flex flex-col gap-12">
        <img className="w-full rounded-2xl" src={image} alt="" />
        <div className="main-content flex gap-20">
          <div className="left-content flex flex-col text-start max-w-[815px] gap-12">
            <div className="left-content-header flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="category bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2 ">
                  {category}
                </span>
                <span className="date">{formatDate(date)}</span>
              </div>
              <h2 className="title text-4xl font-semibold">{title}</h2>
            </div>
            <div className="left-content-descript">
              <p className="description">{description}</p>
              <div className="markdown flex flex-col">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
              <div className="like-copy bg-[#EFEEEB] w-full h-[80px] rounded-xl my-10">
                <LikeComment />
              </div>
            </div>
          </div>

          <div className="right-content bg-[#EFEEEB] max-h-[400px] p-6 max-w-[305px] rounded-xl">
            <div className="right-content-header">
              <div className="head flex gap-2 max-w-[257px] max-h-[48px]">
                <img
                  className="w-11 h-11 rounded-full mr-2"
                  src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                  alt="Tomson P."
                />
                <div className="text-start">
                  <p className="author">Author</p>
                  <p className="author text-lg font-semibold">{author}</p>
                </div>
              </div>
              <div className="line">
                <br />
              </div>
              <div className="text-author text-start">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
                <br />
                <br />
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
