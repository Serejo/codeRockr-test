export function Header() {
  return (
    <header className="w-full py-4 flex justify-around bg-[#2D2D2D]">
      <div className="flex text-white font-bold ">Rockr Blog</div>
      <div className="flex text-white justify-between items-end">
        <div className="px-7 mx-5">Posts</div>
        <div className="px-7 mx-5">Contact</div>
      </div>
    </header>
  );
}
