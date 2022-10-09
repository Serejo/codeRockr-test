import { Link, useNavigate } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full py-4 flex justify-around bg-[#2D2D2D]">
      <div className="flex text-white font-bold ">Rockr Blog</div>
      <div className="flex text-white justify-between items-end">
        <Link to={"/"}>
          <div className="px-7 mx-5 hover:bg-[#F1A10A] transition-colors rounded-xl hover:rounded-xl hover:cursor-pointer">
            Posts
          </div>
        </Link>
        <Link to={"/"}>
          <div className="px-7 mx-5">Contact</div>
        </Link>
        <Link to={"/new-article"}>
          <div className="px-7 mx-5 bg-[#F1A10A] transition-colors rounded-xl cursor-pointer hover:rounded-xl hover:cursor-pointer">
            New Post
          </div>
        </Link>
      </div>
    </header>
  );
}
