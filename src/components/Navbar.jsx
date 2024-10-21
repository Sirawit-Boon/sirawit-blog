import blogLogo from "../img/logo.png";
export function Navbar() {
  return (
    <nav className="bg-[#F9F8F6] flex justify-between w-full h-[80px] items-center px-24 border-b-[1px]">
      <a href="#">
        <img src={blogLogo} alt="Web Logo" />
      </a>
      <div className="card-button gap-[8px] h-[48px] w-[276px] flex justify-between">
        <button className="bg-white rounded-[999px] border-[1px] border-black p-2 text-center w-[127px]">
          Log in
        </button>
        <button className="bg-black text-white rounded-[999px] border-[1px] p-2 text-center w-[141px]">
          Sign up
        </button>
      </div>
    </nav>
  );
}
